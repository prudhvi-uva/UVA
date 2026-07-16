import type { Metadata } from "next";
import { Montserrat, Roboto, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | UVA Tech Services",
    default: "UVA Tech Services | Dynamic Startup for Technology Solutions",
  },
  description: "UVA is a dynamic startup that delivers cutting-edge technology solutions. Our seasoned professionals are dedicated to empowering businesses.",
  keywords: ["technology solutions", "data analytics", "AI", "embedded solutions", "cybersecurity", "web development"],
  authors: [{ name: "UVA Product and IT Services Limited", url: "https://uvatechservices.com" }],
  metadataBase: new URL("https://uvatechservices.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://uvatechservices.com",
    siteName: "UVA Tech Services",
    title: "UVA Tech Services | Technology Solutions",
    description: "UVA is a dynamic startup that delivers cutting-edge technology solutions. Our seasoned professionals are dedicated to empowering businesses and driving meaningful change.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "UVA Tech Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "UVA Tech Services",
    description: "UVA is a dynamic startup that delivers cutting-edge technology solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "https://uvatechservices.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased flex flex-col min-h-screen bg-paper text-ink font-body">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
