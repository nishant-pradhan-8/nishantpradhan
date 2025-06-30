import type { Metadata, Viewport } from "next";
import { Zain } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const zain = Zain({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nishant Pradhan | Portfolio",
  description:
    "Portfolio of Nishant Pradhan, a full-stack web developer specializing in building modern, responsive, and high-performance web applications using technologies like React, Next.js, Node.js, and Laravel. View featured projects, experience, and get in touch for freelance or full-time opportunities.",
  keywords: [
    "Nishant Pradhan",
    "FrontEnd Developer",
    "BackEnd Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Laravel Developer",
    "Portfolio Website",
    "Web Developer in Nepal",
    "Web Developer in Pokhara",
    "Website Developer Pokhara",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  authors: [{ name: "Nishant Pradhan" }],
  creator: "Nishant Pradhan",
  publisher: "Nishant Pradhan",
  metadataBase: new URL("https://nishantpradhan.com.np"),
  alternates: {
    canonical: "https://nishantpradhan.com.np",
  },
  openGraph: {
    title: "Nishant Pradhan | Portfolio Website",
    description:
      "Portfolio website of Nishant Pradhan. Features skills, experience, and projects in full-stack development using React, Next.js, and more.",
    url: "https://nishantpradhan.com.np",
    siteName: "Nishant Pradhan | Portfolio",

    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-screen" lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body
        className={`${zain.className}  bg-[#1B1833] text-white  antialiased`}
      >
        {children}
        <footer>
          <p className="text-center text-gray-300 my-[50px] text-xl">
            Developed and Designed by{" "}
            <span className="font-semibold">Nishant Pradhan.</span>
          </p>
        </footer>
      </body>
    </html>
  );
}
