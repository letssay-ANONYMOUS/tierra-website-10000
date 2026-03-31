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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="pointer-events-none fixed top-0 left-0 right-0 z-[60] pt-4 md:pt-6"
    >
      <div className="mx-auto w-full px-4 md:px-6">
        <div
          className={`frosted-pill pointer-events-auto mx-auto relative flex h-16 max-w-[1000px] transform-gpu items-center justify-between px-8 transition-[opacity,transform,box-shadow] duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
          style={{
            willChange: 'opacity, transform, box-shadow',
            transform: isScrolled
              ? 'translate3d(0, 0, 0) scale(1)'
              : 'translate3d(0, -18px, 0) scale(0.985)'
          }}
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
          className={`pointer-events-auto mx-auto max-w-[1000px] overflow-hidden rounded-2xl bg-white/95 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${isScrolled && isMobileMenuOpen ? 'mt-4 max-h-96 py-6 opacity-100' : 'mt-0 max-h-0 py-0 opacity-0'}`}
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
