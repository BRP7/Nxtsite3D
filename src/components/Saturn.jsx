import React, { useRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { gsap } from 'gsap';

function Saturn() {
  const saturnRef = useRef();
  const planetTexture = useLoader(TextureLoader, 'https://path-to-saturn-texture.jpg');
  const ringTexture = useLoader(TextureLoader, 'https://path-to-ring-texture.png');

  useEffect(() => {
    if (saturnRef.current) {
      gsap.to(saturnRef.current.position, { x: -5, y: 2, duration: 2 });
    }
  }, []);

  return (
    <group ref={saturnRef} position={[-5, 2, -15]}>
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial map={planetTexture} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.5, 4, 64]} />
        <meshBasicMaterial map={ringTexture} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export default Saturn;
