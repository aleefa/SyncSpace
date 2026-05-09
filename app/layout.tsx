import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SyncSpace",
  description: "A clean and modern access portal for SyncSpace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
