"use client";

import ScrollReveal from "./ScrollReveal";
import TeamCard from "./TeamCard";
import { team } from "@/data/team";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/translations";

export default function Team() {
  const { lang } = useLanguage();
  const tr = t[lang];
  return (
    <section id="team" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-4">
            <span className="text-xs font-medium tracking-widest text-accent uppercase">
              {tr.team_label}
            </span>
          </div>
        </ScrollReveal>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <ScrollReveal delay={0.1}>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-text leading-tight">
              {tr.team_heading}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-muted text-base max-w-xs sm:text-right leading-relaxed">
              {tr.team_sub}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((member, index) => (
            <ScrollReveal key={member.id} delay={index * 0.08}>
              <TeamCard member={member} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
