// app/lib/fonts.ts

import { Great_Vibes, Aref_Ruqaa, Cormorant_Garamond, Cinzel, Prata } from 'next/font/google';

export const scriptFont = Great_Vibes({ weight: '400', subsets: ['latin'] });
export const logoFont = Aref_Ruqaa({ weight: ['400', '700'], subsets: ['latin'] }); 
export const headingFont = Prata({ weight: '400', subsets: ['latin'] });
export const bodyFont = Cormorant_Garamond({ weight: ['300', '400', '600'], subsets: ['latin'] });
export const accentFont = Cinzel({ weight: ['400', '700'], subsets: ['latin'] });