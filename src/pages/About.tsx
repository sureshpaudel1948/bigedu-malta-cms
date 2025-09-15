import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-8">About Stellar HR Consultancy</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Learn more about our mission to connect employers with the right talent across Malta, UAE, and Nepal.
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