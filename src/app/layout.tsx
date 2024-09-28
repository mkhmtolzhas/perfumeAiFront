import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

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
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-1NRXY2G5SV" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1NRXY2G5SV');
        `}
      </Script>
    </html>
  );
}
