import React, { useContext } from 'react';
import { X } from 'lucide-react';
import { CartContext } from '../../context/CartContext';
import { Button } from '../common/Button';

export function ItemModal() {
  const { activeItem, setActiveItem, addToCart } = useContext(CartContext);

  if (!activeItem) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center">
      <div className="absolute inset-0 bg-black/50 transition-opacity duration-500" onClick={() => setActiveItem(null)} />

      <div className="relative bg-[#F2F0E9] w-full md:max-w-xl rounded-t-3xl md:rounded-2xl overflow-hidden transition-transform duration-500 translate-y-0">
        <div className="h-72 relative">
          <img src={activeItem.image} alt={activeItem.name} className="w-full h-full object-cover" />
          <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center" onClick={() => setActiveItem(null)}>
            <X size={16} />
          </button>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between mb-3 gap-4">
            <h3 className="font-serif text-3xl">{activeItem.name}</h3>
            <span className="font-serif text-2xl">${Number(activeItem.price).toFixed(2)}</span>
          </div>
          <p className="text-[#666] mb-6">{activeItem.description || activeItem.desc}</p>
          <Button className="w-full" onClick={() => {
            addToCart(activeItem);
            setActiveItem(null);
          }}>
            Add to Order
          </Button>
        </div>
      </div>
    </div>
  );
}
