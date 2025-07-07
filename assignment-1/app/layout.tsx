import type { Metadata } from "next";
import { Geist, Geist_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const pixel = Press_Start_2P({ variable: "--font-pixel", weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "8-Bit Inspiration Station",
  description: "quote generator built with Next.js, Tailwind & ShadCN UI",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pixel.variable} antialiased bg-[--bg] text-[--text] relative`}
      >
        {}
        <div className="fixed inset-0 opacity-[0.05] bg-[url('/grid.svg')] pointer-events-none z-0" />

        {}
        <Toaster />

        {}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
