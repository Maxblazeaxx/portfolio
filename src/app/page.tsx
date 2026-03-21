import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#121212] selection:bg-white/20">
      <ScrollyCanvas />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
