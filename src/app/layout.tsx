// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { SegmentBar } from "@/components/SegmentBar";

export const metadata: Metadata = {
  title: "Itaú | Feito com você",
  description: "O banco que evolui para você.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased overflow-x-hidden">
        <SegmentBar />
        {children}
      </body>
    </html>
  );
}