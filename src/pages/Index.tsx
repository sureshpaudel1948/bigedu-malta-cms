import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import StudyDestinations from "@/components/sections/StudyDestinations";
import Services from "@/components/sections/Services";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <StudyDestinations />
        <About />
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default Index;