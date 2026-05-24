"use client";

import ScrollReveal from "./ScrollReveal";
import { company } from "@/data/company";
import { Brain, ShieldCheck, Lightbulb } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/translations";

export default function WhoWeAre() {
  const { lang } = useLanguage();
  const tr = t[lang];

  const stats = [
    { value: "2025", label: tr.stat_founded },
    { value: "4+", label: tr.stat_projects },
    { value: "5", label: tr.stat_competitions },
    { value: "AZ", label: tr.stat_based },
  ];

  const pillars = [
    { icon: Brain, title: tr.pillar1_title, description: tr.pillar1_desc },
    { icon: ShieldCheck, title: tr.pillar2_title, description: tr.pillar2_desc },
    { icon: Lightbulb, title: tr.pillar3_title, description: tr.pillar3_desc },
  ];

  return (
    <section id="who-we-are" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <ScrollReveal>
              <span className="text-xs font-medium tracking-widest text-accent uppercase">
                {tr.about_label}
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-text mt-3 mb-6 leading-tight">
                {tr.about_sub_line1}
                <br />
                <span className="gradient-text">{tr.about_sub_line2}</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-muted text-base leading-relaxed mb-6">
                {tr.about_text}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.28}>
              <div className="p-5 rounded-xl border border-accent/20 bg-accent/5">
                <p className="text-text/80 text-base leading-relaxed italic">
                  &ldquo;{company.mission}&rdquo;
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.36}>
              <div className="grid grid-cols-4 gap-6 mt-10">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-display font-bold text-2xl text-accent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="flex flex-col gap-5">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={0.1 * (i + 1)}>
                <div className="group flex gap-5 p-6 rounded-2xl bg-surface-2 border border-border card-hover">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <pillar.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-base text-text mb-1.5">
                      {pillar.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
