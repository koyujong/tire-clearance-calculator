import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://tireclearance.4kdrivewalk.com"),
  title: "Lifted Truck Tire Clearance Calc | Speedometer Error Calculator",
  description: "Calculate and visualize tire size differences, speedometer error, and lift clearance. Perfect for lifted trucks, off-road setups, and car tuning.",
  keywords: "Tire size calculator, Speedometer error calculator, Tire comparison, Lifted truck tire clearance, Tire tuning, 타이어 외경 계산기",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lifted Truck Tire Clearance & Speedo Calc",
    description: "Compare tire sizes visually and calculate speedometer error instantly.",
    locale: "en_US",
    type: "website",
  },
  verification: {
    google: "47z3uMVzsCyw66vTGaSLLtCKy3vebHH5QOU4H3yCDR8",
    other: {
      "naver-site-verification": "886e6d1e832734015781cbbdd53f9613bf16233d",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3844FCWG6G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3844FCWG6G');
          `}
        </Script>
        {/* Google AdSense 자동 광고 스크립트 */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3488637908196788"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
