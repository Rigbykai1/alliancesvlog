import { ROTATION_SENSITIVITY, MAX_TILT } from '../Constants/GlobeSettings';
import * as THREE from 'three';

const getMouseCoordinates = (event, canvas) => {
    const rect = canvas.getBoundingClientRect();
    return {
        x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
        y: -((event.clientY - rect.top) / rect.height) * 2 + 1
    };
};

export function setupMouseHandlers({
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
}) {
    const onMouseMove = (e) => {
        const { x, y } = getMouseCoordinates(e, canvas);
        mouse.current.x = x;
        mouse.current.y = y;

        if (!isDragging.current) {
            raycaster.current.setFromCamera(mouse.current, cameraRef.current);
            const intersects = raycaster.current.intersectObjects(
                [interactionSphereRef.current, specialDotsRef.current].filter(Boolean)
            );

            canvas.style.cursor = intersects.length > 0 ? 'pointer' : 'default';
            isHovering.current = intersects.length > 0;
        }
    };

    const onMouseDown = (e) => {
        const { x, y } = getMouseCoordinates(e, canvas);
        raycaster.current.setFromCamera(new THREE.Vector2(x, y), cameraRef.current);
        const intersects = raycaster.current.intersectObject(interactionSphereRef.current);

        if (intersects.length > 0) {
            isDragging.current = true;
            lastMouse.current = { x: e.clientX, y: e.clientY };
            baseRotation.current = {
                x: sceneRef.current.rotation.x,
                y: sceneRef.current.rotation.y
            };
        }
    };

    const onMouseUp = () => {
        isDragging.current = false;
    };

    const onMouseDrag = (e) => {
        if (isDragging.current) {
            const deltaX = e.clientX - lastMouse.current.x;
            const deltaY = e.clientY - lastMouse.current.y;

            const targetX = baseRotation.current.x + deltaY * ROTATION_SENSITIVITY;
            sceneRef.current.rotation.x = THREE.MathUtils.clamp(
                targetX,
                baseRotation.current.x - MAX_TILT,
                baseRotation.current.x + MAX_TILT
            );

            sceneRef.current.rotation.y = baseRotation.current.y + deltaX * ROTATION_SENSITIVITY;
        }
    };

    const handleDotClick = () => {
        raycaster.current.setFromCamera(mouse.current, cameraRef.current);
        if (specialDotsRef.current) {
            const intersects = raycaster.current.intersectObject(specialDotsRef.current, true);
            if (intersects.length > 0) {
                console.log('Dot clicked');
            }
        }
    };
    return { onMouseMove, onMouseDown, onMouseUp, onMouseDrag, handleDotClick };
}

export const setupEventListeners = (canvas, handlers) => {
    const { onMouseMove, onMouseDown, onMouseUp, onMouseDrag, handleDotClick } = handlers;

    const addListeners = () => {
        canvas.addEventListener('mousemove', onMouseMove);
        canvas.addEventListener('mousedown', onMouseDown);
        canvas.addEventListener('mouseup', onMouseUp);
        canvas.addEventListener('mousemove', onMouseDrag);
        canvas.addEventListener('click', handleDotClick);
    };

    const removeListeners = () => {
        canvas.removeEventListener('mousemove', onMouseMove);
        canvas.removeEventListener('mousedown', onMouseDown);
        canvas.removeEventListener('mouseup', onMouseUp);
        canvas.removeEventListener('mousemove', onMouseDrag);
        canvas.removeEventListener('click', handleDotClick);
    };

    return { addListeners, removeListeners };
};