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
      { name: "React", status: "ok", label: "Maîtrisé" },
      { name: "React Native", status: "ok", label: "Maîtrisé" },
      { name: "Next.js", status: "ok", label: "Maîtrisé" },
      { name: "Redux · TanStack", status: "ok", label: "Maîtrisé" },
      { name: "Tailwind v4", status: "ok", label: "Maîtrisé" },
    ],
  },

  {
    id: "backend",
    title: "// Backend",
    items: [
      { name: "Node.js", status: "ok", label: "Maîtrisé" },
      { name: "Express", status: "ok", label: "Maîtrisé" },
      { name: "MongoDB · Mongoose", status: "ok", label: "Maîtrisé" },
      { name: "JWT Auth", status: "ok", label: "Maîtrisé" },
      { name: "REST APIs", status: "ok", label: "Maîtrisé" },
    ],
  },

  {
    id: "devops",
    title: "// DevOps · Outils",
    items: [
      { name: "Git · GitHub", status: "ok", label: "Maîtrisé" },
      { name: "Docker", status: "wip", label: "En cours" },
      { name: "CI/CD", status: "wip", label: "En cours" },
      { name: "Kubernetes", status: "wip", label: "En cours" },
      { name: "Expo EAS", status: "ok", label: "Maîtrisé" },
    ],
  },
];
