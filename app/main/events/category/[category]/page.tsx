import CategoryPage from "@/src/components/Events/CategoryPage"


export const metadata = {
  title: `${process.env.APPNAME} | Explore events by category.`,
}
const page = () => {
  return (
    <>
      <CategoryPage />
    </>
  )
}

export default page
