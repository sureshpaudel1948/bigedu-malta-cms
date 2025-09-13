import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container py-16">
          <h1 className="text-4xl font-bold mb-8">About Big Education Malta</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Learn more about our mission, vision, and commitment to helping students achieve their educational dreams.
          </p>
          <div className="prose max-w-none">
            <p>Content coming soon...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;