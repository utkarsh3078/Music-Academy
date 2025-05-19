import FeaturedCourse from "@/components/FeaturedCourse";
import HeroSection from "@/components/HeroSection";
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
    </main>
  );
}
