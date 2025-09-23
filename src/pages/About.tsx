import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container py-16">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">About Stellar HR Consultancy Consultancy</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Professional HR solutions provider with a global presence, connecting employers with the right talent.
            </p>
          </div>

          {/* Company Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Stellar HR Consultancy is a professional HR solutions provider based in Malta, with branches in Dubai (UAE) and Nepal. We specialize in helping employers find qualified workers both locally and internationally.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are not an employer ourselves – the hiring company remains the direct employer. Our role is to support and streamline the recruitment process, ensuring businesses find the right talent while candidates find meaningful opportunities.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-primary-glow/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Global Presence</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="font-medium">Malta Headquarters</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="font-medium">Dubai, UAE Branch</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="font-medium">Nepal Operations</span>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Team */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold mb-12 text-center">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">JS</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Joseph SAMMUT</h3>
                <p className="text-muted-foreground">Owner & Founder</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">PB</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Purna B.</h3>
                <p className="text-muted-foreground">Operations Manager</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">SK</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Suraj KC</h3>
                <p className="text-muted-foreground">Regional Head</p>
              </div>
            </div>
          </div>

          {/* Our Approach */}
          <div className="bg-gradient-to-r from-slate-50 to-white rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">For Employers</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Reduce hiring risks and time-to-fill</li>
                  <li>• Access to pre-screened talent pools</li>
                  <li>• Complete documentation support</li>
                  <li>• Ongoing recruitment consultation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">For Job Seekers</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Career guidance and placement support</li>
                  <li>• Interview preparation and coaching</li>
                  <li>• Documentation assistance</li>
                  <li>• Local and international opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;