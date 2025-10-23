import * as THREE from 'three';
import { createVectorFromLatLon } from './GeometryUtils';

export function createSpecialDots(radius, specialPoints) {
    const geo = new THREE.BoxGeometry(4, 4, 4);
    const mat = new THREE.MeshLambertMaterial({ transparent: false, opacity: 0.8, emissive: 0x404040, emissiveIntensity: 1 });
    const mesh = new THREE.InstancedMesh(geo, mat, specialPoints.length);

    specialPoints.forEach((pt, i) => {
        const pos = createVectorFromLatLon(pt.lat, pt.lon, radius);
        const obj = new THREE.Object3D();
        obj.position.copy(pos);
        obj.lookAt(0, 0, 0);
        obj.scale.set(pt.size, pt.size, pt.size);
        obj.updateMatrix();
        mesh.setMatrixAt(i, obj.matrix);
        mesh.setColorAt(i, new THREE.Color(pt.color));
    });

    mesh.userData.specialPoints = specialPoints;

    return mesh;
}

export function createInstancedDots(imgData, imgW, imgH, radius, scaleFactor, emissiveIntensity) {
    const positions = [];
    const density = 0.2;

    for (let lat = -90; lat <= 90; lat += 180 / 64) {
        const circleR = Math.cos(lat * Math.PI / 180) * radius;
        const count = Math.floor(circleR * Math.PI * density);
        for (let i = 0; i < count; i++) {
            const lon = -180 + (i * 360) / count;
            const xImg = Math.floor(((lon + 180) / 360) * imgW);
            const yImg = Math.floor(((lat + 90) / 180) * imgH);
            if (imgData[(yImg * imgW + xImg) * 4 + 3] < 128) continue;
            positions.push(createVectorFromLatLon(lat, lon, radius));
        }
    }

    const geo = new THREE.BoxGeometry(5 * scaleFactor, 5 * scaleFactor, 5 * scaleFactor);
    const mat = new THREE.MeshLambertMaterial({ color: 0xffff, emissive: 0x404040, emissiveIntensity });
    const mesh = new THREE.InstancedMesh(geo, mat, positions.length);

    positions.forEach((pos, i) => {
        const obj = new THREE.Object3D();
        obj.position.copy(pos);
        obj.lookAt(0, 0, 0);
        obj.scale.set(scaleFactor * 3, scaleFactor * 3, scaleFactor * 3);
        obj.updateMatrix();
        mesh.setMatrixAt(i, obj.matrix);
    });

    return mesh;
}

export const createMainSphere = (radius, color) => {
    const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(radius * 0.8, 64, 64),
        new THREE.MeshStandardMaterial({
            color: color,
            roughness: 1,
            metalness: 0.5,
            opacity: 1,
            transparent: true,
        })
    );
    return sphere;
};

export const createInteractionSphere = (radius, color) => {
    return new THREE.Mesh(
        new THREE.SphereGeometry(radius, 64, 64),
        new THREE.MeshBasicMaterial({
            color: color,
            opacity: 0.3,
            transparent: true
        })
    );
};