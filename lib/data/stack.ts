export type StackItem = {
  name: string
  status: 'ok' | 'wip'
  label: string
}

export type StackCategory = {
  id: string
  title: string
  items: StackItem[]
}

export const stack: StackCategory[] = [
  {
    id: 'frontend',
    title: '// Frontend',
    items: [
      { name: 'React',          status: 'ok',  label: 'Confirmé' },
      { name: 'React Native',   status: 'ok',  label: 'Confirmé' },
      { name: 'Next.js',        status: 'ok',  label: 'Confirmé' },
      { name: 'Redux · TanStack', status: 'ok', label: 'Confirmé' },
      { name: 'Tailwind v4',    status: 'ok',  label: 'Confirmé' },
    ],
  },
  {
    id: 'backend',
    title: '// Backend',
    items: [
      { name: 'Node.js',            status: 'ok', label: 'Confirmé' },
      { name: 'Express',            status: 'ok', label: 'Confirmé' },
      { name: 'MongoDB · Mongoose', status: 'ok', label: 'Confirmé' },
      { name: 'JWT Auth',           status: 'ok', label: 'Confirmé' },
      { name: 'REST APIs',          status: 'ok', label: 'Confirmé' },
    ],
  },
  {
    id: 'devops',
    title: '// DevOps · Outils',
    items: [
      { name: 'Git · GitHub',    status: 'ok',  label: 'Confirmé' },
      { name: 'Expo EAS',        status: 'ok',  label: 'Confirmé' },
      { name: 'Docker',          status: 'wip', label: 'En cours' },
      { name: 'CI/CD pipelines', status: 'wip', label: 'En cours' },
      { name: 'Kubernetes',      status: 'wip', label: 'En cours' },
    ],
  },
]
