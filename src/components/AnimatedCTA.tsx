import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const AnimatedCTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [circleScale, setCircleScale] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight / 2)));

        const scale = scrollProgress * 15;
        setCircleScale(scale);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 transition-opacity duration-700"
        style={{
          opacity: circleScale >= 8 ? 1 : 0
        }}
      ></div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div
          className="rounded-full bg-gradient-to-br from-green-400 to-emerald-500 transition-all duration-300 ease-out"
          style={{
            width: `${circleScale * 100}px`,
            height: `${circleScale * 100}px`,
            transform: `scale(${circleScale})`,
            opacity: circleScale < 8 ? 0.9 : 0
          }}
        ></div>
      </div>

      <div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700"
        style={{
          opacity: circleScale >= 3 ? 1 : 0.3,
          transform: `translateY(${circleScale >= 3 ? '0' : '20px'})`
        }}
      >
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to Transform Your Energy Future?
        </h2>
        <p className="text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
          Join the solar revolution with AI-powered intelligence and blockchain security.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-200"
          style={{
            opacity: circleScale >= 5 ? 1 : 0,
            transform: `translateY(${circleScale >= 5 ? '0' : '20px'})`
          }}
        >
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 text-emerald-900 shadow-2xl hover:shadow-3xl transition-all px-10 py-6 rounded-full font-bold text-lg"
            >
              Get Your Free Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link to="/portal">
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-10 py-6 rounded-full font-bold text-lg transition-all"
            >
              View Live Demo
            </Button>
          </Link>
        </div>
      </div>

      <div className="absolute top-8 left-8 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      <div className="absolute top-16 right-16 w-3 h-3 bg-green-300 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-12 left-24 w-2 h-2 bg-green-500 rounded-full animate-pulse delay-500"></div>
      <div className="absolute bottom-24 right-32 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-1500"></div>
    </section>
  );
};
