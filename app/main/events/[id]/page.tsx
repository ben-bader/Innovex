import EventPage from "@/src/components/Events/EventPage"

export const metadata = {
  title : `${process.env.APPNAME} | Event Details`,
}
const page = () => {
  return (
    <>
      <EventPage />
    </>
  )
}

export default page
