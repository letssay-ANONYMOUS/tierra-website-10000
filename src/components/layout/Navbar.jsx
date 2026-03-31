import React, { useContext, useEffect, useState } from 'react';
import { Leaf, Menu, ShoppingBag, X } from 'lucide-react';
import { CartContext } from '../../context/CartContext';

const NAV_LINKS = [
  { label: 'Menu', page: 'menu' },
  { label: 'Locations', page: 'locations' },
  { label: 'Catering', page: 'catering' },
  { label: 'Journal', page: 'about' }
];

export function Navbar({ navigate }) {
  const { cart, setIsCartOpen } = useContext(CartContext);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const nextProgress = Math.max(0, Math.min(window.scrollY / 140, 1));
        setScrollProgress((prev) =>
          Math.abs(prev - nextProgress) > 0.001 ? nextProgress : prev
        );
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const shellHeight = 76 - scrollProgress * 12;
  const shellOffset = 12 + scrollProgress * 10;
  const shellInset = 24 + scrollProgress * 72;
  const shellPaddingX = 24 + scrollProgress * 8;
  const shellStyle = {
    height: `${shellHeight}px`,
    width: `min(1400px, calc(100% - ${shellInset}px))`,
    paddingLeft: `${shellPaddingX}px`,
    paddingRight: `${shellPaddingX}px`,
    transform: `translate3d(0, ${shellOffset}px, 0)`,
    backdropFilter: `blur(${18 + scrollProgress * 10}px) saturate(${165 + scrollProgress * 25}%)`,
    WebkitBackdropFilter: `blur(${18 + scrollProgress * 10}px) saturate(${165 + scrollProgress * 25}%)`,
    boxShadow: `0 ${10 + scrollProgress * 10}px ${34 + scrollProgress * 10}px rgba(28, 28, 28, ${0.08 + scrollProgress * 0.04}), inset 0 1px 0 rgba(255, 255, 255, ${0.72 + scrollProgress * 0.08}), inset 0 -1px 0 rgba(255, 255, 255, ${0.16 + scrollProgress * 0.04})`,
    willChange: 'width, height, transform, padding, box-shadow, backdrop-filter'
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[60]">
      <div className="mx-auto w-full px-4 md:px-6">
        <div
          className="frosted-pill mx-auto relative flex transform-gpu items-center justify-between"
          style={shellStyle}
        >
          <button className="relative z-10 flex shrink-0 items-center gap-3" onClick={() => navigate('home')}>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3A4D39]">
              <Leaf className="h-4 w-4 text-white" />
            </span>
            <span className="font-serif text-xl text-[#1C1C1C]">Tierra</span>
          </button>

          <div className="pointer-events-none absolute inset-0 hidden lg:flex items-center justify-center">
            <div className="pointer-events-auto flex items-center gap-8 xl:gap-10">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  className="text-xs uppercase tracking-[0.2em] text-[#1C1C1C]"
                  onClick={() => navigate(link.page)}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="relative z-10 ml-auto flex shrink-0 items-center gap-3">
            <button onClick={() => setIsCartOpen(true)} className="text-[#1C1C1C]">
              <ShoppingBag />
              {cart.length > 0 && <span className="ml-1 inline-block h-2 w-2 rounded-full bg-[#C5A065]" />}
            </button>
            <button className="text-[#1C1C1C] lg:hidden" onClick={() => setIsMobileMenuOpen((p) => !p)}>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full px-4 md:px-6">
        <div
          className={`mx-auto overflow-hidden rounded-2xl bg-white/95 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${isMobileMenuOpen ? 'mt-4 max-h-96 py-6' : 'mt-0 max-h-0 py-0'}`}
          style={{ width: `min(1400px, calc(100% - ${shellInset}px))`, transform: `translate3d(0, ${shellOffset}px, 0)` }}
        >
          <div className="flex flex-col items-center gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                className="font-serif text-3xl"
                onClick={() => {
                  navigate(link.page);
                  setIsMobileMenuOpen(false);
                }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
