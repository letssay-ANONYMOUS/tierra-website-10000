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
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all ${isScrolled ? 'pt-4 px-4' : 'pt-0 px-0'}`}>
      <div className={`mx-auto flex items-center justify-between ${isScrolled ? 'max-w-[1000px] h-16 frosted-pill px-8' : 'max-w-[1400px] h-20 md:h-24 px-6 md:px-12'}`}>
        <button className="flex items-center gap-3" onClick={() => navigate('home')}>
          <span className={`w-8 h-8 rounded-full flex items-center justify-center ${isScrolled ? 'bg-[#3A4D39]' : 'bg-white'}`}>
            <Leaf className={`w-4 h-4 ${isScrolled ? 'text-white' : 'text-[#3A4D39]'}`} />
          </span>
          <span className={`font-serif text-xl ${isScrolled ? 'text-[#1C1C1C]' : 'text-white mix-blend-difference'}`}>Tierra</span>
        </button>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button key={link.label} className={`text-xs uppercase tracking-[0.2em] ${isScrolled ? 'text-[#1C1C1C]' : 'text-white mix-blend-difference'}`} onClick={() => navigate(link.page)}>
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button onClick={() => setIsCartOpen(true)} className={isScrolled ? 'text-[#1C1C1C]' : 'text-white mix-blend-difference'}>
            <ShoppingBag />
            {cart.length > 0 && <span className="inline-block w-2 h-2 rounded-full bg-[#C5A065] ml-1" />}
          </button>
          <button className={`lg:hidden ${isScrolled ? 'text-[#1C1C1C]' : 'text-white mix-blend-difference'}`} onClick={() => setIsMobileMenuOpen((p) => !p)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden absolute left-4 right-4 mt-4 bg-white/95 rounded-2xl overflow-hidden transition-all ${isMobileMenuOpen ? 'max-h-96 py-6' : 'max-h-0 py-0'}`}>
        <div className="flex flex-col items-center gap-6">
          {NAV_LINKS.map((link) => (
            <button key={link.label} className="font-serif text-3xl" onClick={() => {
              navigate(link.page);
              setIsMobileMenuOpen(false);
            }}>{link.label}</button>
          ))}
        </div>
      </div>
    </nav>
  );
}
