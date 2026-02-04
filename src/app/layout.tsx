import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sakura Sushi | Premium Japanese Dining in San Francisco",
  description:
    "Experience authentic Japanese cuisine at Sakura Sushi. Premium sashimi, handcrafted rolls, and omakase dining in the heart of San Francisco.",
  keywords: [
    "sushi",
    "Japanese restaurant",
    "San Francisco",
    "omakase",
    "sashimi",
    "fine dining",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-dark text-cream`}
      >
        {children}
      </body>
    </html>
  );
}
