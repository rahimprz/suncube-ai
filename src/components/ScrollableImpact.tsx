import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";

interface ImpactCard {
  year: string;
  category: string;
  title: string;
  image: string;
}

const impactData: ImpactCard[] = [
  {
    year: "2025",
    category: "Solar Innovation",
    title: "AI-Powered Energy Management",
    image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    year: "2025",
    category: "Smart Grid",
    title: "Virtual Power Plant Network",
    image: "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    year: "2024",
    category: "Sustainability",
    title: "Carbon-Neutral Operations",
    image: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    year: "2024",
    category: "Technology",
    title: "Blockchain Energy Trading",
    image: "https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    year: "2024",
    category: "Community",
    title: "5000+ Homes Powered",
    image: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    year: "2023",
    category: "Analytics",
    title: "Predictive Maintenance AI",
    image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1200"
  }
];

export const ScrollableImpact = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      scrollContainer.scrollBy({
        left: e.deltaY,
        behavior: "smooth"
      });
    };

    scrollContainer.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      scrollContainer.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <Badge variant="outline" className="mb-4 border-green-300/40 text-green-300 bg-green-400/10 text-sm px-4 py-1">
            Our Impact
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Delivering Real Impact
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Join thousands of customers already benefiting from our AI-powered solar solutions.
          </p>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="overflow-x-scroll scrollbar-hide px-4 sm:px-6 lg:px-8"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        <div className="flex gap-6 pb-8" style={{ width: 'max-content' }}>
          {impactData.map((impact, index) => (
            <div
              key={index}
              className="group relative w-[600px] h-[450px] rounded-2xl overflow-hidden cursor-pointer"
              style={{
                animation: `fadeInScale 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 to-teal-900/80 group-hover:from-emerald-900/70 group-hover:to-teal-900/70 transition-all duration-500 z-10"></div>

              <img
                src={impact.image}
                alt={impact.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 z-20 flex flex-col justify-end p-10">
                <div className="transform group-hover:-translate-y-4 transition-transform duration-500">
                  <div className="text-sm text-green-300 font-semibold mb-2 uppercase tracking-wider">
                    {impact.category}
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-4 leading-tight">
                    {impact.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg text-green-200 font-medium">
                      {impact.year}
                    </span>
                    <div className="w-12 h-12 rounded-full bg-green-400/20 border-2 border-green-400 flex items-center justify-center group-hover:bg-green-400 transition-all duration-300">
                      <svg
                        className="w-5 h-5 text-green-400 group-hover:text-white transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-30"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8 text-green-200 text-sm">
        Scroll horizontally to explore more projects
      </div>

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};
