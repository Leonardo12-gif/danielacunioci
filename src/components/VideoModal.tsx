import { useEffect, useRef, useState } from "react";
import { X, Maximize2 } from "lucide-react";

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
  src: string;
}

export function VideoModal({ open, onClose, src }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!mounted || !open) return null;

  const goFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      el.requestFullscreen?.();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center animate-fade-in"
      style={{
        background: "color-mix(in oklab, var(--bg-primary) 75%, transparent)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
      }}
      onClick={onClose}
    >
      <div
        ref={containerRef}
        className="relative w-[min(92vw,420px)] overflow-hidden rounded-[18px] border border-divider bg-surface"
        style={{
          boxShadow: "0 30px 60px -20px color-mix(in oklab, var(--gold) 40%, transparent)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <video
          ref={videoRef}
          src={src}
          controls
          autoPlay
          playsInline
          className="block h-auto w-full bg-black"
          style={{ aspectRatio: "9 / 16", objectFit: "cover" }}
        />
        <div className="absolute right-2 top-2 flex gap-2">
          <button
            type="button"
            aria-label="Tela cheia"
            onClick={goFullscreen}
            className="flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105"
            style={{
              background: "color-mix(in oklab, var(--bg-primary) 65%, transparent)",
              border: "1px solid color-mix(in oklab, var(--gold) 35%, transparent)",
              color: "var(--gold)",
            }}
          >
            <Maximize2 size={15} strokeWidth={1.6} />
          </button>
          <button
            type="button"
            aria-label="Fechar vídeo"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105"
            style={{
              background: "color-mix(in oklab, var(--bg-primary) 65%, transparent)",
              border: "1px solid color-mix(in oklab, var(--gold) 35%, transparent)",
              color: "var(--gold)",
            }}
          >
            <X size={15} strokeWidth={1.6} />
          </button>
        </div>
      </div>
    </div>
  );
}
