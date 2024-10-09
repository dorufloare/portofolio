import localFont from "next/font/local";
import { Inter } from 'next/font/google';
import "../globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Montserrat } from "next/font/google";

import enMessages from '@/public/locales/en/common.json';
import roMessages from '@/public/locales/ro/common.json';

const messages = {
  en: enMessages,
  ro: roMessages,
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], 
});

console.log("Montserrat class name:", montserrat.className);

export const metadata = {
  title: "Doru Floare",
  description: "Doru Floare's portfolio website",
};

export default function RootLayout({ children, params }) {
  const locale = params?.locale || 'en'; 
  console.log("here", params?.locale)
  const currentMessages = messages[locale] || messages['en'];

  return (
    <html lang={locale} className="dark">
      <Analytics />
      <body className={`${montserrat.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
