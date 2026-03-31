import React from 'react';
import { ArrowDown, Leaf, MoveRight } from 'lucide-react';
import { MenuCard } from '../components/menu/MenuCard';
import { Button } from '../components/common/Button';
import { Heading } from '../components/common/Heading';
import { Section } from '../components/common/Section';

export function HomePage({ navigate, menuItems }) {
  return (
    <div className="bg-[#F2F0E9] fade-up-enter">
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000"
          alt="Tierra Interior"
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-[#F2F0E9] px-6">
          <span className="uppercase tracking-[0.5em] text-xs">Tierra</span>
          <h1 className="font-serif text-[15vw] leading-none tracking-tighter">Sanctuary</h1>
        </div>
        <button className="absolute bottom-10 z-10 text-[#F2F0E9] flex items-center gap-2" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          <span className="text-xs uppercase tracking-[0.2em]">Discover</span>
          <ArrowDown size={14} />
        </button>
      </section>

      <Section className="bg-white border-b border-[#1C1C1C]/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <img className="w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=800" alt="Reserve" />
          <div>
            <div className="flex items-center gap-3 mb-4 text-[#C5A065] text-xs uppercase tracking-[0.3em]">
              <Leaf size={14} /> Live Allocation: 3 Pours Remaining
            </div>
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.9] mb-6">The Tierra Reserve.</h2>
            <p className="text-[#666] text-lg leading-relaxed mb-8">A curated exhibition of our most sought-after harvests. Only 12 pours available daily.</p>
            <Button onClick={() => navigate('menu')}>Inquire Availability</Button>
          </div>
        </div>
      </Section>

      <section className="py-20 border-b border-[#1C1C1C]/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-10 flex items-end justify-between">
          <div>
            <Heading level={4}>The Elements</Heading>
            <Heading level={2}>Crafted by Nature</Heading>
          </div>
          <div className="md:hidden flex items-center gap-2 text-[#C5A065]">
            <span className="text-xs uppercase tracking-[0.2em]">Swipe to explore</span>
            <MoveRight size={14} />
          </div>
        </div>
      </section>

      <Section className="!py-24 md:!py-32">
        <div className="flex justify-between items-end mb-10">
          <div>
            <Heading level={4}>Curated For You</Heading>
            <Heading level={2}>Signature Selections</Heading>
          </div>
          <Button className="hidden md:inline-flex" onClick={() => navigate('menu')}>View Full Menu</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.slice(0, 3).map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </Section>
    </div>
  );
}
