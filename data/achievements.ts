export interface Achievement {
  id: string;
  slug: string;
  title: string;
  date: string;
  shortDescription: string;
  fullDescription: string;
  logoUrl?: string;
  impact?: string;
}

export const achievements: Achievement[] = [
  {
    id: "1",
    slug: "teknofest-2025",
    title: "TEKNOFEST 2025",
    date: "2025",
    shortDescription:
      "Competed at TEKNOFEST — Turkey's largest technology and aviation festival.",
    fullDescription:
      "DaCy participated in TEKNOFEST 2025, one of the world's largest technology competitions held in Turkey. Our team presented an AI-integrated project and competed among hundreds of teams from across the region. TEKNOFEST brings together the brightest young minds in technology, aerospace, and innovation.",
    // Place logo images here: teknofest.png, idealise.png, amcham.png, accessbank.png
    logoUrl: "/images/logos/Tekno logo.png",
    impact:
      "International recognition at one of the world's largest tech competitions.",
  },
  {
    id: "2",
    slug: "idealise-1-2026",
    title: "Idealise 1 — 2026",
    date: "2026",
    shortDescription:
      "Selected at the first round of Idealise 2026 innovation competition.",
    fullDescription:
      "Idealise is a prestigious Azerbaijani innovation and startup competition organized under ADNSU. DaCy was selected among top teams in the first round of Idealise 2026, showcasing our AI-powered solutions to a panel of investors and industry experts.",
    logoUrl: "/images/logos/idealise.png",
    impact:
      "Recognition among top startups at Azerbaijan's leading innovation platform.",
  },
  {
    id: "3",
    slug: "idealise-2-2026",
    title: "Idealise 2 — 2026",
    date: "2026",
    shortDescription: "Advanced to the second round of Idealise 2026.",
    fullDescription:
      "Following success in the first round, DaCy advanced to the second stage of Idealise 2026, continuing to present and refine our AI-integrated projects before a wider audience of stakeholders and investors.",
    logoUrl: "/images/logos/idealise.png",
    impact:
      "Continued advancement demonstrating product maturity and team execution.",
  },
  {
    id: "4",
    slug: "amcham-hackathon",
    title: "AmCham Hackathon",
    date: "2026",
    shortDescription:
      "Participated in the American Chamber of Commerce Azerbaijan hackathon.",
    fullDescription:
      "DaCy competed in the AmCham Azerbaijan Hackathon, a business and technology challenge organized by the American Chamber of Commerce. Our team developed and presented an innovative AI solution within the competition timeframe.",
    logoUrl: "/images/logos/Amcham.png",
    impact:
      "Exposure to international business community and networking with global companies.",
  },
  {
    id: "5",
    slug: "access-bank-hackathon",
    title: "Access Bank Hackathon",
    date: "2026",
    shortDescription:
      "Built an AI-powered call center solution at Access Bank's hackathon.",
    fullDescription:
      "At the Access Bank Hackathon, DaCy developed an AI-driven call center and customer request management system with voice-to-text, emotion analysis, automatic routing, and a Telegram bot — all built and presented during the competition.",
    logoUrl: "/images/logos/accessbank.jpg",
    impact:
      "Demonstrated real-world fintech AI application in a competitive banking environment.",
  },
];
