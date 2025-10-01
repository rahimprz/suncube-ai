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
    <section className="relative overflow-hidden">
      
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
              <a href={backAction.href} className="text-green-200 hover:text-white">
                ← {backAction.label}
              </a>
            </Button>
          </div>
        )}
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-400/20 text-green-300 border border-green-400/30 mb-6">
            {subtitle}
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {primaryAction && (
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-400 text-white shadow-lg hover:shadow-xl transition-all px-8 py-3 rounded-full font-semibold"
                asChild
              >
                <a href={primaryAction.href}>
                  {primaryAction.label}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            )}
            
            {secondaryAction && (
              <Button variant="outline" size="lg" className="bg-transparent border-2 border-green-300 text-green-200 hover:bg-green-400/20 hover:text-white hover:border-green-400 px-8 py-3 rounded-full font-semibold" asChild>
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