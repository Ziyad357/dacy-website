"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { company } from "@/data/company";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/translations";

export default function Hero() {
  const { lang } = useLanguage();
  const tr = t[lang];
  const scrollToWork = () => {
    const el = document.querySelector("#achievements");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollDown = () => {
    const el = document.querySelector("#who-we-are");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      <div
        className="absolute inset-0 bg-hero-grid bg-grid opacity-100"
        aria-hidden="true"
      />

      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgb(var(--color-accent) / 0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-medium tracking-wider uppercase mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          {tr.hero_badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text leading-[1.05] tracking-tight mb-6"
        >
          {company.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="font-display text-2xl sm:text-3xl md:text-4xl font-medium gradient-text mb-6"
        >
          {company.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {company.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToWork}
            className="group flex items-center gap-2 px-8 py-3.5 rounded-xl bg-accent text-background font-display font-semibold text-base hover:bg-accent-dim transition-all duration-200 shadow-glow-accent hover:shadow-glow-accent-lg"
          >
            {tr.hero_cta}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <a
            href={company.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl border border-border text-text font-display font-semibold text-base hover:border-accent/40 hover:bg-surface transition-all duration-200"
          >
            GitHub
          </a>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted hover:text-accent transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </motion.button>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgb(var(--color-bg)))",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
