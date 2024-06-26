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
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      </head>
      <body className={inter.className}>{children}
      </body>
    </html>
  );
}
