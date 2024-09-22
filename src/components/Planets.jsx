import React, { useRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { gsap } from 'gsap';

const planetsData = [
  { name: 'Sun', texture: '', color: 'yellow', size: 3, position: [0, 0, -20], emissive: true },
  { name: 'Mercury', texture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfgE4dEyv19HhES9nQBk0XR_BBEYZhjRlCeQ&s', size: 1, position: [5, 2, -15] },
  { name: 'Venus', texture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIxzlVqpJ3w-VdX6Na8lpW0KYV-Wg5Gx06FA&s', size: 1.2, position: [8, 3, -10] },
  { name: 'Earth', texture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRtSo2Y6Vd0BSwHoAyDbcg29WHx-wuP8IkFw&s', size: 1.3, position: [11, 4, -8] },
  { name: 'Mars', texture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSOXems5hecNN2eFScMMeDSGTgZBCJ4jCNHw&s', size: 1, position: [14, 5, -6] },
  { name: 'Jupiter', texture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Zjr0cb2P-EhmGrBDEL_bNj9Enc0I_fuJuw&s', size: 2.5, position: [17, 6, -4] },
  { name: 'Saturn', texture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk6gwdZ3XVssZg967vb3iJ60C8jBC0ksM4Ag&s', size: 2, position: [20, 7, -2] },
  { name: 'Uranus', texture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz8CWvDBH8zSn_dnrXwAN1724RQNv5qdnGHw&s', size: 1.8, position: [23, 8, 0] },
  { name: 'Neptune', texture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjo1oxkETHOcpm47kb0ird5ig8vSl82bdC6g&s', size: 1.7, position: [26, 9, 2] },
  // Add any more planets here
];

function Planets() {
  return planetsData.map((planet) => (
    <Planet
      key={planet.name}
      texture={planet.texture}
      color={planet.color}
      size={planet.size}
      position={planet.position}
      emissive={planet.emissive}
    />
  ));
}

function Planet({ texture, color = 'white', size = 1, position = [0, 0, 0], emissive = false }) {
  const planetRef = useRef();
  const loadedTexture = texture ? useLoader(TextureLoader, texture) : null;

  useEffect(() => {
    if (planetRef.current) {
      gsap.to(planetRef.current.position, { x: position[0], y: position[1], z: position[2], duration: 2 });
    }
  }, [position]);

  return (
    <mesh ref={planetRef} position={position}>
      <sphereGeometry args={[size, 64, 64]} />
      {loadedTexture ? (
        <meshStandardMaterial map={loadedTexture} />
      ) : (
        <meshStandardMaterial
          color={color}
          emissive={emissive ? color : null}
          emissiveIntensity={emissive ? 1 : 0}
        />
      )}
    </mesh>
  );
}

export default Planets;
