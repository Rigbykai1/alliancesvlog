export function animate(rendererRef, sceneRef, cameraRef, isDragging, isHovering, AUTO_ROTATION_SPEED) {
    requestAnimationFrame(() => animate(rendererRef, sceneRef, cameraRef, isDragging, isHovering, AUTO_ROTATION_SPEED));
    if (!isHovering.current) {
        sceneRef.current.rotation.y += AUTO_ROTATION_SPEED;
    }
    rendererRef.current.render(sceneRef.current, cameraRef.current);
}