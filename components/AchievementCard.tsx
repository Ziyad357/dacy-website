"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Achievement } from "@/data/achievements";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/translations";

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

export default function AchievementCard({ achievement }: AchievementCardProps) {
  const [logoError, setLogoError] = useState(false);
  const hasLogo = !!achievement.logoUrl && !logoError;
  const { lang } = useLanguage();
  const tr = t[lang];

  return (
    <Link href={`/achievements/${achievement.slug}`} className="group block">
      <article className="relative h-full rounded-2xl border border-border bg-surface-2 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col">
        {/* Large logo area */}
        <div className="flex items-center justify-center h-[200px] bg-surface px-6 border-b border-border">
          {hasLogo ? (
            <img
              src={achievement.logoUrl}
              alt={`${achievement.title} logo`}
              style={{ maxHeight: "180px", objectFit: "contain", maxWidth: "100%" }}
              className="transition-transform duration-500 group-hover:scale-105"
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className="px-6 py-3 rounded-full border-2 border-accent/40 bg-accent/5 text-accent text-base font-bold text-center leading-tight max-w-[280px]">
              {achievement.title}
            </span>
          )}
        </div>

        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-1.5 text-xs text-muted mb-3">
            <Calendar size={11} />
            {achievement.date}
          </div>

          <h3 className="font-display font-bold text-lg text-text leading-snug group-hover:text-accent transition-colors mb-2">
            {achievement.title}
          </h3>

          <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
            {achievement.shortDescription}
          </p>

          <div className="flex items-center gap-1.5 text-accent text-xs font-medium group-hover:gap-2.5 transition-all mt-auto">
            {tr.read_more}
            <ArrowRight size={13} />
          </div>
        </div>
      </article>
    </Link>
  );
}
