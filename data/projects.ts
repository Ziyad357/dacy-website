export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  presentationUrl?: string;
  images?: string[];
  investor?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "smart-glasses",
    title: "AI Smart Glasses for the Visually Impaired",
    shortDescription:
      "An AI-powered assistive system helping visually impaired people navigate independently using computer vision and audio feedback.",
    fullDescription: `This project aims to solve the daily navigation challenges faced by blind and visually impaired individuals. The problem is global in scale — 43 million blind and 295 million visually impaired people worldwide — but the project will initially be deployed locally.

In the first phase, the project operates as a mobile application. The user holds the phone on their chest using a special holder, and the app uses the phone's camera to analyze obstacles, direction, and nearby objects in real time. The system communicates this information through earphones via audio feedback, enabling visually impaired individuals to move independently.

In the next phase, this system will be integrated into smart glasses. Cameras and microphones embedded in the glasses will eliminate the need to hold a phone, delivering information in a more comfortable, safe, and aesthetic form.

The integrated mobile app will also allow parents and family members to track the user and provide support in emergencies.

Current alternatives are mostly limited to white canes and basic reading devices. Our solution is an AI-powered smart glasses system built on artificial intelligence, sensor technology, computer vision, and GPS. It provides the user with real-time information about their location, direction, obstacles, and approaching people through earphones. Additionally, family members can track the user via mobile app and offer support in emergencies — a major advantage over existing alternatives in both safety and social integration. 

The Project belongs to Ziyad Ahmadzada`,
    techStack: [
      "Computer Vision",
      "Python",
      "React Native",
      "OpenCV",
      "GPS",
      "Text-to-Speech",
      "IoT",
    ],
    githubUrl: "",
    demoUrl: "",
    presentationUrl: "",
    images: ["/images/logos/glass.png"],
  },
  {
    id: "2",
    slug: "ai-call-center",
    title: "AI Call Center & Telegram Bot",
    shortDescription:
      "An intelligent AI-powered call center and customer request management system with emotion analysis and smart routing.",
    fullDescription: `This project is an AI-supported smart call center and customer request management system. The system accepts user requests in both text and voice formats, converts speech to text, analyzes the emotion behind the message, and automatically routes the request to the appropriate department.

Through the operator panel, all requests are tracked, prioritized, and managed. Critical and negatively emotional requests are automatically highlighted by the system. The project also includes a Telegram notification and daily report feature.

The system performs statistical analysis to help improve service quality over time. The platform has a modern, scalable architecture that can be integrated with mobile applications.

The Project belongs to Ziyad Ahmadzada`,
    techStack: [
      "Python",
      "FastAPI",
      "OpenAI",
      "Whisper",
      "Telegram Bot API",
      "PostgreSQL",
      "React",
    ],
    githubUrl: "https://github.com/Ziyad357/accessbank-agent",
    demoUrl: "",
    presentationUrl: "",
    images: ["/images/logos/ai.png"],
  },
  {
    id: "3",
    slug: "rent-a-car",
    title: "Rent A Car System",
    shortDescription:
      "A full-stack car rental management platform built for modern rental businesses. The Project belongs to Ziyad Ahmadzada",

    fullDescription:
      "DaCy's Rent A Car system is a comprehensive car rental management platform. It enables businesses to manage their vehicle fleet, handle customer bookings, track rentals, and streamline operations through a clean and modern interface.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Node.js"],
    githubUrl: "https://github.com/Ziyad357/dacy_rent_a_car",
    demoUrl: "",
    presentationUrl: "",
    images: ["/images/logos/rentacar.png"],
  },
  {
    id: "4",
    slug: "bizsim",
    title: "BizSim — AI Business Simulator",
    shortDescription:
      "An AI-integrated business simulation platform that lets users run virtual companies and make strategic decisions in realistic market scenarios.",
    fullDescription: `BizSim is an AI-powered business simulation platform designed to help users develop entrepreneurial thinking and strategic decision-making skills by running a virtual company in realistic market conditions.

Users manage all aspects of a simulated business — from pricing and production to marketing and financial planning — while competing against AI-driven market forces. The AI engine adapts to user decisions, creating dynamic and unpredictable market scenarios that mirror real-world business challenges.

BizSim is backed by Xmind, a leading technology company, which serves as the platform's investor — validating the product's commercial potential and technical foundation.

The Project belongs to Orkhan Yusifli`,
    techStack: [
      "React",
      "Node.js",
      "OpenAI",
      "PostgreSQL",
      "Python",
      "Tailwind CSS",
    ],
    githubUrl: "",
    demoUrl: "",
    presentationUrl: "",
    images: ["/images/logos/bizsim.png"],
    investor: "Xmind",
  },
];
