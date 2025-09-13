import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Courses = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container py-16">
          <h1 className="text-4xl font-bold mb-8">Available Courses</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Explore the wide range of courses available at our partner universities worldwide.
          </p>
          <div className="prose max-w-none">
            <p>Course listings coming soon...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;