import { ROTATION_SENSITIVITY, MAX_TILT } from '../Constants/GlobeSettings';
import * as THREE from 'three';

const getCoordinates = (event, canvas) => {
    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;

    if (event.touches && event.touches.length > 0) {
        clientX = event.touches[0].clientX;
        clientY = event.touches[0].clientY;
    } else {
        clientX = event.clientX;
        clientY = event.clientY;
    }

    return {
        x: ((clientX - rect.left) / rect.width) * 2 - 1,
        y: -((clientY - rect.top) / rect.height) * 2 + 1
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
    onDotClick
}) {
    const onMove = (e) => {
        if (e.type === 'touchmove') e.preventDefault();
        const { x, y } = getCoordinates(e, canvas);
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

    const onDown = (e) => {
        if (e.type === 'touchstart') e.preventDefault();
        const { x, y } = getCoordinates(e, canvas);
        raycaster.current.setFromCamera(new THREE.Vector2(x, y), cameraRef.current);
        const intersects = raycaster.current.intersectObject(interactionSphereRef.current);

        if (intersects.length > 0) {
            isDragging.current = true;
            lastMouse.current = {
                x: e.touches && e.touches.length > 0 ? e.touches[0].clientX : e.clientX,
                y: e.touches && e.touches.length > 0 ? e.touches[0].clientY : e.clientY
            };
            baseRotation.current = {
                x: sceneRef.current.rotation.x,
                y: sceneRef.current.rotation.y
            };
        }
    };

    const onUp = () => {
        isDragging.current = false;
    };

    const onDrag = (e) => {
        if (isDragging.current) {
            const currentClientX = e.touches && e.touches.length > 0 ? e.touches[0].clientX : e.clientX;
            const currentClientY = e.touches && e.touches.length > 0 ? e.touches[0].clientY : e.clientY;

            const deltaX = currentClientX - lastMouse.current.x;
            const deltaY = currentClientY - lastMouse.current.y;

            const targetX = baseRotation.current.x + deltaY * ROTATION_SENSITIVITY;
            sceneRef.current.rotation.x = THREE.MathUtils.clamp(
                targetX,
                baseRotation.current.x - MAX_TILT,
                baseRotation.current.x + MAX_TILT
            );

            sceneRef.current.rotation.y = baseRotation.current.y + deltaX * ROTATION_SENSITIVITY;

            lastMouse.current = { x: currentClientX, y: currentClientY };
        }
    };

    const handleClick = () => {
        raycaster.current.setFromCamera(mouse.current, cameraRef.current);
        if (specialDotsRef.current) {
            const intersects = raycaster.current.intersectObject(specialDotsRef.current, true);
            if (intersects.length > 0) {
                const instanceId = intersects[0].instanceId;
                const data = specialDotsRef.current.userData.specialPoints[instanceId];
                // Validar que data exista antes de llamar a onDotClick
                if (data && onDotClick) {
                    onDotClick(data);
                }
            }
        }
    };

    return { onMove, onDown, onUp, onDrag, handleClick };
}

export const setupEventListeners = (canvas, handlers) => {
    const { onMove, onDown, onUp, onDrag, handleClick } = handlers;

    const addListeners = () => {
        // Mouse events
        canvas.addEventListener('mousemove', onMove);
        canvas.addEventListener('mousedown', onDown);
        canvas.addEventListener('mouseup', onUp);
        canvas.addEventListener('mousemove', onDrag);
        canvas.addEventListener('click', handleClick);

        // Touch events
        canvas.addEventListener('touchmove', onMove, { passive: false });
        canvas.addEventListener('touchstart', onDown, { passive: false });
        canvas.addEventListener('touchend', onUp);
        canvas.addEventListener('touchmove', onDrag, { passive: false });
        // Simular click en touchend si no fue drag
        canvas.addEventListener('touchend', (e) => {
            if (!handlers.isDragging || !handlers.isDragging.current) {
                handleClick();
            }
        });
    };

    const removeListeners = () => {
        // Mouse events
        canvas.removeEventListener('mousemove', onMove);
        canvas.removeEventListener('mousedown', onDown);
        canvas.removeEventListener('mouseup', onUp);
        canvas.removeEventListener('mousemove', onDrag);
        canvas.removeEventListener('click', handleClick);

        // Touch events
        canvas.removeEventListener('touchmove', onMove);
        canvas.removeEventListener('touchstart', onDown);
        canvas.removeEventListener('touchend', onUp);
        canvas.removeEventListener('touchmove', onDrag);
        // No es necesario remover el touchend extra porque es una función anónima,
        // pero si quieres puedes guardar la referencia y removerla igual.
    };

    return { addListeners, removeListeners };
};