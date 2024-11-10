import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react';

function RotatingCube() {
  const meshRef = useRef();

  // Rotate the cube on each frame
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshPhongMaterial color="orange" />
    </mesh>
  );
}

export default RotatingCube