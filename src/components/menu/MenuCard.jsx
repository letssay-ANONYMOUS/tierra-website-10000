import React, { useContext } from 'react';
import { ChevronRight } from 'lucide-react';
import { CartContext } from '../../context/CartContext';

export function MenuCard({ item }) {
  const { setActiveItem } = useContext(CartContext);

  return (
    <article
      onClick={() => setActiveItem(item)}
      className="group bg-white border border-[#E5E0D8] cursor-pointer overflow-hidden"
    >
      <div className="h-64 overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>
      <div className="p-6 space-y-3">
        <h3 className="font-serif text-2xl">{item.name}</h3>
        <p className="text-sm text-[#666] leading-relaxed">{item.description || item.desc}</p>
        <div className="flex justify-between items-center pt-4 border-t border-[#F2F0E9]">
          <span className="font-serif text-xl">${Number(item.price).toFixed(2)}</span>
          <span className="text-xs uppercase tracking-[0.2em] flex items-center gap-1">
            Discover <ChevronRight size={12} />
          </span>
        </div>
      </div>
    </article>
  );
}
