import { computeRadius } from './GeometryUtils';
import * as THREE from 'three';


export function setupScene(canvasRef, rendererRef, sceneRef, cameraRef) {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1c1917);
    scene.add(new THREE.AmbientLight(0xffffff, 1));
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.set(0, 0, computeRadius() * (window.innerWidth < 678 ? 5 : 3.5));
    cameraRef.current = camera;
}