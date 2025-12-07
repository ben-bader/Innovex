import Profile from "@/src/components/Profile/Profile";

export const metadata = {
  title: `${process.env.APPNAME} | Profile`,
};
export default function page() {
    return <><Profile /></>;
}