import localFont from "next/font/local";
import { Inter } from 'next/font/google';
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
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

// Include the Inter font
const inter = Inter({ subsets: ['latin'], variable: "--font-inter" });
import { Roboto } from 'next/font/google';
const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto', weight:'400' });
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // You can include the weights you need
});

export const metadata = {
  title: "Doru Floare",
  description: "Doru Floare's portofolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}



