import React from 'react';

export function Heading({ level = 2, className = '', children }) {
  const Tag = `h${level}`;
  const styles = {
    1: 'font-serif text-5xl md:text-7xl leading-[0.9] tracking-tight',
    2: 'font-serif text-3xl md:text-5xl leading-tight',
    3: 'font-serif text-2xl md:text-3xl',
    4: 'font-sans font-bold text-xs uppercase tracking-[0.25em] text-[#3A4D39]'
  };
  return <Tag className={`${styles[level]} ${className}`}>{children}</Tag>;
}
