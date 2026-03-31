import React, { useContext } from 'react';
import { ChevronRight } from 'lucide-react';
import { Heading } from '../components/common/Heading';
import { MENU_SECTIONS } from '../data/constants';
import { CartContext } from '../context/CartContext';

export function MenuPage() {
  const { setActiveItem } = useContext(CartContext);

  return (
    <div className="bg-[#F2F0E9] min-h-screen pt-24 md:pt-32 pb-20 fade-up-enter">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16 text-center border-b border-[#1C1C1C]/10 pb-8">
        <Heading level={4}>Season 04</Heading>
        <Heading level={1}>The Menu</Heading>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-20">
        {MENU_SECTIONS.map((section) => (
          <section key={section.id} className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="h-[400px] md:h-[520px] overflow-hidden sticky top-24 border border-[#1C1C1C]/10">
              <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="font-serif text-5xl mb-3">{section.title}</h2>
              <p className="text-[#666] mb-8">{section.description}</p>
              <div className="space-y-8">
                {section.items.map((item) => (
                  <article key={item.id} className="border-b border-[#1C1C1C]/10 pb-6 cursor-pointer" onClick={() => setActiveItem({ ...item, image: section.image })}>
                    <div className="flex items-end justify-between gap-3 mb-2">
                      <h3 className="font-serif text-2xl">{item.name}</h3>
                      <span className="font-serif">${item.price.toFixed(2)}</span>
                    </div>
                    <p className="text-[#666] mb-3">{item.desc}</p>
                    <span className="text-xs uppercase tracking-[0.2em] flex items-center gap-1">Explore Details <ChevronRight size={12} /></span>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
