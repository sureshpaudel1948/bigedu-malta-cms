import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StudyDestinations from "@/components/sections/StudyDestinations";

const Destinations = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">Study Destinations</h1>
          <p className="text-xl text-muted-foreground mb-16 text-center max-w-3xl mx-auto">
            Discover amazing study opportunities around the world with our comprehensive destination guide.
          </p>
        </div>
        <StudyDestinations />
      </main>
      <Footer />
    </div>
  );
};

export default Destinations;