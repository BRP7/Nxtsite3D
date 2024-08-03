const texture = useLoader(TextureLoader, 'https://images.pexels.com/photos/596134/pexels-photo-596134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'); // URL to a moon image from Pexels
import React, { useRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { gsap } from 'gsap';

function Moon() {
  const moonRef = useRef();

  useEffect(() => {
    if (moonRef.current) {
      gsap.to(moonRef.current.position, { x: 5, y: 5, duration: 2 });
    }
  }, []);

  return (
    <mesh ref={moonRef} position={[5, 5, -10]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default Moon;
