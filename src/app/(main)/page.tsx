import AnimatedCodeBlock from "./components/animated-code-block";
import { HeroSection } from "./components/hero-section";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col md:flex-row items-center justify-center w-full h-full py-10 lg:py-20 gap-16 lg:gap-8 px-8 max-w-[1200px] mx-auto">
      {/* Sol tərəf: Mətn bloku */}
      <div className="w-full flex flex-col items-center justify-center">
        <HeroSection />
      </div>
      {/* Sağ tərəf: Oyun paneli */}
      <div className="w-full hidden lg:flex flex-col items-center justify-center">
        <AnimatedCodeBlock />
      </div>
    </div>
  );
}
