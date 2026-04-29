import { type ReactNode } from "react";

interface LinkCardProps {
  href?: string;
  onClick?: () => void;
  icon: ReactNode;
  title: string;
  description?: string;
  external?: boolean;
  expanded?: boolean;
  delay?: number;
}

export function LinkCard({
  href,
  onClick,
  icon,
  title,
  description,
  external,
  expanded,
  delay = 0,
}: LinkCardProps) {
  const className =
    "group flex w-full items-center gap-3.5 rounded-[14px] border border-divider bg-surface px-[18px] py-4 text-left no-underline transition-[background-color,border-color,transform] duration-[250ms] ease-out hover:-translate-y-px hover:bg-surface-2 hover:border-gold animate-fade-up";

  const style = { animationDelay: `${delay}ms`, animationFillMode: "both" as const };

  const content = (
    <>
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-soft text-gold"
        aria-hidden="true"
      >
        {icon}
      </span>
      <span className="flex flex-1 flex-col leading-tight">
        <span
          className="font-label text-[14px] font-medium text-foreground"
          style={{ letterSpacing: "0.02em" }}
        >
          {title}
        </span>
        {description ? (
          <span
            className="mt-1 font-label text-[12px] font-light text-soft"
            style={{ letterSpacing: "0.01em" }}
          >
            {description}
          </span>
        ) : null}
      </span>
      <span
        className={`text-gold opacity-60 transition-[opacity,transform] duration-200 group-hover:opacity-100 group-hover:translate-x-[2px] ${
          expanded ? "rotate-90" : ""
        }`}
        style={{ fontSize: "18px", lineHeight: 1 }}
        aria-hidden="true"
      >
        ›
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={className}
        style={style}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className} style={style}>
      {content}
    </button>
  );
}
