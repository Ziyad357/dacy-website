"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, Trophy, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/translations";
import { Achievement } from "@/data/achievements";
import LogoDisplay from "./LogoDisplay";

interface Props {
  achievement: Achievement;
}

export default function AchievementDetailClient({ achievement }: Props) {
  const { lang } = useLanguage();
  const tr = t[lang];

  return (
    <main className="min-h-screen bg-background pt-24 pb-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <Link
          href="/#achievements"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-text transition-colors mb-10 group"
        >
          <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
          {tr.back_achievements}
        </Link>

        <div className="flex items-center justify-center w-full h-44 rounded-2xl border border-border bg-surface mb-10 overflow-hidden">
          <LogoDisplay
            src={achievement.logoUrl ?? ""}
            alt={`${achievement.title} logo`}
            fallbackLabel={achievement.title}
            maxHeight={110}
          />
        </div>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
            <Trophy size={18} className="text-accent" />
          </div>
          <div className="flex items-center gap-2 text-sm text-muted">
            <Calendar size={13} />
            {achievement.date}
          </div>
        </div>

        <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-text leading-tight mb-6">
          {achievement.title}
        </h1>

        <p className="text-muted text-lg leading-relaxed mb-8 border-l-2 border-accent pl-5">
          {achievement.shortDescription}
        </p>

        <div className="prose-custom">
          <p className="text-text/80 text-base leading-relaxed mb-10 whitespace-pre-line">
            {achievement.fullDescription}
          </p>
        </div>

        {achievement.impact && (
          <div className="mt-8 p-6 rounded-2xl border border-accent/20 bg-accent/5">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={16} className="text-accent" />
              <h2 className="font-display font-semibold text-sm text-accent uppercase tracking-wider">
                {tr.impact_heading}
              </h2>
            </div>
            <p className="text-text/80 text-base leading-relaxed">
              {achievement.impact}
            </p>
          </div>
        )}

        <div className="mt-14 pt-10 border-t border-border">
          <Link
            href="/#achievements"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-text text-sm font-medium hover:border-accent/40 hover:bg-surface transition-all group"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
            {tr.back_achievements}
          </Link>
        </div>
      </div>
    </main>
  );
}
