export type ProjectLink = {
  label: string;
  href: string;
  variant: "primary" | "ghost";
};

export type Project = {
  id: string;
  status: "live" | "wip";
  statusLabel: string;
  name: string;
  tagline: string;
  desc: string;
  tech: readonly string[];
  links: readonly ProjectLink[];
  screenshot?: string;
  screenshotType?: "browser" | "mobile";
  video?: string;
  videoPoster?: string;
  reverse?: boolean;
};

export const projets: Project[] = [
  {
    id: "astrodex",
    status: "live",
    statusLabel: "MVP déployé · Android",
    name: "Astrodex",
    tagline: "// application mobile d'astronomie",
    desc: "Boussole GPS interactive pour localiser les astres en temps réel. Intégration NASA APOD et OpenWeather, authentification JWT, upload Cloudinary. Lead Tech sur une équipe de 5.",
    tech: ["React Native", "Node.js", "MongoDB", "Redux Persist", "Expo EAS"],
    links: [
      {
        label: "GitHub →",
        href: "https://github.com/Maxime-Maguet/astrodex-frontend",
        variant: "primary",
      },
      {
        label: "APK Android",
        href: "https://github.com/Maxime-Maguet/astrodex-frontend/releases/tag/v1.0.0",
        variant: "ghost",
      },
    ],
    video: "/videos/astrodex_final.mp4",
    videoPoster: "/images/astrodex_picture.png",
  },
  {
    id: "respawn",
    status: "live",
    statusLabel: "Déployé en production",
    name: "Respawn",
    tagline: "// hub gaming personnel",
    desc: "Bibliothèque de jeux et découverte par tendances et nouvelles sorties. Architecture fullstack web complète. Intégration RAWG API, recherche temps réel, gestion de bibliothèque CRUD.",
    tech: [
      "React/Vite",
      "Tailwind v4",
      "shadcn/ui",
      "TanStack Query",
      "MongoDB Atlas",
    ],
    links: [
      {
        label: "GitHub →",
        href: "https://github.com/Maxime-Maguet/respawn-backend",
        variant: "primary",
      },
      {
        label: "Démo live",
        href: "https://respawn-frontend-roan.vercel.app/home",
        variant: "ghost",
      },
    ],
    screenshot: "/images/respawn-homescreen.png",
    reverse: true,
  },
  {
    id: "camille-ad",
    status: "wip",
    statusLabel: "Déployé en production",
    name: "Camille.AD",
    tagline: "// site vitrine · assistante de direction freelance",
    desc: "Site vitrine B2B pour une assistante de direction freelance à Toulouse. Ciblé TPE/PME du secteur propreté/services. 3 pôles : Administration & RH, Comptabilité, Accompagnement IA. Formulaire de contact via Server Actions + Resend.",
    tech: [
      "Next.js 16",
      "TypeScript",
      "Tailwind v4",
      "shadcn/ui",
      "Framer Motion",
      "Resend",
    ],
    links: [
      {
        label: "GitHub →",
        href: "https://github.com/Maxime-Maguet/camille-ad",
        variant: "primary",
      },
    ],
    screenshot: "/images/Camille_AD_screenshot.png",
  },
];
