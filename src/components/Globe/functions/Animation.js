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
        // Interpola el nivel de zoom
        const zoomSpeed = 0.03; // Ajusta este valor para controlar la velocidad del zoom
        const currentZoom = cameraRef.current.position.length() / originalCameraPosition.current.length();
        const newZoom = THREE.MathUtils.lerp(currentZoom, targetZoom.current, zoomSpeed);

        // Aplica el nuevo nivel de zoom a la posición de la cámara
        cameraRef.current.position.copy(originalCameraPosition.current.clone().normalize().multiplyScalar(originalCameraPosition.current.length() * newZoom));

        // Si el zoom está cerca del objetivo, detén la animación
        if (Math.abs(newZoom - targetZoom.current) < 0.001) {
            isAnimating.current = false;
        }
    } else if (!isHovering.current) {
        sceneRef.current.rotation.y += AUTO_ROTATION_SPEED;
    }

    rendererRef.current.render(sceneRef.current, cameraRef.current);
}