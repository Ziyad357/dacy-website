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
      <article className="relative h-full rounded-2xl border border-border bg-surface-2 overflow-hidden card-hover cursor-pointer">

        {/* Logo / placeholder header */}
        <div className="flex items-center justify-center h-28 border-b border-border bg-surface px-6">
          {hasLogo ? (
            <img
              src={achievement.logoUrl}
              alt={`${achievement.title} logo`}
              style={{ maxHeight: "64px", objectFit: "contain", maxWidth: "100%" }}
              className="transition-transform duration-500 group-hover:scale-105"
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className="px-4 py-2 rounded-full border-2 border-accent/40 bg-accent/5 text-accent text-sm font-bold text-center leading-tight max-w-[200px]">
              {achievement.title}
            </span>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-center gap-1.5 text-xs text-muted mb-3">
            <Calendar size={11} />
            {achievement.date}
          </div>

          <h3 className="font-display font-semibold text-base text-text leading-snug group-hover:text-accent transition-colors mb-2">
            {achievement.title}
          </h3>

          <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">
            {achievement.shortDescription}
          </p>

          <div className="flex items-center gap-1.5 text-accent text-xs font-medium group-hover:gap-2.5 transition-all">
            {tr.read_more}
            <ArrowRight size={13} />
          </div>
        </div>
      </article>
    </Link>
  );
}
