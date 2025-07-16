import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

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
      <body className={`${notoSerif.variable} flex`}>
        <div className="min-h-screen font-noto-serif flex flex-col w-full max-w-full">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
