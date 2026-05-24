"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, Sun, Moon } from "lucide-react";
import { company } from "@/data/company";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/translations";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const { lang, setLang } = useLanguage();
  const tr = t[lang];

  const navLinks = [
    { label: tr.nav_about, href: "#who-we-are" },
    { label: tr.nav_achievements, href: "#achievements" },
    { label: tr.nav_projects, href: "#projects" },
    { label: tr.nav_team, href: "#team" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-md border-b border-border shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        <Link
          href="/"
          className="flex items-center gap-2 font-display font-semibold text-xl text-text hover:text-accent transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
            <Zap size={16} className="text-accent" />
          </div>
          {company.name}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-muted hover:text-text transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          {/* Language toggle */}
          <div className="flex items-center gap-0.5 rounded-lg border border-border overflow-hidden">
            {(["az", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2.5 py-1 text-xs font-semibold uppercase transition-all ${
                  lang === l
                    ? "bg-accent text-background"
                    : "text-muted hover:text-text"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-border text-muted hover:text-text hover:border-accent/40 transition-all"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href={company.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-4 py-2 rounded-lg border border-accent/30 text-accent hover:bg-accent/10 transition-all duration-200"
          >
            LinkedIn
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          {/* Language toggle mobile */}
          <div className="flex items-center gap-0.5 rounded-lg border border-border overflow-hidden">
            {(["az", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-1 text-xs font-semibold uppercase transition-all ${
                  lang === l
                    ? "bg-accent text-background"
                    : "text-muted hover:text-text"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-border text-muted hover:text-text transition-all"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            className="text-muted hover:text-text transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-surface/95 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-sm font-medium text-muted hover:text-text transition-colors py-1 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={company.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-center py-2 rounded-lg border border-accent/30 text-accent hover:bg-accent/10 transition-all"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
