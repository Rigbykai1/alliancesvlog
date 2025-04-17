import { setupMouseHandlers, setupEventListeners } from './functions/InteractionSphere';
import { createMainSphere, createInteractionSphere } from './functions/GlobeMeshes';
import { AUTO_ROTATION_SPEED } from './Constants/GlobeSettings';
import { addGlobePoints } from './functions/GlobeFunctions';
import { SPECIAL_POINTS } from './Constants/SpecialPoints';
import { computeRadius } from './functions/GeometryUtils';
import { setupScene } from './functions/CameraFunctions';
import DotsModal from './GlobeModal';
import { useState, useRef, useEffect } from 'react';
import { animate } from './functions/Animation';
import * as THREE from 'three';
import SpecialDotsContent from './SpecialDotsContent';

export default function Globe() {
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
  const [dotData, setDotData] = useState(null);

  const originalCameraPosition = useRef(new THREE.Vector3());
  const isAnimating = useRef(false);
  const targetZoom = useRef(1);

  useEffect(() => {
    setupScene(canvasRef, rendererRef, sceneRef, cameraRef);
    const radius = computeRadius();
    const canvas = canvasRef.current;

    const globeGroup = new THREE.Group();
    globeGroupRef.current = globeGroup;

    const mainSphere = createMainSphere(radius);
    globeGroup.add(mainSphere);

    interactionSphereRef.current = createInteractionSphere(radius);
    globeGroup.add(interactionSphereRef.current);

    addGlobePoints(sceneRef, SPECIAL_POINTS).then(({ normalMesh, specialMesh }) => {
      normalMeshRef.current = normalMesh;
      specialDotsRef.current = specialMesh;
      globeGroup.add(normalMesh, specialMesh);
    });

    sceneRef.current.add(globeGroup);

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
      onDotClick: (dot) => {
        originalCameraPosition.current.copy(cameraRef.current.position);

        targetZoom.current = 0.5;

        isAnimating.current = true;
        setDotData(dot);
      }
    });

    const { addListeners, removeListeners } = setupEventListeners(canvas, {
      onMouseMove,
      onMouseDown,
      onMouseUp,
      onMouseDrag,
      handleDotClick
    });

    addListeners();

    animate(rendererRef, sceneRef, cameraRef, isDragging, isHovering, AUTO_ROTATION_SPEED, isAnimating, targetZoom, originalCameraPosition);

    return () => {
      sceneRef.current.remove(globeGroup);
      removeListeners();
    };
  }, []);

  const handleCloseModal = () => {
    targetZoom.current = 1;
    isAnimating.current = true;
    setDotData(null);
  };

  return (
    <>
      <canvas ref={canvasRef} />
      <DotsModal
        open={!!dotData}
        onClose={handleCloseModal}
        modalContent={<SpecialDotsContent dot={dotData} />}
      />
    </>
  );
}