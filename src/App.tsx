import AboutPartner from "./components/AboutPartner";
import Contact from "./components/Contact";

import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Properties from "./components/Properties";
import Testimonials from "./components/Testimonials";
import Videos from "./components/Videos";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <AboutPartner />
      <Properties />
      <Videos />
      <Testimonials />
      <Work />
      <Faq />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;