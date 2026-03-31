import React from 'react';
import { APP_DATA } from '../../data/constants';

export function Footer({ navigate }) {
  return (
    <footer className="bg-[#1C1C1C] text-[#F2F0E9] pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-[#C5A065] mb-5">The Philosophy</h4>
          <p className="text-[#F2F0E9]/70">A sanctuary for the senses. Sourced ethically. Poured deliberately.</p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-[#C5A065] mb-5">Sitemap</h4>
          <div className="space-y-3">
            <button onClick={() => navigate('menu')}>Menu</button>
            <button onClick={() => navigate('locations')}>Locations</button>
            <button onClick={() => navigate('catering')}>Private Events</button>
          </div>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-[#C5A065] mb-5">Visit Us</h4>
          <p>{APP_DATA.brand.address}</p>
          <p>Mon-Fri: {APP_DATA.hours.mon_fri}</p>
          <p>Sat-Sun: {APP_DATA.hours.sat_sun}</p>
          <p className="mt-3">{APP_DATA.brand.email}</p>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-10 text-xs text-[#F2F0E9]/40">
        &copy; {new Date().getFullYear()} Tierra Hospitality.
      </div>
    </footer>
  );
}
