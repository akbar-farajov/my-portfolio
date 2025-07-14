import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Akbar Farajov",
  description: "Akbar Farajov's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSerif.variable} antialiased flex flex-col`}>
        <div className="flex flex-col min-h-screen font-noto-serif">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
