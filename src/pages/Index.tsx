import { useState } from "react";
import { Instagram, MapPin, FileText, ExternalLink, Sparkles, PlayCircle } from "lucide-react";
import logo from "@/assets/daniela-cunioci-logo.png";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LinkCard } from "@/components/LinkCard";
import { CursorDot } from "@/components/CursorDot";
import { PortfolioCarousel } from "@/components/PortfolioCarousel";
import { VideoModal } from "@/components/VideoModal";
import { useReveal } from "@/hooks/use-reveal";

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
    </svg>
  );
}

const WHATSAPP_URL =
  "https://wa.me/5515996881578?text=Ol%C3%A1%21%20Vim%20pelo%20link%20da%20bio%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20atendimentos.";
const INSTAGRAM_URL = "https://www.instagram.com/danielacunioci.beauty";
const ADDRESS = "Av. Júlio Cassola, Alphaville, Votorantim, SP, 18118-001";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

const services = [
  { name: "Cílios", desc: "Realce o olhar com técnica, leveza e acabamento natural." },
  { name: "Sobrancelhas", desc: "Design que valoriza a harmonia natural do rosto." },
  { name: "Lash Lifting", desc: "Curvatura e definição para o dia a dia." },
  { name: "Noivas", desc: "Beleza delicada e sofisticada para momentos únicos." },
];

function OrnamentLine({ width = 32, delay = 0 }: { width?: number; delay?: number }) {
  return (
    <div
      className="animate-ornament"
      style={{
        width: `${width}px`,
        height: "1px",
        background: "var(--gold)",
        opacity: 0.7,
        animationDelay: `${delay}ms`,
      }}
      aria-hidden="true"
    />
  );
}

const Index = () => {
  const [mapOpen, setMapOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  useReveal();

  return (
    <main className="relative z-[2] min-h-screen w-full">
      <CursorDot />

      <div className="mx-auto w-full max-w-[420px] px-6 pb-7 pt-12">
        {/* HEADER */}
        <header className="flex flex-col items-center text-center">
          <div
            className="animate-scale-in"
            style={{
              animationDelay: "0ms",
              boxShadow:
                "0 0 0 4px var(--bg-primary), 0 0 0 5.5px rgba(168, 130, 79, 0.25)",
              borderRadius: "9999px",
            }}
          >
            <div
              className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full"
              style={{ border: "1.5px solid rgba(175, 140, 100, 0.5)" }}
            >
              <img
                src={logo}
                alt="Daniela Cunioci Beauty"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>

          <div
            className="mt-7 flex flex-wrap items-center justify-center gap-2.5 animate-fade-up"
            style={{ animationDelay: "150ms", animationFillMode: "both" }}
          >
            <h1
              className="font-serif font-light text-foreground uppercase"
              style={{ fontSize: "28px", letterSpacing: "0.08em", lineHeight: 1 }}
            >
              DANIELA CUNIOCI
            </h1>
            <span
              className="inline-flex items-center rounded-full px-2.5 py-[3px] font-label text-gold"
              style={{
                fontSize: "10px",
                letterSpacing: "0.18em",
                fontWeight: 400,
                border: "1px solid var(--divider)",
                textTransform: "uppercase",
              }}
            >
              Beauty
            </span>
          </div>

          <div
            className="mt-5 animate-fade-up"
            style={{ animationDelay: "250ms", animationFillMode: "both" }}
          >
            <OrnamentLine width={32} delay={250} />
          </div>

          <p
            className="mt-4 font-serif text-mid animate-fade-up"
            style={{
              animationDelay: "250ms",
              animationFillMode: "both",
              fontSize: "15px",
              letterSpacing: "0.02em",
              fontWeight: 300,
              fontStyle: "italic",
            }}
          >
            Cílios e Sobrancelhas · Alphaville
          </p>

          <p
            className="mt-4 font-label text-soft animate-fade-up"
            style={{
              animationDelay: "350ms",
              animationFillMode: "both",
              fontSize: "13px",
              fontWeight: 300,
              lineHeight: 1.7,
              letterSpacing: "0.01em",
              maxWidth: "320px",
            }}
          >
            Referência em cílios e sobrancelhas. Há 9 anos transformando belezas com
            segurança e exclusividade.
          </p>

          <div
            className="mt-6 animate-fade-up"
            style={{ animationDelay: "450ms", animationFillMode: "both" }}
          >
            <ThemeToggle />
          </div>
        </header>

        <div className="section-divider" />

        {/* LINKS */}
        <section className="flex flex-col gap-2.5">
          <LinkCard
            href={WHATSAPP_URL}
            external
            icon={<WhatsAppIcon />}
            title="Agendar pelo WhatsApp"
            description="Resposta rápida · atendimento personalizado"
            delay={450}
          />
          <LinkCard
            href="/Cilios-e-Sobrancelhas.pdf"
            external
            icon={<FileText size={16} strokeWidth={1.6} />}
            title="Cílios e Sobrancelhas"
            description="Informações e valores · clique para abrir"
            delay={550}
          />
          <LinkCard
            href="/Lash-e-Brow.pdf"
            external
            icon={<Sparkles size={16} strokeWidth={1.6} />}
            title="Lash e Brow"
            description="Informações e valores · clique para abrir"
            delay={600}
          />
          <LinkCard
            onClick={() => setVideoOpen(true)}
            icon={<PlayCircle size={16} strokeWidth={1.6} />}
            title="Conheça nosso espaço"
            description="Assista ao vídeo do estúdio"
            delay={650}
          />
          <LinkCard
            href={INSTAGRAM_URL}
            external
            icon={<Instagram size={16} strokeWidth={1.6} />}
            title="Instagram"
            description="@danielacunioci.beauty"
            delay={650}
          />
          <LinkCard
            onClick={() => setMapOpen((v) => !v)}
            icon={<MapPin size={16} strokeWidth={1.6} />}
            title="Localização"
            description="Alphaville · Votorantim, SP"
            expanded={mapOpen}
            delay={750}
          />

          <div
            className={`grid overflow-hidden transition-all duration-500 ease-out ${
              mapOpen ? "mt-1 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="min-h-0">
              <div className="overflow-hidden rounded-[14px] border border-divider bg-surface">
                <iframe
                  title="Localização Daniela Cunioci Beauty"
                  src={MAPS_EMBED}
                  width="100%"
                  height="200"
                  style={{ border: 0, filter: "saturate(0.85) contrast(0.95)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div className="flex flex-col gap-2 border-t border-divider px-4 py-3">
                  <p
                    className="font-label text-soft"
                    style={{ fontSize: "11px", fontWeight: 300, lineHeight: 1.55 }}
                  >
                    {ADDRESS}
                  </p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-divider px-3 py-2 font-label text-gold uppercase transition-colors duration-300 hover:bg-gold-soft hover:border-gold"
                    style={{ fontSize: "10px", letterSpacing: "0.18em", fontWeight: 400 }}
                  >
                    Abrir no Google Maps
                    <ExternalLink size={11} strokeWidth={1.6} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        <PortfolioCarousel />

        <footer className="mt-10 flex justify-center pb-7 pt-2">
          <a
            href="https://www.frezamarketing.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="font-label uppercase text-soft transition-colors duration-300 hover:text-gold"
            style={{
              fontSize: "9px",
              letterSpacing: "0.2em",
              fontWeight: 400,
              opacity: 0.6,
            }}
          >
            Desenvolvido por Frezza Marketing
          </a>
        </footer>
      </div>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} src="/video-daniela.mp4" />
    </main>
  );
};

export default Index;
