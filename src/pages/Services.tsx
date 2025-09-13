import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Services from "@/components/sections/Services";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
          <p className="text-xl text-muted-foreground mb-16 text-center max-w-3xl mx-auto">
            Comprehensive support for your entire study abroad journey, from application to post-arrival assistance.
          </p>
        </div>
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;