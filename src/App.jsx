import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Advantages from './components/Advantages';
import Appointment from './components/Appointment';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Doctors />
      <Advantages />
      <Appointment />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
