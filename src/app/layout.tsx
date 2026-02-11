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

const SITE_URL = "https://sushi-restaurant-ochre.vercel.app";
const SITE_TITLE = "Sakura Sushi | Premium Japanese Dining SF";
const SITE_DESCRIPTION =
  "Experience authentic Japanese cuisine at Sakura Sushi. Premium sashimi, handcrafted rolls, and omakase dining in San Francisco.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "sushi",
    "Japanese restaurant",
    "San Francisco",
    "omakase",
    "sashimi",
    "fine dining",
  ],
  openGraph: {
    type: "website",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  alternates: {
    canonical: SITE_URL,
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Sakura Sushi",
              description:
                "Experience authentic Japanese cuisine at Sakura Sushi. Premium sashimi, handcrafted rolls, and omakase dining in the heart of San Francisco.",
              url: "https://sushi-restaurant-ochre.vercel.app",
              servesCuisine: "Japanese, Sushi",
              telephone: "+1-415-555-0123",
              email: "hello@sakurasushi.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1742 Post Street",
                addressLocality: "San Francisco",
                addressRegion: "CA",
                postalCode: "94115",
                addressCountry: "US",
              },
              priceRange: "$$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
                  opens: "17:00",
                  closes: "22:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Friday", "Saturday"],
                  opens: "11:30",
                  closes: "23:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "11:30",
                  closes: "21:30",
                },
              ],
              image: `${SITE_URL}/og-image.png`,
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
