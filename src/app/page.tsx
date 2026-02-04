import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuHighlights from "@/components/MenuHighlights";
import ChefStory from "@/components/ChefStory";
import Gallery from "@/components/Gallery";
import ReservationsCTA from "@/components/ReservationsCTA";
import Testimonials from "@/components/Testimonials";
import LocationHours from "@/components/LocationHours";
import PrivateEvents from "@/components/PrivateEvents";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MenuHighlights />
        <ChefStory />
        <Gallery />
        <ReservationsCTA />
        <Testimonials />
        <PrivateEvents />
        <LocationHours />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
