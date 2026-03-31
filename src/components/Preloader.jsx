import React, { useEffect } from 'react';

export function Preloader({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[999] bg-[#F2F0E9] flex items-center justify-center animate-fade-out">
      <h1 className="font-serif text-6xl text-[#1C1C1C] tracking-tight">Tierra</h1>
    </div>
  );
}
