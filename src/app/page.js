'use client';
import { useState, useEffect } from 'react';
import Countdown from './components/Countdown';
import CommunityInfo from './components/CommunityInfo';

export default function HomePage() {
  const [bgColor, setBgColor] = useState('#f0f0f1'); // Default to server value

  useEffect(() => {
    setBgColor('#f0f0f0'); // Change to client value after mount
  }, []);

  return (
    <main style={{ backgroundColor: bgColor, padding: '20px', borderRadius: '10px' }}>
      <CommunityInfo />
      <Countdown />
    </main>
  );
}