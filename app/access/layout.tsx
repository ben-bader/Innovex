import { ReactNode } from "react";
import '@/app/globals.css';

export const metadata = {
  title: "Innovex Access",
};

export default function Layout({ children }: { children?: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-950! text-white!">{children}</body>
    </html>
  ); 
}
