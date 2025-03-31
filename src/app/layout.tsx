import type { Metadata } from "next";
import { Geist, Geist_Mono,Zain } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const zain = Zain({
  weight: "400",
  subsets: ["latin"],
});



const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nishant Pradhan - Portfolio Site",
  description: "Portfolio Website of Nishant Pradhan, a fullstack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${zain.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
