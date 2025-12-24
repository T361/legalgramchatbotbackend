// ============================================================================
// FAST ROADMAP - CYBER BACKGROUND COMPONENT
// Three.js Starfield/Cyber-Grid with mouse reactivity
// ============================================================================

"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Starfield particle system
function StarField({ count = 5000 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const { mouse, viewport } = useThree();

  // Generate random star positions
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return positions;
  }, [count]);

  useFrame((state, delta) => {
    if (!ref.current) return;

    // Slow rotation
    ref.current.rotation.x -= delta * 0.02;
    ref.current.rotation.y -= delta * 0.03;

    // Mouse reactivity - subtle parallax effect
    const targetX = (mouse.x * viewport.width) / 20;
    const targetY = (mouse.y * viewport.height) / 20;

    ref.current.position.x = THREE.MathUtils.lerp(
      ref.current.position.x,
      targetX,
      0.02
    );
    ref.current.position.y = THREE.MathUtils.lerp(
      ref.current.position.y,
      targetY,
      0.02
    );
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00f0ff"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Purple accent particles
function PurpleField({ count = 2000 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
    }
    return positions;
  }, [count]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.01;
    ref.current.rotation.y += delta * 0.015;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#7000ff"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.6}
      />
    </Points>
  );
}

// Grid plane
function CyberGrid() {
  const ref = useRef<THREE.GridHelper>(null);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.position.z = ((state.clock.elapsedTime * 2) % 2) - 1;
  });

  return (
    <gridHelper
      ref={ref}
      args={[100, 100, "#00f0ff", "#7000ff"]}
      position={[0, -15, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

// Fallback for low-power devices
function StaticBackground() {
  return (
    <div className="absolute inset-0 bg-black">
      {/* Static mesh gradient fallback */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(112, 0, 255, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(0, 240, 255, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(112, 0, 255, 0.1) 0%, transparent 70%)
          `,
        }}
      />
    </div>
  );
}

// Main component
export function CyberBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      <Suspense fallback={<StaticBackground />}>
        <Canvas
          camera={{ position: [0, 0, 15], fov: 75 }}
          dpr={[1, 2]}
          performance={{ min: 0.5 }}
        >
          <color attach="background" args={["#000000"]} />
          <fog attach="fog" args={["#000000", 15, 50]} />
          <ambientLight intensity={0.1} />
          <StarField count={4000} />
          <PurpleField count={1500} />
          <CyberGrid />
        </Canvas>
      </Suspense>
      {/* Overlay gradient for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)
          `,
        }}
      />
    </div>
  );
}
