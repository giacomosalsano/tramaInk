import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trama Ink",
  description: "Estúdio Trama Ink",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      

      </head>
      <body className={inter.className}>{children}
      </body>
    </html>
  );
}
