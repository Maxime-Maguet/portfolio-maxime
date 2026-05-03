export const heroMeta = [
  { label: 'Localisation', value: 'Toulouse, France' },
  { label: 'Contrat',      value: 'Pro · 100% OPCO'  },
  { label: 'Démarrage',    value: 'Septembre 2026'    },
] as const

export const cardStats = [
  { num: '10', suffix: 'y', label: '// systems'      },
  { num: '2',  suffix: '',  label: '// projets prod'  },
] as const

export const cardRows = [
  { label: 'stack',     value: 'React · Node · Mongo', accent: false },
  { label: 'specialty', value: 'DevOps',               accent: false },
  { label: 'status',    value: '● Disponible',         accent: true  },
  { label: 'languages', value: 'FR · EN',              accent: false },
] as const
