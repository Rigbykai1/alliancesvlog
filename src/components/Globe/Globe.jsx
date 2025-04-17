import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { setupScene } from './functions/CameraFunctions';
import { animate } from './functions/Animation';
import { addGlobePoints } from './functions/GlobeFunctions';
import { setupMouseHandlers, setupEventListeners } from './functions/InteractionSphere';
import { SPECIAL_POINTS } from './Constants/Constants';
import { AUTO_ROTATION_SPEED } from './Constants/GlobeSettings';
import { computeRadius } from './functions/GeometryUtils';
import { createMainSphere, createInteractionSphere } from './functions/GlobeMeshes';


export default function Globe() {
  const canvasRef = useRef();
  const rendererRef = useRef();
  const sceneRef = useRef();
  const cameraRef = useRef();
  const raycaster = useRef(new THREE.Raycaster());
  const mouse = useRef(new THREE.Vector2());
  const isDragging = useRef(false);
  const isHovering = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });
  const baseRotation = useRef({ x: 0, y: 0 });
  const interactionSphereRef = useRef();
  const specialDotsRef = useRef();
  const normalMeshRef = useRef();

  useEffect(() => {
    setupScene(canvasRef, rendererRef, sceneRef, cameraRef);
    const radius = computeRadius();
    const canvas = canvasRef.current;

    const mainSphere = createMainSphere(radius);
    sceneRef.current.add(mainSphere);

    interactionSphereRef.current = createInteractionSphere(radius);
    sceneRef.current.add(interactionSphereRef.current);

    addGlobePoints(sceneRef, SPECIAL_POINTS).then(({ normalMesh, specialMesh }) => {
      specialDotsRef.current = specialMesh;
      normalMeshRef.current = normalMesh;
    });

    const { onMouseMove, onMouseDown, onMouseUp, onMouseDrag, handleDotClick } = setupMouseHandlers({
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
    });

    const { addListeners, removeListeners } = setupEventListeners(canvas, {
      onMouseMove,
      onMouseDown,
      onMouseUp,
      onMouseDrag,
      handleDotClick
    });

    addListeners();

    animate(rendererRef, sceneRef, cameraRef, isDragging, isHovering, AUTO_ROTATION_SPEED);

    return () => {

      sceneRef.current.remove(interactionSphereRef.current);
      sceneRef.current.remove(mainSphere);

      if (specialDotsRef.current) {
        sceneRef.current.remove(specialDotsRef.current);
      }
      specialDotsRef.current = null;
      removeListeners();
    };
  }, []);

  return <canvas ref={canvasRef} className="block h-full w-full cursor-default" />;
}