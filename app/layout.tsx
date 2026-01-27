import type { Metadata } from "next";
// We import your luxury fonts here to make them available everywhere
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// --- PROFESSIONAL METADATA ---
export const metadata: Metadata = {
  title: "Love in a Box | Luxury Gifting Atelier",
  description: "Curated luxury gift boxes, bespoke floral arrangements, and artisan sweets. Elevating the art of gifting.",
  icons: {
    icon: '/favicon.ico', // Ensure you have a favicon in your public folder!
  },
  openGraph: {
    title: "Love in a Box | Luxury Gifting Atelier",
    description: "Curated luxury gift boxes, bespoke floral arrangements, and artisan sweets.",
    siteName: "Love in a Box",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}