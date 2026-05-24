import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <Achievements />
        <Projects />
        <Team />
      </main>
      <Footer />
    </>
  );
}
