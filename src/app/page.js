import About from "@/components/sections/home/About";
import Bottom from "@/components/sections/home/Bottom";
import Features from "@/components/sections/home/Features";
import Gallery from "@/components/sections/home/Gallery";
import Hero from "@/components/sections/home/hero";
import Students from "@/components/sections/home/Students";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Features/>
      <Students/>
      <Gallery/>
      <Bottom/>
    </div>
  );
}
