"use client";

import { useEffect, useState } from "react";
import { PORTFOLIO_DATA } from "./constants/portfolio";

type Props = {
  variant?: "primary" | "secondary";
  iconOnly?: boolean;
  className?: string;
};

export function CopyEmailButton({ variant = "secondary", iconOnly = false, className = "" }: Props) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  useEffect(() => {
    if (status === "idle") return;
    const timer = setTimeout(() => setStatus("idle"), 2500);
    return () => clearTimeout(timer);
  }, [status]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  };

  const label =
    status === "copied" ? "E-mail copiado!" : status === "error" ? "Não foi possível copiar" : "Copiar e-mail";

  const base =
    variant === "primary"
      ? "btn-primary"
      : "btn-secondary";

  if (iconOnly) {
    return (
      <button
        type="button"
        onClick={handleCopy}
        aria-label={label}
        title={label}
        className={`icon-btn ${className}`}
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 6-10 7L2 6" />
        </svg>
      </button>
    );
  }

  return (
    <button type="button" onClick={handleCopy} className={`${base} ${className}`} aria-live="polite">
      {label}
    </button>
  );
}
