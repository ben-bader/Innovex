
import EventsPage from "@/src/components/Events/EventsPage"

export const metadata = {
  title : `${process.env.APPNAME} | Explore upcoming tech events worldwide.`,
}

export default function  Page(){
  return <><EventsPage /></>
}