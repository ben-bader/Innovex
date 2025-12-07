import Cookies from "@/src/components/Policy/Cookies"


export const metadata = {
  title: `${process.env.APPNAME} | Cookies Policy`,
};
const page = () => {
  return (
    <>
      <Cookies/>
    </>
  )
}

export default page
