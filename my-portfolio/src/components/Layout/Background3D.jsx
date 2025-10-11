import React, { useEffect, useRef } from "react";
import * as THREE from "three";

function Background3D() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const container = canvasRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    camera.position.z = 10;

    const panels = [];
    for (let i = 0; i < 12; i++) {
      const geometry = new THREE.PlaneGeometry(2.5, 3.5);
      const material = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color().setHSL(Math.random(), 0.7, 0.7),
        transparent: true,
        opacity: 0.2,
        roughness: 0,
        metalness: 0.8,
        clearcoat: 1,
        clearcoatRoughness: 0,
        transmission: 0.95,
        reflectivity: 1,
      });

      const panel = new THREE.Mesh(geometry, material);
      panel.position.set(
        Math.sin(i * 0.8) * 8,
        Math.cos(i * 0.5) * 4,
        Math.sin(i * 1.2) * -6
      );
      panel.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      scene.add(panel);
      panels.push(panel);
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xff6b9d, 1.5);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x4facfe, 1.2);
    pointLight2.position.set(-10, -10, -10);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xc471ed, 1);
    pointLight3.position.set(0, 15, 5);
    scene.add(pointLight3);

    let time = 0;
    function animate() {
      requestAnimationFrame(animate);
      time += 0.003;

      scene.rotation.y = Math.sin(time * 0.5) * 0.1;

      panels.forEach((panel, i) => {
        panel.rotation.x = time * 0.3 + i * 0.1;
        panel.rotation.y = time * 0.2 + i * 0.15;
        panel.position.y += Math.sin(time + i) * 0.002;
      });

      pointLight1.position.x = Math.sin(time) * 10;
      pointLight1.position.y = Math.cos(time) * 10;
      pointLight2.position.x = Math.cos(time * 0.7) * 10;
      pointLight2.position.z = Math.sin(time * 0.7) * 10;

      renderer.render(scene, camera);
    }
    animate();

    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      className="canvas-container"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
      }}
    />
  );
}

export default Background3D;
