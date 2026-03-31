import React, { useRef } from 'react';
import { X } from 'lucide-react';

export function SwipeableCartItem({ item, updateQuantity, removeFromCart }) {
  const itemRef = useRef(null);
  const startXRef = useRef(0);
  const currentXRef = useRef(0);
  const draggingRef = useRef(false);
  const threshold = -80;

  const onTouchStart = (e) => {
    startXRef.current = e.touches[0].clientX;
    draggingRef.current = true;
    if (itemRef.current) itemRef.current.style.transition = 'none';
  };

  const onTouchMove = (e) => {
    if (!draggingRef.current) return;
    const diff = e.touches[0].clientX - startXRef.current;
    currentXRef.current = diff < 0 ? Math.max(diff, threshold) : 0;
    if (itemRef.current) {
      itemRef.current.style.transform = `translate3d(${currentXRef.current}px,0,0)`;
    }
  };

  const onTouchEnd = () => {
    draggingRef.current = false;
    const finalX = currentXRef.current < threshold * 0.6 ? threshold : 0;
    currentXRef.current = finalX;
    if (itemRef.current) {
      itemRef.current.style.transition = 'transform 0.35s ease';
      itemRef.current.style.transform = `translate3d(${finalX}px,0,0)`;
    }
  };

  return (
    <div className="relative overflow-hidden rounded-xl border border-[#1C1C1C]/10 bg-[#F2F0E9] mb-4">
      <button className="absolute inset-y-0 right-0 w-20 bg-red-600/90 text-white flex items-center justify-center" onClick={() => removeFromCart(item.id)}>
        <X size={16} />
      </button>
      <div
        ref={itemRef}
        className="relative z-10 bg-[#F2F0E9] p-4 flex gap-4"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
        <div className="flex-1">
          <div className="flex justify-between mb-2">
            <h4 className="font-serif text-lg">{item.name}</h4>
            <span>${(Number(item.price) * item.quantity).toFixed(2)}</span>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
