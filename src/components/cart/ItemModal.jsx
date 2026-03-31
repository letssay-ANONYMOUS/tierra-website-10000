import React, { useContext, useState } from 'react';
import { X } from 'lucide-react';
import { CartContext } from '../../context/CartContext';
import { Button } from '../common/Button';

export function ItemModal() {
  const { activeItem, setActiveItem, addToCart } = useContext(CartContext);
  const [isClosing, setIsClosing] = useState(false);

  if (!activeItem) return null;

  const closeModal = () => {
    if (isClosing) return;
    setIsClosing(true);
    window.setTimeout(() => {
      setActiveItem(null);
      setIsClosing(false);
    }, 320);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center">
      <div
        className={`absolute inset-0 bg-black/50 ${isClosing ? 'modal-backdrop-out' : 'modal-backdrop-in'}`}
        onClick={closeModal}
      />

      <div
        className={`relative w-full overflow-hidden rounded-t-3xl bg-[#F2F0E9] md:max-w-xl md:rounded-2xl ${isClosing ? 'modal-sheet-out' : 'modal-sheet-in'}`}
      >
        <div className="h-72 relative">
          <img src={activeItem.image} alt={activeItem.name} className="w-full h-full object-cover" />
          <button className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/90" onClick={closeModal}>
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
            closeModal();
          }}>
            Add to Order
          </Button>
        </div>
      </div>
    </div>
  );
}
