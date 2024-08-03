import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function NavMenu() {
  const menuRef = useRef();

  useEffect(() => {
    gsap.from(menuRef.current, { y: -100, opacity: 0, duration: 1 });
  }, []);

  return (
    <nav ref={menuRef} style={{ position: 'fixed', top: 0, width: '100%', background: '#333', color: '#fff', padding: '1rem', zIndex: 10, boxShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
      <ul style={{ display: 'flex', justifyContent: 'space-around', margin: 0, padding: 0, listStyle: 'none' }}>
        <li style={{ cursor: 'pointer' }}>Home</li>
        <li style={{ cursor: 'pointer' }}>About</li>
        <li style={{ cursor: 'pointer' }}>Portfolio</li>
        <li style={{ cursor: 'pointer' }}>Contact</li>
      </ul>
    </nav>
  );
}

export default NavMenu;
