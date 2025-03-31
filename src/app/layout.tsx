import type { Metadata } from "next";
import {Zain } from "next/font/google";

import "./globals.css";

const zain = Zain({
  weight: "400",
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
