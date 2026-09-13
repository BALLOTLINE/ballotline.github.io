import type { Metadata } from "next";
import { Big_Shoulders, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
});

const bigShoulders = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  axes: ["opsz"],
  adjustFontFallback: false,
  fallback: ["Impact", "Arial Narrow", "sans-serif"],
});

export const metadata: Metadata = {
  title: "BALLOTLINE",
  description: "Community management for organizations in the political sphere.",
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${bigShoulders.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col text-foreground font-sans">{children}</body>
    </html>
  );
}
