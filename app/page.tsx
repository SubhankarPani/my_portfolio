import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import AboutSection from "@/components/main/about";
import Academics from "@/components/main/academics";
import Internship from "@/components/main/internship";
import Certifications from "@/components/main/certifications";
import WallOfFame from "@/components/main/WallOfFame";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <AboutSection />
        <Skills />
        <Academics />
        <Internship />
        <Certifications />
        <WallOfFame/>
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
