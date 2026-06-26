import { Mail, Globe } from 'lucide-react'
import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterIcon } from './BrandIcons'
import { socials } from '../data/portfolioData'

const ICONS = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  mail: Mail,
  globe: Globe,
}

export default function SocialLinks({ className = '', iconClassName = 'h-5 w-5' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map((s) => {
        const Icon = ICONS[s.icon] ?? Globe
        return (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={s.name}
            title={s.name}
            className="rounded-full border border-slate-200 bg-white/70 p-2.5 text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300 dark:hover:border-brand-400 dark:hover:text-brand-300"
          >
            <Icon className={iconClassName} />
          </a>
        )
      })}
    </div>
  )
}
