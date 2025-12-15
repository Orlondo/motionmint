import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "MotionMint",
  description:
    "Effortless video creation for real estate, Airbnb, creators, and modern brands.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}