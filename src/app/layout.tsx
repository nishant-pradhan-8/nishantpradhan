import type { Metadata } from "next";
import {Zain } from "next/font/google";
import Head from 'next/head'
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
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body
        className={`${zain.className}  bg-black text-white  antialiased`}
      >
       
        {children}
      </body>
    </html>
  );
}
