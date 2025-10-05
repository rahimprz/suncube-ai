import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  backAction?: {
    label: string;
    href: string;
  };
  children?: ReactNode;
  backgroundImage?: string;
}

export const HeroSection = ({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  backAction,
  children,
  backgroundImage
}: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[rgb(14,90,56)] via-[rgb(18,110,70)] to-[rgb(14,90,56)]">

      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        {backAction && (
          <div className="mb-6">
            <Button variant="ghost" size="sm" asChild>
              <a href={backAction.href} className="text-green-100 hover:text-white">
                ← {backAction.label}
              </a>
            </Button>
          </div>
        )}
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white border border-white/20 mb-6 backdrop-blur-sm">
            {subtitle}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            {title}
          </h1>

          <p className="text-xl text-green-50 mb-8 max-w-3xl mx-auto">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {primaryAction && (
              <Button
                size="lg"
                className="bg-[#84cc16] hover:bg-[#75bb14] text-white shadow-lg hover:shadow-xl transition-all px-8 py-3 rounded-full font-semibold"
                asChild
              >
                <a href={primaryAction.href}>
                  {primaryAction.label}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            )}

            {secondaryAction && (
              <Button variant="outline" size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/10 hover:text-white hover:border-white px-8 py-3 rounded-full font-semibold backdrop-blur-sm" asChild>
                <a href={secondaryAction.href}>
                  {secondaryAction.label}
                </a>
              </Button>
            )}
          </div>

          {children && (
            <div className="mt-12">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};