import React from 'react';

export default function BackgroundGlow() {
  return (
    <>
      <div className="bg-grid-overlay" aria-hidden="true" />
      <div className="ambient-glow-container" aria-hidden="true">
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-2" />
        <div className="glow-orb glow-orb-3" />
      </div>
    </>
  );
}
