import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import SpecialPointsModal from './SpecialPointsModal';
import { setupScene } from './functions/SceneSetup';
import { animate } from './functions/Animation';
import { addGlobePoints } from './functions/GlobeFunctions';
import { SPECIAL_POINTS } from './Constants/Constants';
import { AUTO_ROTATION_SPEED, ZOOM_TARGET_DISTANCE, ROTATION_SENSITIVITY } from './Constants/GlobeSettings';
import { computeRadius } from './functions/GeometryUtils';

export default function WorldMapLinks() {
  const canvasRef = useRef();
  const rendererRef = useRef();
  const sceneRef = useRef();
  const cameraRef = useRef();
  const raycaster = useRef(new THREE.Raycaster());
  const mouse = useRef(new THREE.Vector2());
  const isDragging = useRef(false);
  const isHovering = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });
  const isZooming = useRef(false);
  const zoomStartTime = useRef(0);
  const originalCameraPosition = useRef(null);
  const zoomStartPos = useRef(null);
  const zoomTargetPos = useRef(null);

  useEffect(() => {
    // Configurar la escena, cámara y renderizador
    setupScene(canvasRef, rendererRef, sceneRef, cameraRef);

    // Crear la esfera principal
    const radius = computeRadius();
    const mainSphere = new THREE.Mesh(
      new THREE.SphereGeometry(radius * 0.8, 64, 64),
      new THREE.MeshStandardMaterial({
        color: 0xA4F76B, // Color oscuro para asemejarse a GitHub
        roughness: 1,
        metalness: 0.5,
        opacity: 0.1,
        transparent: true,

      })
    );
    mainSphere.rotation.y = Math.PI; // Corregir orientación para que el norte quede arriba
    sceneRef.current.add(mainSphere);

    // Crear la esfera interactiva (más pequeña y verde)
    const interactionSphere = new THREE.Mesh(
      new THREE.SphereGeometry(radius, 64, 64), // 80% del tamaño de la esfera principal
      new THREE.MeshBasicMaterial({
        color: 0x6FF749,
        opacity: 0.2,
        transparent: true
      })
    );
    sceneRef.current.add(interactionSphere);

    // Agregar puntos al globo
    const specialDots = addGlobePoints(sceneRef, SPECIAL_POINTS);

    // Configurar eventos del mouse
    const canvas = canvasRef.current;

    const onMouseMove = (e) => {
      // Actualizar posición del mouse
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      // Detectar si el mouse está sobre la esfera interactiva o los puntos especiales
      raycaster.current.setFromCamera(mouse.current, cameraRef.current);
      const intersects = raycaster.current.intersectObjects([interactionSphere, ...specialDots]);

      if (intersects.length > 0) {
        canvas.style.cursor = 'pointer';
        isHovering.current = true; // Detener rotación automática
      } else {
        canvas.style.cursor = 'default';
        isHovering.current = false; // Reanudar rotación automática
      }
    };

    const onMouseDown = (e) => {
      isDragging.current = true;
      lastMouse.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = (e) => {
      isDragging.current = false;

      // Detectar si se hizo clic en un punto especial
      raycaster.current.setFromCamera(mouse.current, cameraRef.current);
      const intersects = raycaster.current.intersectObjects(specialDots);

      if (intersects.length > 0) {
        const clickedDot = intersects[0].object.userData;
        handleSpecialDotClick(clickedDot, intersects[0].point);
      }
    };

    const onMouseDrag = (e) => {
      if (isDragging.current) {
        const deltaX = e.clientX - lastMouse.current.x;
        const deltaY = e.clientY - lastMouse.current.y;
        sceneRef.current.rotation.y += deltaX * ROTATION_SENSITIVITY;
        sceneRef.current.rotation.x += deltaY * ROTATION_SENSITIVITY;
        lastMouse.current = { x: e.clientX, y: e.clientY };
      }
    };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('mousemove', onMouseDrag);

    // Iniciar animación
    animate(rendererRef, sceneRef, cameraRef, isDragging, isHovering, isZooming, AUTO_ROTATION_SPEED);

    // Limpiar eventos al desmontar el componente
    return () => {
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mousedown', onMouseDown);
      canvas.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('mousemove', onMouseDrag);
      sceneRef.current.remove(interactionSphere);
      sceneRef.current.remove(mainSphere);
    };
  }, []);

  function handleSpecialDotClick(point, position) {
    if (!isZooming.current) {
      isZooming.current = true;
      zoomStartTime.current = Date.now();

      if (!originalCameraPosition.current) {
        originalCameraPosition.current = cameraRef.current.position.clone();
      }

      zoomStartPos.current = cameraRef.current.position.clone();
      zoomTargetPos.current = position.normalize().multiplyScalar(computeRadius() * ZOOM_TARGET_DISTANCE);

      // Mostrar modal con información del punto especial
      const modal = document.getElementById('my_modal_5');
      modal.showModal();
      document.getElementById('modal_title').textContent = point.label;
      document.getElementById('modal_content').textContent = `Coordenadas: ${point.lat}, ${point.lon}`;
    }
  }

  return (
    <>
      <canvas ref={canvasRef} className="block h-full w-full cursor-default" />
      <SpecialPointsModal
        isZooming={isZooming}
        zoomStartTime={zoomStartTime}
        zoomStartPos={zoomStartPos}
        zoomTargetPos={zoomTargetPos}
        originalCameraPosition={originalCameraPosition}
        cameraRef={cameraRef}
      />
    </>
  );
}