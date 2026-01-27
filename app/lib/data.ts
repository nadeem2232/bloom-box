// app/lib/data.ts

// --- 1. DEFINING THE CONTRACT (TYPE SAFETY) ---
export type Category = 'vessel' | 'flower' | 'sweet' | 'plush' | 'luxury';

export interface Product {
  id: string;
  type: Category;
  name: string;
  price: number;
  image: string;
  description: string;
  keywords?: string[];
}

// --- 2. CONTACT INFO ---
export const MY_PHONE_NUMBER = "886912345678"; 
export const MY_EMAIL = "hello@loveinabox.com";
export const MY_ADDRESS = "123 Luxury Lane, Xinyi District, Taipei City";

// --- 3. HERO SLIDES ---
export const heroSlides = [
  { image: "/banner1.jpg", title: "The Art of Meaningful Gifting", subtitle: "Curate a bespoke gift box filled with hand-selected treasures." },
  { image: "/banner2.jpg", title: "Nature’s Darkest Velvet", subtitle: "Beauty that blooms in the shadows of elegance." },
  { image: "/banner3.jpg", title: "A Symphony of Gold", subtitle: "Fragrances that linger like a sweet, golden memory." },
  { image: "/banner4.jpg", title: "Timeless Sophistication", subtitle: "Captured in crystal, stone, and light." },
  { image: "/banner5.jpg", title: "Opulence in Bloom", subtitle: "Royal aesthetics designed for the extraordinary." }
];

// --- 4. PRODUCTS (Strictly Typed) ---
export const allProducts: Product[] = [
  { id: 'b1', type: 'vessel', name: 'The Signature Hatbox', price: 50, image: '/box.jpg', description: 'A velvet embrace for your most treasured memories.', keywords: ['box'] },
  { id: 'b2', type: 'vessel', name: 'The Minimalist Crate', price: 35, image: '/crate.jpg', description: 'Raw elegance, grounded in nature’s simple beauty.', keywords: ['crate'] },
  { id: 'f1', type: 'flower', name: 'Red Roses', price: 120, image: '/roses.jpg', description: 'Passion whispered in layers of deep crimson velvet.', keywords: ['rose'] },
  { id: 'f2', type: 'flower', name: 'Pink Tulips', price: 95, image: '/tulips.jpg', description: 'Soft whispers of spring’s first blush.', keywords: ['tulip'] },
  { id: 'f3', type: 'flower', name: 'White Lilies', price: 110, image: '/lilies.jpg', description: 'Pure elegance that commands the room with grace.', keywords: ['lily'] },
  { id: 'f4', type: 'flower', name: '24k Gold Rose', price: 85, image: '/goldrose.jpg', description: 'A real rose dipped in 24k gold. Eternal luxury.', keywords: ['gold'] },
  { id: 'f5', type: 'flower', name: 'Rare Orchid Pot', price: 90, image: '/orchid.jpg', description: 'Exotic beauty that blooms with resilience.', keywords: ['orchid'] },
  { id: 's1', type: 'sweet', name: 'Bento Cake', price: 65, image: '/cake.jpg', description: 'A sweet secret shared between two hearts.', keywords: ['cake'] },
  { id: 's2', type: 'sweet', name: 'Artisan Truffles', price: 35, image: '/chocolate.jpg', description: 'Decadence melting in a moment of pure bliss.', keywords: ['truffle'] },
  { id: 's3', type: 'sweet', name: 'Dark Choco Bar', price: 15, image: '/darkchoc.jpg', description: 'Bittersweet symphony of rich, intense cocoa.', keywords: ['bar'] },
  { id: 's4', type: 'sweet', name: 'Macarons (6pc)', price: 40, image: '/macarons.jpg', description: 'Parisian air spun into delicate sugar and almond.', keywords: ['macaron'] },
  { id: 's5', type: 'sweet', name: 'Gourmet Honey', price: 25, image: '/honey.jpg', description: 'Liquid gold harvested from wild meadows.', keywords: ['honey'] },
  { id: 'k1', type: 'plush', name: 'Classic Teddy', price: 25, image: '/bear.jpg', description: 'A timeless hug that lasts forever.', keywords: ['teddy'] },
  { id: 'k2', type: 'plush', name: 'Soft Bunny', price: 28, image: '/bunny.jpg', description: 'Softness that invites a gentle touch.', keywords: ['bunny'] },
  { id: 'p3', type: 'plush', name: 'Velvet Heart Pillow', price: 45, image: '/pillow.jpg', description: 'A plush symbol of comfort and affection.', keywords: ['pillow'] },
  { id: 'l1', type: 'luxury', name: 'Scented Candle', price: 45, image: '/candle.jpg', description: 'Light the evening with a scent of warm luxury.', keywords: ['candle'] },
  { id: 'l2', type: 'luxury', name: 'Pearl Earrings', price: 95, image: '/earrings.jpg', description: 'A shimmer of sophistication for her.', keywords: ['earring'] },
  { id: 'l4', type: 'luxury', name: 'Designer Perfume', price: 130, image: '/perfume.jpg', description: 'An iconic scent that lingers like a memory.', keywords: ['perfume'] },
  { id: 'l5', type: 'luxury', name: 'Silk Scarf', price: 150, image: '/scarf.jpg', description: 'Woven elegance to wrap her in luxury.', keywords: ['scarf'] },
  { id: 'l6', type: 'luxury', name: 'Crystal Flutes', price: 60, image: '/flutes.jpg', description: 'Toast to the future in crystalline perfection.', keywords: ['flutes'] },
];

// --- 5. REVIEWS ---
export const reviews = [
    { name: "Sarah L.", text: "The unboxing experience was magical. My mom cried tears of joy!", rating: 5 },
    { name: "David C.", text: "Incredible quality roses. They lasted for two weeks.", rating: 5 },
    { name: "Emily W.", text: "Dalila made the perfect custom box. Truly global service.", rating: 5 },
];