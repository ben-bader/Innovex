import { ReactNode } from "react";
import "@/app/globals.css";
import SessionProvider from "@/src/components/SeesionProvider";

export const metadata = {
  title: "Innovex | Checkout",
};

const layout = ({ children }: { children?: ReactNode }) => {
  return (
    <html>
      <body className="bg-gray-950! text-white!">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
};

export default layout;
