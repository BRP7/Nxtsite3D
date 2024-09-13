import React, { useRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { gsap } from 'gsap';

function Moon() {
  const moonRef = useRef();
  const texture = useLoader(TextureLoader, 'https://path-to-high-quality-moon-texture.jpg');

  useEffect(() => {
    if (moonRef.current) {
      gsap.to(moonRef.current.position, { x: 5, y: 5, duration: 2 });
    }
  }, []);

  return (
    <mesh ref={moonRef} position={[5, 5, -10]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={texture} emissive="white" emissiveIntensity={0.8} />
    </mesh>
  );
}

export default Moon;
