export type StackItem = {
  name: string;
  status: "ok" | "wip";
  label: string;
};

export type StackCategory = {
  id: string;
  title: string;
  items: StackItem[];
};

export const stack: StackCategory[] = [
  {
    id: "frontend",
    title: "// Frontend",
    items: [
      { name: "React", status: "ok", label: "Pratique" },
      { name: "React Native", status: "ok", label: "Pratique" },
      { name: "Next.js", status: "ok", label: "Pratique" },
      { name: "TypeScript", status: "ok", label: "Pratique" },
      { name: "Tailwind v4", status: "ok", label: "Pratique" },
    ],
  },

  {
    id: "backend",
    title: "// Backend",
    items: [
      { name: "Node.js", status: "ok", label: "Pratique" },
      { name: "Express", status: "ok", label: "Pratique" },
      { name: "MongoDB · Mongoose", status: "ok", label: "Pratique" },
      { name: "NestJS", status: "wip", label: "En cours" },
      { name: "Prisma · PostgreSQL", status: "wip", label: "En cours" },
    ],
  },

  {
    id: "devops",
    title: "// DevOps · Outils",
    items: [
      { name: "Git · GitHub", status: "ok", label: "Pratique" },
      { name: "Docker", status: "wip", label: "En cours" },
      { name: "CI/CD", status: "wip", label: "En cours" },
      { name: "Vercel", status: "ok", label: "Pratique" },
      { name: "Expo EAS", status: "ok", label: "Pratique" },
    ],
  },
];
