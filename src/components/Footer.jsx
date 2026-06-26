import { profile } from '../data/portfolioData'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="no-print border-t border-slate-200 bg-white px-5 py-10 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg font-bold text-slate-900 dark:text-white">
            {profile.name}
          </p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} — Dibuat dengan React & Tailwind CSS.
          </p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  )
}
