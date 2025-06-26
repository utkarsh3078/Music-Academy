import FeaturedCourse from "@/components/FeaturedCourse";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instuctors from "@/components/instructors";
import MovingCards from "@/components/movingCards";
import ScrollSection from "@/components/ScrollSection";
import UpcomingWebinars from "@/components/UpcomingWebinars";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialised bg-grid-white/[0.0`2]">
      < HeroSection />
      <FeaturedCourse />
      <ScrollSection />
      <MovingCards />
      <UpcomingWebinars />
      <Instuctors />
      <Footer />
    </main>
  );
}
