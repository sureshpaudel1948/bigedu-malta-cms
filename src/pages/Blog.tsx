import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container py-16">
          <h1 className="text-4xl font-bold mb-8">Blog & News</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Stay updated with the latest news, tips, and insights about studying abroad.
          </p>
          <div className="prose max-w-none">
            <p>Blog posts coming soon...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;