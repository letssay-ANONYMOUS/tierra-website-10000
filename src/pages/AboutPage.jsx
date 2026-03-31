import React from 'react';
import { Section } from '../components/common/Section';

export function AboutPage() {
  return (
    <div className="fade-up-enter bg-[#F2F0E9]">
      <section className="relative h-[70vh] min-h-[540px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=2000"
          alt="Coffee extraction"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-[#F2F0E9]">
          <div>
            <span className="uppercase tracking-[0.4em] text-xs">Our Journal</span>
            <h1 className="font-serif text-6xl md:text-8xl leading-[0.85] mt-4">Crafted Perspectives</h1>
          </div>
        </div>
      </section>

      <Section className="!pt-24 md:!pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-6xl md:text-8xl leading-[0.85] mb-6">The Art of Slow.</h2>
            <p className="text-lg text-[#1C1C1C]/70 leading-relaxed">
              Tierra was born from a desire to reconnect with the earth in the middle of the city. Every bean, every pastry, and every gesture is made to slow time down.
            </p>
          </div>
          <img className="w-full h-[560px] object-cover border border-[#1C1C1C]/10" src="https://images.unsplash.com/photo-1507133750069-bef72f3707a9?auto=format&fit=crop&q=80&w=1200" alt="Barista" />
        </div>
      </Section>
    </div>
  );
}
