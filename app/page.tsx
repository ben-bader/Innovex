import About from "@/src/components/About";
import Brands from "@/src/components/Brands";
import Categories from "@/src/components/Categories";
import Hero from "@/src/components/Hero";
import Events from "@/src/components/Events";
import Header from "@/src/components/Header";
export default function Home() {
  return (
    <>
      <Header />
      <main >
        <Hero />
        <About />
        <Categories />
        <Events />
        <Brands />
      </main>
    </>
  );
}
