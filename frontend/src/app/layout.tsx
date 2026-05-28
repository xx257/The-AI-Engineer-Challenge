import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MATRIX // Mental Coach",
  description: "Supportive mental coach — Matrix terminal interface",
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
