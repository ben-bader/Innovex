import UserInfos from "@/src/components/Profile/UserInfos"
import { ReactNode } from "react"
export const metadata = {
  title: `${process.env.APPNAME} | Profile`,
};
interface Props {
    children : ReactNode
}

const Layout:React.FC<Props> = ({children}) => {
  return (
    <div className="px-20 py-8 max-sm:px-6 flex flex-col gap-16" >
        <UserInfos/>
        {children}
    </div>
  )
}

export default Layout
