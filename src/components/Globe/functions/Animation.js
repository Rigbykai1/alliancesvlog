import * as THREE from 'three';

export function animate(
    rendererRef,
    sceneRef,
    cameraRef,
    isDragging,
    isHovering,
    AUTO_ROTATION_SPEED,
    isAnimating,
    targetZoom,
    originalCameraPosition
) {
    requestAnimationFrame(() =>
        animate(rendererRef, sceneRef, cameraRef, isDragging, isHovering, AUTO_ROTATION_SPEED, isAnimating, targetZoom, originalCameraPosition)
    );

    if (isAnimating.current) {
        const zoomSpeed = 0.03;
        const currentZoom = cameraRef.current.position.length() / originalCameraPosition.current.length();
        const newZoom = THREE.MathUtils.lerp(currentZoom, targetZoom.current, zoomSpeed);

        cameraRef.current.position.copy(originalCameraPosition.current.clone().normalize().multiplyScalar(originalCameraPosition.current.length() * newZoom));

        if (Math.abs(newZoom - targetZoom.current) < 0.001) {
            isAnimating.current = false;
        }
    } else if (!isHovering.current) {
        sceneRef.current.rotation.y += AUTO_ROTATION_SPEED;
    }

    rendererRef.current.render(sceneRef.current, cameraRef.current);
}