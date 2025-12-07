import Terms from "@/src/components/Policy/Terms"


export const metadata = {
  title: `${process.env.APPNAME} | Terms & Conditions`,
};
const page = () => {
  return (
    <>
      <Terms/>
    </>
  )
}

export default page
