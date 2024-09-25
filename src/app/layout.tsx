import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Первый AI Парфюмер В Мире!",
  description: "Первый AI Парфюмер В Мире!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-inter">
        {children}
      </body>
    </html>
  );
}
