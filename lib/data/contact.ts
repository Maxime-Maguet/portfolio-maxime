export const contactLinks = {
  email: 'maxime.maguet@gmail.com',
  tel: '06 30 77 27 56',
  telHref: 'tel:0630772756',
  github: 'github.com/Maxime-Maguet',
  githubHref: 'https://github.com/Maxime-Maguet',
  linkedin: 'maximemaguet-dev',
  linkedinHref: 'https://linkedin.com/in/maximemaguet-dev',
} as const

export const contactCells = [
  { label: 'Email',     value: contactLinks.email,    href: `mailto:${contactLinks.email}` },
  { label: 'Téléphone', value: contactLinks.tel,       href: contactLinks.telHref },
  { label: 'GitHub',    value: contactLinks.github,    href: contactLinks.githubHref },
  { label: 'LinkedIn',  value: contactLinks.linkedin,  href: contactLinks.linkedinHref },
] as const
