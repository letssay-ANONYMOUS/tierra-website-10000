import React from 'react';

export function Section({ children, className = '', id = '' }) {
  return (
    <section id={id} className={`py-16 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto arch-grid ${className}`}>
      {children}
    </section>
  );
}
