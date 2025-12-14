
import { ReactNode } from "react";
import  '@/app/globals.css';

export  const metadata ={
  title : "Innovex | Checkout"
}

const layout = ({children}:{children ?: ReactNode}) => {
  return (
    <html>
      <body className="bg-gray-950! text-white!">
        {children}
      </body>
    </html>
  )
}

export default layout
