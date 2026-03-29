import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import ServiceAreas from "../components/ServiceAreas";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <Hero />
      <Projects />
      <Services />
      <WhyChooseUs />
      <ServiceAreas />
      <Footer />
    </div>
  );
}