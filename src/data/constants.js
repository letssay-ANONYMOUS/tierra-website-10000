export const SEED_MENU = [
  {
    id: 'csv-1',
    price: 48,
    name: 'Truffle Omelette Toast',
    description:
      'Sourdough toast topped with mixed cheese, omelette cooked with truffle mushroom. Garnished with parmesan, pomegranate seeds, and micro greens.',
    image:
      'https://images.unsplash.com/photo-1525351484163-7529414395d8?auto=format&fit=crop&q=80&w=800',
    category: 'Breakfast',
    tags: ['Truffle', 'Vegetarian']
  },
  {
    id: 'csv-2',
    price: 42,
    name: 'Gourmet Breakfast Sandwich',
    description:
      'Pancake taco pie, lamb sausage, bacon, scrambled eggs, maple sriracha sauce, and mozzarella on crunchy cube toast.',
    image:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800',
    category: 'Breakfast',
    tags: ['Hearty', 'Meat']
  },
  {
    id: 'csv-3',
    price: 48,
    name: 'Signature Tierra Shakshuka',
    description:
      'Tunisian spiced tomato sauce, poached eggs, feta cheese, olive oil, peppers, and garlic. Served with toasted sourdough.',
    image:
      'https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&q=80&w=800',
    category: 'Breakfast',
    tags: ['Spicy', 'Signature']
  }
];

export const APP_DATA = {
  brand: {
    name: 'Tierra',
    address: '882 Olive Grove Ave, Design District',
    email: 'concierge@tierra.com'
  },
  hours: {
    mon_fri: '7:00 AM - 8:00 PM',
    sat_sun: '8:00 AM - 9:00 PM'
  },
  locations: [
    {
      id: 1,
      name: 'The Greenhouse',
      address: '882 Olive Grove Ave',
      area: 'Design District',
      image:
        'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800',
      features: ['Outdoor Seating', 'Study Quiet Zone']
    },
    {
      id: 2,
      name: 'Tierra Lounge',
      address: '400 Timber Lane',
      area: 'Uptown',
      image:
        'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80&w=800',
      features: ['Meeting Pods', 'Late Night']
    }
  ]
};

export const MENU_SECTIONS = [
  {
    id: 'classics',
    title: 'The Classics',
    image:
      'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1000',
    description: 'Time-honored roasts and traditional brewing methods.',
    items: [
      { id: 'm1', name: 'Espresso Single / Double', price: 4.0, desc: 'Rich, full-bodied espresso with a thick crema.' },
      { id: 'm2', name: 'Americano', price: 4.5, desc: 'Espresso cut with hot water for a smooth finish.' },
      { id: 'm3', name: 'Cappuccino', price: 4.5, desc: 'Equal parts espresso and hot water with thick foam.' }
    ]
  },
  {
    id: 'signature',
    title: 'Signature Brews',
    image:
      'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=1000',
    description: 'Unique creations inspired by our olive and heritage roots.',
    items: [
      { id: 'm17', name: 'Tierra Signature Latte', price: 7.5, desc: 'Double espresso, oat milk, infused with olive leaf extract.' },
      { id: 'm18', name: 'Wood-Roasted Pour Over', price: 8.0, desc: 'Single-origin Ethiopian beans roasted over olive wood chips.' },
      { id: 'm19', name: 'Matcha Ceremonial Grade', price: 8.5, desc: 'Whisked to order. Sourced directly from Uji, Japan.' }
    ]
  }
];
