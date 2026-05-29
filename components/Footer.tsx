"use client";

import Link from "next/link";
import { Zap, Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/company";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/translations";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  const { lang } = useLanguage();
  const tr = t[lang];
  const currentYear = 2026;

  const navLinks = [
    { label: tr.nav_about, href: "/#who-we-are" },
    { label: tr.nav_achievements, href: "/#achievements" },
    { label: tr.nav_projects, href: "/#projects" },
    { label: tr.nav_team, href: "/#team" },
  ];

  return (
    <footer className="border-t border-border">
      {/* ── Prominent quote block ─────────────────────────── */}
      <div
        className="w-full py-12 px-6 text-center bg-[#EFF6FF]"
      >
        <div
          className="font-display font-bold text-7xl md:text-8xl leading-none text-accent/20 select-none mb-2"
          aria-hidden="true"
        >
          &#8220;
        </div>
        <p className="font-display font-bold italic text-2xl md:text-3xl text-accent max-w-3xl mx-auto leading-snug">
          {tr.footer_quote}
        </p>
      </div>

      {/* ── Main footer grid ──────────────────────────────── */}
      <div className="bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <Link
                href="/"
                className="flex items-center gap-2 font-display font-semibold text-xl text-text mb-4"
              >
                <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
                  <Zap size={16} className="text-accent" />
                </div>
                {company.name}
              </Link>
              <p className="text-muted text-sm leading-relaxed max-w-xs">
                {company.tagline}.
              </p>
              <div className="flex items-center gap-2 mt-5 text-muted text-sm">
                <MapPin size={13} className="text-accent flex-shrink-0" />
                {company.location}
              </div>
              <div className="flex items-center gap-2 mt-2 text-muted text-sm">
                <Mail size={13} className="text-accent flex-shrink-0" />
                <a
                  href={`mailto:${company.email}`}
                  className="hover:text-accent transition-colors"
                >
                  {company.email}
                </a>
              </div>
              <div className="flex items-center gap-2 mt-2 text-muted text-sm">
                <Phone size={13} className="text-accent flex-shrink-0" />
                <a
                  href={`tel:${company.phone}`}
                  className="hover:text-accent transition-colors"
                >
                  {company.phone}
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-display font-semibold text-sm text-text uppercase tracking-wider mb-5">
                {tr.footer_navigate}
              </h4>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-muted text-sm hover:text-text transition-colors w-fit"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="font-display font-semibold text-sm text-text uppercase tracking-wider mb-5">
                {tr.footer_connect}
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href={company.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-muted text-sm hover:text-accent transition-colors w-fit"
                >
                  <LinkedinIcon size={15} />
                  LinkedIn
                </a>
                <a
                  href={company.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-muted text-sm hover:text-text transition-colors w-fit"
                >
                  <GithubIcon size={15} />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted text-xs">
              © {currentYear} {company.name}. {tr.footer_rights}.
            </p>
            <p className="text-muted/50 text-xs">
              {tr.footer_founded} {company.founded} · {company.location}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
