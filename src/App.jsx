import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import NavMenu from './components/NavMenu';
import Portfolio from './components/Portfolio';
import Planets from './components/Planets'; // Import Planets component.

function App() {
  return (
    <div style={{ height: '100vh', background: '#000', position: 'relative' }}>
      <NavMenu />
      <Canvas style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <OrbitControls />
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} />
        <Stars />
        <Planets /> {/* Add Planets here */}
      </Canvas>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
