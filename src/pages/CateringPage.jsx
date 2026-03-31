import React from 'react';
import { Coffee, Star, Utensils } from 'lucide-react';
import { Button } from '../components/common/Button';

export function CateringPage({ navigate }) {
  return (
    <div className="bg-[#F2F0E9] fade-up-enter">
      <section className="relative h-[70vh] min-h-[540px] overflow-hidden">
        <img className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=2000" alt="Catering" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6 text-[#F2F0E9]">
          <div>
            <span className="uppercase tracking-[0.4em] text-xs">Private Dining & Events</span>
            <h1 className="font-serif text-6xl md:text-8xl mt-4 leading-[0.85]">Elevate Every Occasion</h1>
          </div>
        </div>
      </section>

      <section className="bg-[#1C1C1C] text-[#F2F0E9] py-24">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-px bg-[#F2F0E9]/10">
          {[
            { icon: Coffee, title: 'Coffee Service', price: '$45 / box' },
            { icon: Utensils, title: 'Morning Spread', price: '$18 / person' },
            { icon: Star, title: 'Private Hosting', price: 'Custom' }
          ].map((item) => (
            <article key={item.title} className="aspect-square bg-[#1C1C1C] flex items-center justify-center text-center p-8">
              <div>
                <item.icon className="w-10 h-10 mx-auto mb-6 text-[#C5A065]" />
                <h3 className="font-serif text-3xl mb-3">{item.title}</h3>
                <p className="uppercase tracking-[0.2em] text-xs opacity-60">{item.price}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button variant="white" onClick={() => navigate('contact')}>Request Consultation</Button>
        </div>
      </section>
    </div>
  );
}
