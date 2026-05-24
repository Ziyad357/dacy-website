"use client";

import ScrollReveal from "./ScrollReveal";
import AchievementCard from "./AchievementCard";
import { achievements } from "@/data/achievements";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/translations";

export default function Achievements() {
  const { lang } = useLanguage();
  const tr = t[lang];

  return (
    <section id="achievements" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-4">
            <span className="text-xs font-medium tracking-widest text-accent uppercase">
              {tr.achievements_label}
            </span>
          </div>
        </ScrollReveal>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <ScrollReveal delay={0.1}>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-text leading-tight">
              {tr.achievements_heading}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-muted text-base max-w-xs sm:text-right leading-relaxed">
              {tr.achievements_sub}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <ScrollReveal key={achievement.id} delay={index * 0.1}>
              <AchievementCard achievement={achievement} index={index} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
