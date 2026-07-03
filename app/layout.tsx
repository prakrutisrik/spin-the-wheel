import type { Metadata } from "next";
import { Silkscreen } from "next/font/google";
import "./globals.css";

const pixel = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "hobby arcade",
  description: "a cozy retro hobby spinner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pixel.className}>
        {children}
      </body>
    </html>
  );
}