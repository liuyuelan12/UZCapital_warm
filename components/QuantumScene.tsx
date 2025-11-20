/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Icosahedron, Box, Torus, Stars, Environment, Line } from '@react-three/drei';
import * as THREE from 'three';

const BlockNode = ({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.position.y = position[1] + Math.sin(t * 1 + position[0]) * 0.1;
      ref.current.rotation.x = t * 0.2;
      ref.current.rotation.y = t * 0.2;
    }
  });

  return (
    <Icosahedron ref={ref} args={[1, 0]} position={position} scale={scale}>
      <meshStandardMaterial
        color={color}
        envMapIntensity={1}
        metalness={0.8}
        roughness={0.2}
        wireframe={false}
      />
    </Icosahedron>
  );
};

const NetworkLines = () => {
    // Abstract connecting lines
    return (
        <group>
             {/* Simple lines connecting implied nodes */}
        </group>
    )
}

const FloatingCube = () => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
       const t = state.clock.getElapsedTime();
       ref.current.rotation.x = Math.sin(t * 0.2) * 0.1;
       ref.current.rotation.y = t * 0.1;
    }
  });

  return (
    <Box ref={ref} args={[2, 2, 2]} rotation={[Math.PI / 4, Math.PI/4, 0]}>
       <meshStandardMaterial color="#C5A059" wireframe transparent opacity={0.3} />
    </Box>
  );
}

export const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <BlockNode position={[0, 0, 0]} color="#1a1a1a" scale={1.5} />
          <FloatingCube />
        </Float>
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
           <BlockNode position={[-3, 1.5, -2]} color="#C5A059" scale={0.6} />
           <BlockNode position={[3.5, -1, -3]} color="#C5A059" scale={0.8} />
           <BlockNode position={[-2, -2, -1]} color="#333" scale={0.4} />
           <BlockNode position={[2, 2, -4]} color="#555" scale={0.5} />
        </Float>

        <Environment preset="city" />
        {/* Fog for depth */}
        <fog attach="fog" args={['#F9F8F4', 5, 15]} />
      </Canvas>
    </div>
  );
};

export const GenesisBlockScene: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={2} color="#C5A059" />
        <pointLight position={[-5, -5, -5]} intensity={1} color="#444" />
        <Environment preset="studio" />
        
        <Float rotationIntensity={0.4} floatIntensity={0.2} speed={1}>
          <group rotation={[0, Math.PI / 4, 0]} position={[0, 0, 0]}>
            
            {/* The "Genesis Block" - A complex cube structure */}
            <Box args={[1.5, 1.5, 1.5]}>
                <meshStandardMaterial color="#111" metalness={0.9} roughness={0.1} />
            </Box>
            
            {/* Inner glowing core */}
            <Box args={[1.0, 1.0, 1.0]}>
                <meshStandardMaterial color="#C5A059" emissive="#C5A059" emissiveIntensity={0.5} />
            </Box>

            {/* Orbiting rings */}
            <Torus args={[2.2, 0.02, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
                 <meshStandardMaterial color="#C5A059" metalness={1} roughness={0} />
            </Torus>
            <Torus args={[1.8, 0.02, 16, 100]} rotation={[0, 0, Math.PI / 2]}>
                 <meshStandardMaterial color="#666" metalness={1} roughness={0} />
            </Torus>

            {/* Small satellites */}
            <Box args={[0.2, 0.2, 0.2]} position={[2.2, 0, 0]}>
                 <meshStandardMaterial color="#C5A059" />
            </Box>
             <Box args={[0.2, 0.2, 0.2]} position={[-2.2, 0, 0]}>
                 <meshStandardMaterial color="#C5A059" />
            </Box>

          </group>
        </Float>
      </Canvas>
    </div>
  );
}