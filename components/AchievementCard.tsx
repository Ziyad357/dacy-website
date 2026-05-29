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
        {/* Logo container: white bg, rounded-xl, 200px height, padding 20px */}
        <div className="flex items-center justify-center h-[200px] bg-white rounded-xl mx-4 mt-4 px-5 border-b border-gray-200">
          {hasLogo ? (
            <img
              src={achievement.logoUrl}
              alt={`${achievement.title} logo`}
              style={{ maxHeight: "160px", maxWidth: "90%", objectFit: "contain" }}
              className="transition-transform duration-500 group-hover:scale-105"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl">
              <span className="text-white font-display font-bold text-xl text-center px-4 leading-tight">
                {achievement.title}
              </span>
            </div>
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
