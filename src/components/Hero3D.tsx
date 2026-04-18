import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls, Sphere, Torus, Icosahedron } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function FloatingShapes() {
  const torusRef = useRef<Mesh>(null);
  const icoRef = useRef<Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.3;
      torusRef.current.rotation.y = t * 0.2;
    }
    if (icoRef.current) {
      icoRef.current.rotation.x = t * 0.4;
      icoRef.current.rotation.z = t * 0.2;
    }
  });

  return (
    <>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1, 64, 64]} position={[0, 0, 0]} scale={1.4}>
          <MeshDistortMaterial
            color="#7dd3fc"
            attach="material"
            distort={0.45}
            speed={2}
            roughness={0.1}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
        <Torus ref={torusRef} args={[1.8, 0.08, 16, 100]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#c4b5fd" emissive="#7c3aed" emissiveIntensity={0.5} metalness={0.9} roughness={0.2} />
        </Torus>
      </Float>

      <Float speed={1.8} rotationIntensity={3} floatIntensity={2.5}>
        <Icosahedron ref={icoRef} args={[0.4, 0]} position={[2.2, 1.2, 0]}>
          <meshStandardMaterial color="#f0abfc" emissive="#d946ef" emissiveIntensity={0.6} wireframe />
        </Icosahedron>
      </Float>

      <Float speed={2.2} rotationIntensity={2} floatIntensity={2}>
        <Icosahedron args={[0.3, 0]} position={[-2.3, -1.3, 0.5]}>
          <meshStandardMaterial color="#7dd3fc" emissive="#0ea5e9" emissiveIntensity={0.7} wireframe />
        </Icosahedron>
      </Float>
    </>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#7dd3fc" />
      <pointLight position={[-5, -5, -5]} intensity={0.6} color="#c4b5fd" />
      <Suspense fallback={null}>
        <FloatingShapes />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}
