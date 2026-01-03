import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from 'react';
import Navbar from "../components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://moazamkhan.com'), // Replace with your actual domain
  title: {
    default: "Moazam Khan | Full-Stack Web Developer",
    template: "%s | Moazam Khan"
  },
  description: "Full-Stack Web Developer specializing in Next.js, React, MongoDB, and modern web technologies. Building scalable web applications with expertise in payment integration, email automation, and e-commerce solutions.",
  keywords: ["Full-Stack Developer", "Next.js", "React", "MongoDB", "Web Developer", "Freelance Developer", "TypeScript", "JavaScript", "UI/UX"],
  authors: [{ name: "Moazam Khan" }],
  creator: "Moazam Khan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://moazamkhan.com", // Replace with your actual domain
    title: "Moazam Khan | Full-Stack Web Developer",
    description: "Full-Stack Web Developer specializing in Next.js, React, MongoDB, and modern web technologies. Building scalable web applications.",
    siteName: "Moazam Khan Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Add your OG image path
        width: 1200,
        height: 630,
        alt: "Moazam Khan Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Moazam Khan | Full-Stack Web Developer",
    description: "Full-Stack Web Developer specializing in Next.js, React, MongoDB, and modern web technologies.",
    images: ["/og-image.jpg"], // Add your OG image path
    creator: "@mohdmoazamkhan", // Replace with your Twitter username
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}

      </body>
    </html>
  );
};

export default Layout;
