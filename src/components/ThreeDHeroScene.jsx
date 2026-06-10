import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleGlobe() {
  const pointsRef = useRef();
  const globeRef = useRef();
  const [hovered, setHover] = useState(false);

  // Generate particles
  const particleCount = 1000;
  const positions = React.useMemo(() => {
    const arr = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      // Sphere random distribution
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.0 + Math.random() * 0.5; // distance from center
      
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    // Rotate the particle globe
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.05;
      pointsRef.current.rotation.x = time * 0.02;
    }
    if (globeRef.current) {
      globeRef.current.rotation.y = -time * 0.1;
      globeRef.current.rotation.x = Math.sin(time * 0.2) * 0.2;
    }
  });

  return (
    <group>
      {/* Outer particle sphere */}
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#e8a61e"
          size={0.04}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>

      {/* Inner wireframe globe */}
      <mesh
        ref={globeRef}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <sphereGeometry args={[1.5, 20, 20]} />
        <meshBasicMaterial
          color={hovered ? "#e8a61e" : "#005bb7"}
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
}

// Interactive component reacting to mouse move
function MouseTracker() {
  const { camera } = useThree();
  const targetRotation = useRef({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse coordinates (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      targetRotation.current = { x: x * 0.3, y: y * 0.3 };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    // Smooth camera transition towards target rotation
    camera.position.x += (targetRotation.current.x * 5 - camera.position.x) * 0.05;
    camera.position.y += (targetRotation.current.y * 5 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function ThreeDHeroScene() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1, pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ pointerEvents: 'auto' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <ParticleGlobe />
        <MouseTracker />
      </Canvas>
    </div>
  );
}
