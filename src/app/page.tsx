import FeaturedCourse from "@/components/FeaturedCourse";
import HeroSection from "@/components/HeroSection";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialised bg-grid-white/[0.0`2]">
      < HeroSection />
      <FeaturedCourse />
    </main>
  );
}
