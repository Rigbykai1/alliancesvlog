import { setupMouseHandlers, setupEventListeners } from './functions/InteractionSphere';
import { createMainSphere, createInteractionSphere } from './functions/GlobeMeshes';
import { AUTO_ROTATION_SPEED } from './Constants/GlobeSettings';
import { addGlobePoints } from './functions/GlobeFunctions';
import { dotRadius } from './functions/GeometryUtils';
import { setupScene } from './functions/CameraFunctions';
import { useRef, useEffect } from 'react';
import { animate } from './functions/Animation';
import * as THREE from 'three';

export default function Globe({ mainSphereColor, interactionSphereColor, dotsData, onDotClick, zoomOutTrigger, setZoomOutTrigger }) {

  const canvasRef = useRef();
  const rendererRef = useRef();
  const sceneRef = useRef();
  const cameraRef = useRef();
  const interactionSphereRef = useRef();
  const globeGroupRef = useRef();
  const specialDotsRef = useRef();
  const normalMeshRef = useRef();
  const baseRotation = useRef({ x: 0, y: 0 });
  const raycaster = useRef(new THREE.Raycaster());
  const mouse = useRef(new THREE.Vector2());
  const isDragging = useRef(false);
  const isHovering = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });
  const originalCameraPosition = useRef(new THREE.Vector3());
  const isAnimating = useRef(false);
  const targetZoom = useRef(1);

  useEffect(() => {
    if (zoomOutTrigger) {
      targetZoom.current = 1;
      isAnimating.current = true;
      setZoomOutTrigger(!zoomOutTrigger);
    }
  }, [zoomOutTrigger]);

  useEffect(() => {
    setupScene(canvasRef, rendererRef, sceneRef, cameraRef);
    const radius = dotRadius();
    const canvas = canvasRef.current;

    const globeGroup = new THREE.Group();
    globeGroupRef.current = globeGroup;

    const mainSphere = createMainSphere(radius, mainSphereColor);
    globeGroup.add(mainSphere);

    interactionSphereRef.current = createInteractionSphere(radius, interactionSphereColor);
    globeGroup.add(interactionSphereRef.current);

    addGlobePoints(sceneRef, dotsData).then(({ normalMesh, specialMesh }) => {
      normalMeshRef.current = normalMesh;
      specialDotsRef.current = specialMesh;
      globeGroup.add(normalMesh, specialMesh);
    });

    sceneRef.current.add(globeGroup);

    const { onMove, onDown, onUp, onDrag, handleClick } = setupMouseHandlers({

      canvas,
      mouse,
      raycaster,
      isDragging,
      isHovering,
      lastMouse,
      baseRotation,
      cameraRef,
      sceneRef,
      interactionSphereRef,
      specialDotsRef,
      normalMeshRef,

      onDotClick: (dot) => {
        originalCameraPosition.current.copy(cameraRef.current.position);

        targetZoom.current = 0.5;

        isAnimating.current = true;
        if (onDotClick) onDotClick(dot);

      }
    });

    // Pasa isDragging en el objeto handlers
    const handlers = {
      onMove,
      onDown,
      onUp,
      onDrag,
      handleClick,
      isDragging
    };
    const { addListeners, removeListeners } = setupEventListeners(canvas, handlers);

    addListeners();

    animate(rendererRef, sceneRef, cameraRef, isDragging, isHovering, AUTO_ROTATION_SPEED, isAnimating, targetZoom, originalCameraPosition);

    return () => {
      sceneRef.current.remove(globeGroup);
      removeListeners();
    };
  }, []);

  return (
    <canvas ref={canvasRef} className='self-center w-full animate-fade-up animate-duration-1000 animate-ease-linear' />
  );
}