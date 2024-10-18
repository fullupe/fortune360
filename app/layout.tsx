import './globals.css';
import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// import {Roboto} from "next/font/google"

import localFont from "next/font/local"

const myFont = localFont({
  // src:'./static-fonts/CrimsonText-Bold.ttf',
  src:'./static-fonts/CrimsonText-Regular.ttf',
  display:"swap"
})

// const inter = Inter({ subsets: ['latin'] });
// const roboto = Roboto({
//   weight:["400","700"],
//   subsets:['latin'],
//   display:"swap"
// })

export const metadata: Metadata = {
  title: 'Fortune360 Solutions',
  description: 'Providing cutting-edge lottery platform solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}