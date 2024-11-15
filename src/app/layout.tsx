import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CustomScrollbar from "./components/CustomScrollbar";

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

export const metadata: Metadata = {
  title: "Gobi",
  description: "Gobi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-[#10BDF7] to-white`}
      >
        {children}
        <CustomScrollbar />
      </body>
    </html>
  );
}
