import React, { useContext } from 'react';
import { X } from 'lucide-react';
import { CartContext } from '../../context/CartContext';
import { SwipeableCartItem } from '../cart/SwipeableCartItem';
import { Button } from '../common/Button';

export function CartDrawer({ navigate }) {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, subtotal } = useContext(CartContext);

  return (
    <div className={`fixed inset-0 z-[60] flex justify-end ${isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <div className={`absolute inset-0 bg-[#1C1C1C]/40 transition-opacity duration-500 ${isCartOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsCartOpen(false)} />
      <aside className={`relative w-full max-w-md bg-[#F2F0E9] h-full flex flex-col transition-transform duration-500 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <header className="p-8 flex items-center justify-between border-b border-[#E5E0D8]">
          <h2 className="font-serif text-3xl">The Reserve</h2>
          <button onClick={() => setIsCartOpen(false)}><X /></button>
        </header>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="h-full flex items-center justify-center text-center">
              <div>
                <p className="font-serif text-xl italic mb-4">Awaiting your selection.</p>
                <Button onClick={() => {
                  setIsCartOpen(false);
                  navigate('menu');
                }}>Explore Menu</Button>
              </div>
            </div>
          ) : (
            cart.map((item) => (
              <SwipeableCartItem key={item.id} item={item} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
            ))
          )}
        </div>

        {cart.length > 0 && (
          <footer className="p-8 border-t border-[#E5E0D8] bg-white">
            <div className="flex justify-between mb-5">
              <span className="text-xs uppercase tracking-[0.2em] text-[#666]">Subtotal</span>
              <span className="font-serif text-2xl">${subtotal.toFixed(2)}</span>
            </div>
            <Button className="w-full" onClick={() => {
              setIsCartOpen(false);
              navigate('checkout');
            }}>Complete Reservation</Button>
          </footer>
        )}
      </aside>
    </div>
  );
}
