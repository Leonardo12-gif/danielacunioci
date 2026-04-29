import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("dc-theme");
    const dark = stored === "dark";
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("dc-theme", next ? "dark" : "light");
    } catch {
      // ignore
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={toggle}
        aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
        title={isDark ? "Mudar para modo claro" : "Mudar para modo escuro"}
        className="group inline-flex items-center justify-center rounded-full border border-divider bg-surface/60 text-gold backdrop-blur-md transition-all duration-500 hover:border-gold hover:bg-surface"
        style={{ height: "32px", width: "32px" }}
      >
        <span className="relative h-3.5 w-3.5">
          <Sun
            size={14}
            strokeWidth={1.5}
            className={`absolute inset-0 transition-all duration-500 ${
              isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
            }`}
          />
          <Moon
            size={14}
            strokeWidth={1.5}
            className={`absolute inset-0 transition-all duration-500 ${
              isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
            }`}
          />
        </span>
      </button>
      <span
        className="font-label text-soft uppercase select-none"
        style={{
          fontSize: "9px",
          letterSpacing: "0.22em",
          fontWeight: 400,
          opacity: 0.7,
        }}
      >
        {isDark ? "Modo claro" : "Modo escuro"}
      </span>
    </div>
  );
}
