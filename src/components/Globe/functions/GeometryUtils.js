import * as THREE from 'three';
import { DEG2RAD } from '../Constants/GlobeSettings';

export function dotRadius() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    return Math.min(w, h) * (w < 678 ? 0.25 : 0.30);
}

export function createVectorFromLatLon(lat, lon, radius) {
    const phi = (90 - lat) * DEG2RAD;
    const theta = (lon) * DEG2RAD;
    return new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
    );
}