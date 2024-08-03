import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { gsap } from 'gsap';
import NavMenu from './components/NavMenu';
import Portfolio from './components/Portfolio';

function App() {
  const sphereRef = useRef();

  useEffect(() => {
    if (sphereRef.current) {
      gsap.to(sphereRef.current.scale, { x: 2, y: 2, z: 2, duration: 2 });
    }
  }, []);

  return (
    <div style={{ height: '100vh', background: '#000', position: 'relative' }}>
      <NavMenu />
      <Canvas style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars />
        <mesh ref={sphereRef}>
          <sphereGeometry args={[1, 100, 200]} />
          <meshPhysicalMaterial color="orange" metalness={0.6} roughness={0.1} />
        </mesh>
      </Canvas>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
