import Image from "next/image";
import Hero from "./components/pageComponent/Hero";
import About from "./components/pageComponent/About";
import Project from "./components/pageComponent/Project";
import Contact from "./components/pageComponent/Contact";

export default function Home() {
  return (
    <main className="overflow-auto" >

      <Hero />
      <About />
      <Project />
      <Contact />
    </main>
  );
}
