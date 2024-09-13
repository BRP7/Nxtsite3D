import React, { useRef, useEffect } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { TextureLoader } from 'three';
import { gsap } from 'gsap';
import NavMenu from './components/NavMenu';
import Portfolio from './components/Portfolio';
import Moon from './components/Moon';
import Saturn from './components/Saturn.jsx';

function App() {
  const sunRef = useRef();

  useEffect(() => {
    if (sunRef.current) {
      gsap.to(sunRef.current.scale, { x: 4, y: 4, z: 4, duration: 3 });
    }
  }, []);

  return (
    <div style={{ height: '100vh', background: '#000', position: 'relative' }}>
      <NavMenu />
      <Canvas style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <OrbitControls />
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} />
        <Stars />
        <mesh ref={sunRef} position={[0, 0, -20]}>
          <sphereGeometry args={[3, 64, 64]} />
          <meshBasicMaterial color="yellow" emissive="yellow" emissiveIntensity={1} />
        </mesh>
        {/* Add other planets and the moon */}
        <Moon />
        <Saturn />
      </Canvas>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
