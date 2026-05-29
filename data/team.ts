export interface TeamMember {
  id: string;
  slug?: string;
  name: string;
  role: string;
  bio?: string;
  photo?: string;
  linkedin?: string;
  github?: string;
}

export const team: TeamMember[] = [
  {
    id: "1",
    slug: "ziyad-ahmadzada",
    name: "Ziyad Ahmadzada",
    role: "Founder",
    bio: "Founder of DaCy. Data analyst, entrepreneur, and AI enthusiast driving the company's vision.",
    photo: "/images/team/ziyad.png",
    linkedin: "https://www.linkedin.com/in/ziyadahmadzada",
  },
  {
    id: "2",
    slug: "orkhan-yusifli",
    name: "Orkhan Yusifli",
    role: "CEO / AI Engineer",
    bio: "AI Engineer specializing in machine learning, NLP, and intelligent system design.",
    photo: "/images/team/orxan.jpg",
    linkedin: "https://www.linkedin.com/in/orkhanyusifli/",
  },
  {
    id: "3",
    slug: "oruc-safarzada",
    name: "Oruc Safarzada",
    role: "Co-Founder / Security & IT Expert",
    bio: "Cybersecurity and IT infrastructure specialist ensuring robust and secure systems.",
    photo: "/images/team/oruc.jpg",
    linkedin: "https://www.linkedin.com/in/oruc-seferzade/",
  },
];
