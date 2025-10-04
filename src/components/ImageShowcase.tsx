interface ImageShowcaseProps {
  imageUrl: string;
  altText?: string;
  className?: string;
}

export const ImageShowcase = ({
  imageUrl,
  altText = "Showcase image",
  className = ""
}: ImageShowcaseProps) => {
  return (
    <section
      className={`relative py-16 overflow-hidden ${className}`}
      style={{
        backgroundImage: 'url(https://themephi.net/template/zeniqsh/zeniqs/assets/images/hero/h5_bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[rgb(14,90,56)]/95 to-[rgb(14,90,56)]/90"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#84cc16] via-[#65a30d] to-[#84cc16] rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500"></div>

          <div className="relative rounded-2xl overflow-hidden border-2 border-[#84cc16]/30 shadow-2xl">
            <div className="aspect-[21/9] relative overflow-hidden bg-gradient-to-br from-[rgb(14,90,56)] to-[rgb(18,110,70)]">
              <img
                src={imageUrl}
                alt={altText}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 mix-blend-overlay opacity-80"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(14,90,56)]/60 via-transparent to-[rgb(14,90,56)]/30 pointer-events-none"></div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#84cc16] to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
