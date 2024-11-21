import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

const Cyclist = () => {
  const cyclistRef = useRef();
  const wheelRef1 = useRef();
  const wheelRef2 = useRef();
  const pedalRef = useRef();
  const legRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Animation des roues
    if (wheelRef1.current && wheelRef2.current) {
      wheelRef1.current.rotation.z = t * 2;
      wheelRef2.current.rotation.z = t * 2;
    }

    // Animation des pédales et des jambes
    if (pedalRef.current && legRef.current) {
      pedalRef.current.rotation.z = t * 2;
      legRef.current.rotation.x = Math.sin(t * 2) * 0.3;
    }

    // Mouvement du vélo
    if (cyclistRef.current) {
      cyclistRef.current.position.y = Math.sin(t) * 0.1;
    }
  });

  return (
    <group ref={cyclistRef}>
      {/* Cadre du vélo */}
      <mesh position={[0, 0.5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 2, 16]} />
        <meshStandardMaterial color="#2563eb" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Roues */}
      <group ref={wheelRef1} position={[0.8, 0.3, 0]}>
        <mesh>
          <torusGeometry args={[0.3, 0.03, 16, 32]} />
          <meshStandardMaterial color="#1f2937" />
        </mesh>
      </group>
      <group ref={wheelRef2} position={[-0.8, 0.3, 0]}>
        <mesh>
          <torusGeometry args={[0.3, 0.03, 16, 32]} />
          <meshStandardMaterial color="#1f2937" />
        </mesh>
      </group>

      {/* Pédales */}
      <group ref={pedalRef} position={[0, 0.3, 0]}>
        <mesh>
          <cylinderGeometry args={[0.1, 0.1, 0.05, 16]} />
          <meshStandardMaterial color="#4b5563" />
        </mesh>
      </group>

      {/* Cycliste */}
      <group position={[0, 0.8, 0]}>
        {/* Corps */}
        <mesh position={[0, 0.3, 0]} rotation={[0.3, 0, 0]}>
          <capsuleGeometry args={[0.15, 0.4, 8, 16]} />
          <meshStandardMaterial color="#ef4444" />
        </mesh>
        
        {/* Tête */}
        <mesh position={[0, 0.8, 0.1]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#fcd34d" />
        </mesh>
        
        {/* Jambes */}
        <group ref={legRef} position={[0, 0, 0]}>
          <mesh position={[0.1, -0.2, 0]} rotation={[0.3, 0, 0.1]}>
            <capsuleGeometry args={[0.06, 0.4, 8, 16]} />
            <meshStandardMaterial color="#3b82f6" />
          </mesh>
          <mesh position={[-0.1, -0.2, 0]} rotation={[-0.3, 0, -0.1]}>
            <capsuleGeometry args={[0.06, 0.4, 8, 16]} />
            <meshStandardMaterial color="#3b82f6" />
          </mesh>
        </group>
      </group>
    </group>
  );
};

const Scene = () => {
  return (
    <group>
      <Cyclist />
      {/* Sol */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#e5e7eb" />
      </mesh>
    </group>
  );
};

export default function BikeScene() {
  return (
    <div className="w-full h-[500px] bg-gradient-to-b from-sky-400 to-sky-200">
      <Canvas
        shadows
        camera={{ position: [3, 2, 5], fov: 50 }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} castShadow />
        <Scene />
        <OrbitControls 
          enableZoom={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2.5}
          autoRotate
          autoRotateSpeed={1}
        />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}
