import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import Navbar from "@/components/layout/Navbar";
import Canvas3DBackground from "@/components/3d/Canvas3DBackground";

export const metadata: Metadata = {
  title: "Chandra Hasa Reddy | Architect & Founder",
  description: "Digital Innovation Lab of Chandra Hasa Reddy. Builder of intelligent systems and beautiful digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative overflow-x-hidden">
        <SmoothScrollProvider>
          <Canvas3DBackground />
          <Navbar />
          <main className="flex-1 relative z-10 w-full max-w-7xl mx-auto px-8">
            {children}
          </main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
