import { notFound } from "next/navigation";
import { achievements } from "@/data/achievements";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AchievementDetailClient from "@/components/AchievementDetailClient";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return achievements.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const achievement = achievements.find((a) => a.slug === params.slug);
  if (!achievement) return {};
  return {
    title: `${achievement.title} — DaCy`,
    description: achievement.shortDescription,
  };
}

export default function AchievementDetailPage({ params }: Props) {
  const achievement = achievements.find((a) => a.slug === params.slug);
  if (!achievement) notFound();

  return (
    <>
      <Navbar />
      <AchievementDetailClient achievement={achievement} />
      <Footer />
    </>
  );
}
