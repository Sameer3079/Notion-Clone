import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sotion",
  description: "The connected workspace where work happens.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/android-chrome-192x192.png",
        href: "/android-chrome-192x192.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/android-chrome-192x192.png",
        href: "/android-chrome-192x192.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
