import type { Metadata } from "next";
import { Noto_Sans_Thai, Noto_Sans_Thai_Looped } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const notoSansThaiLooped = Noto_Sans_Thai_Looped({
  variable: "--font-noto-sans-thai-looped",
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dooform – จัดการเอกสารได้เร็วขึ้น ง่ายขึ้น",
  description: "จัดการเอกสารได้เร็วขึ้น ง่ายขึ้นด้วย Dooform by Knight Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSansThai.variable} ${notoSansThaiLooped.variable} antialiased`}
      >        
        <Navbar />
        <div className="p-6 max-w-7xl mx-auto font-sans">
          {children}
        </div>        
        <Footer />       
      </body>
    </html>
  );
}
