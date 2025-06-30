import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="max-w-[1080px] m-auto px-4">
      <Navbar />
      <main className="">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}
