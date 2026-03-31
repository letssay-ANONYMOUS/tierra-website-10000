import React from 'react';
import { APP_DATA } from '../data/constants';
import { Heading } from '../components/common/Heading';
import { Section } from '../components/common/Section';

export function LocationsPage() {
  return (
    <div className="pt-24 md:pt-32 min-h-screen bg-[#F2F0E9] fade-up-enter">
      <Section>
        <div className="text-center mb-16">
          <Heading level={4}>Sanctuaries</Heading>
          <Heading level={1}>Our Locations</Heading>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {APP_DATA.locations.map((loc) => (
            <article key={loc.id}>
              <img className="w-full h-[420px] object-cover border border-[#1C1C1C]/10 mb-6" src={loc.image} alt={loc.name} />
              <h3 className="font-serif text-4xl mb-2">{loc.name}</h3>
              <p className="uppercase tracking-[0.2em] text-xs text-[#666]">{loc.address}</p>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
