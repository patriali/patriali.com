import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Danilo Patriali",
  description: "Contact info and links for Danilo Patriali.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
