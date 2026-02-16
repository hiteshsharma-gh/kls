import About from "./components/About";
import Contact from "./components/Contact";
import Cta from "./components/Cta";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";
import TrackConsignment from "./components/TrackConsignment";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Stats />
      <TrackConsignment />
      <Cta />
      <Contact />
    </>
  );
}
