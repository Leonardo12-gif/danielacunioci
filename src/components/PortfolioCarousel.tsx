import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpeg";
import portfolio2 from "@/assets/portfolio-2.jpeg";
import portfolio3 from "@/assets/portfolio-3.jpeg";
import portfolio4 from "@/assets/portfolio-4.jpeg";
import portfolio5 from "@/assets/portfolio-5.jpeg";
import portfolio6 from "@/assets/portfolio-6.jpeg";
import portfolio7 from "@/assets/portfolio-7.jpeg";
import portfolio8 from "@/assets/portfolio-8.jpeg";
import portfolio9 from "@/assets/portfolio-9.jpeg";

const images = [
  { src: portfolio1, alt: "Trabalho de cílios e olhar marcante" },
  { src: portfolio2, alt: "Sobrancelhas com design natural" },
  { src: portfolio3, alt: "Detalhe close-up de extensão de cílios" },
  { src: portfolio4, alt: "Acabamento final · cílios e sobrancelhas" },
  { src: portfolio5, alt: "Sobrancelhas com design natural e marcante" },
  { src: portfolio6, alt: "Olhar valorizado por design de sobrancelhas" },
  { src: portfolio7, alt: "Cílios alongados com efeito natural" },
  { src: portfolio8, alt: "Lash lifting com curvatura definida" },
  { src: portfolio9, alt: "Design de sobrancelhas premium" },
];

export function PortfolioCarousel() {
  const autoplayRef = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true }),
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", containScroll: false },
    [autoplayRef.current],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const pauseAutoplay = () => {
    autoplayRef.current?.stop();
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  };

  const scheduleResume = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      autoplayRef.current?.play();
    }, 4000);
  };

  const handleInteraction = () => {
    pauseAutoplay();
    scheduleResume();
  };

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  const scrollPrev = () => {
    emblaApi?.scrollPrev();
    handleInteraction();
  };
  const scrollNext = () => {
    emblaApi?.scrollNext();
    handleInteraction();
  };
  const scrollTo = (i: number) => {
    emblaApi?.scrollTo(i);
    handleInteraction();
  };

  return (
    <section aria-label="Galeria de trabalhos" className="reveal">
      <div className="flex flex-col items-center text-center">
        <h2
          className="font-label text-gold uppercase"
          style={{ fontSize: "10px", letterSpacing: "0.22em", fontWeight: 400 }}
        >
          Portfólio
        </h2>
        <div
          className="mt-2.5"
          style={{ width: "24px", height: "1px", background: "var(--gold)", opacity: 0.7 }}
          aria-hidden="true"
        />
      </div>

      <div
        className="relative mt-6"
        onMouseEnter={pauseAutoplay}
        onMouseLeave={scheduleResume}
        onTouchStart={pauseAutoplay}
        onTouchEnd={scheduleResume}
      >
        {/* Viewport com peek nas laterais */}
        <div className="overflow-hidden -mx-6 px-6" ref={emblaRef}>
          <div className="flex">
            {images.map((img, i) => {
              const isActive = i === selectedIndex;
              return (
                <div
                  key={img.src}
                  className="relative shrink-0 grow-0 px-1.5"
                  style={{ flexBasis: "78%" }}
                >
                  <div
                    className="overflow-hidden rounded-[16px] border border-divider bg-surface transition-all duration-500 ease-out"
                    style={{
                      aspectRatio: "4 / 5",
                      transform: isActive ? "scale(1)" : "scale(0.93)",
                      opacity: isActive ? 1 : 0.55,
                      boxShadow: isActive
                        ? "0 18px 40px -22px color-mix(in oklab, var(--gold) 55%, transparent)"
                        : "none",
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading={i === 0 ? "eager" : "lazy"}
                      className="h-full w-full object-cover"
                    />
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4"
                      style={{
                        background:
                          "linear-gradient(to top, color-mix(in oklab, var(--bg-primary) 35%, transparent), transparent)",
                      }}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Setas discretas */}
        <button
          type="button"
          aria-label="Imagem anterior"
          onClick={scrollPrev}
          className="absolute left-1 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105"
          style={{
            background: "color-mix(in oklab, var(--bg-primary) 60%, transparent)",
            border: "1px solid color-mix(in oklab, var(--gold) 35%, transparent)",
            color: "var(--gold)",
          }}
        >
          <ChevronLeft size={16} strokeWidth={1.6} />
        </button>
        <button
          type="button"
          aria-label="Próxima imagem"
          onClick={scrollNext}
          className="absolute right-1 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105"
          style={{
            background: "color-mix(in oklab, var(--bg-primary) 60%, transparent)",
            border: "1px solid color-mix(in oklab, var(--gold) 35%, transparent)",
            color: "var(--gold)",
          }}
        >
          <ChevronRight size={16} strokeWidth={1.6} />
        </button>
      </div>

      {/* Indicadores minimalistas */}
      <div className="mt-4 flex items-center justify-center gap-1">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ir para imagem ${i + 1}`}
            onClick={() => scrollTo(i)}
            className="flex items-center justify-center"
            style={{ height: "16px", width: "24px", background: "transparent", border: "none", cursor: "pointer", padding: 0 }}
          >
            <span
              className="block transition-all duration-500 ease-out"
              style={{
                height: "2px",
                width: i === selectedIndex ? "20px" : "8px",
                background: i === selectedIndex ? "var(--gold)" : "var(--divider)",
                opacity: i === selectedIndex ? 1 : 0.6,
              }}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
