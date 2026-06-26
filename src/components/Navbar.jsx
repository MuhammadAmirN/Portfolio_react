import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Moon, Sun } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Beranda', href: '#home' },
  { label: 'Tentang', href: '#about' },
  { label: 'Skill', href: '#skills' },
  { label: 'Proyek', href: '#projects' },
  { label: 'Kontak', href: '#contact' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const onHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkTo = (href) => (onHome ? href : `/${href}`)

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/70 bg-white/80 backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/80'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          to="/"
          className="font-display text-lg font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          <span className="text-brand-600 dark:text-brand-400">{'<'}</span>
          Portfolio
          <span className="text-brand-600 dark:text-brand-400">{' />'}</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={linkTo(l.href)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-brand-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-brand-300"
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/cv"
            className="ml-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-brand-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-brand-300"
          >
            CV
          </Link>
          <button
            onClick={toggleTheme}
            aria-label="Ganti tema"
            className="ml-2 rounded-lg border border-slate-200 p-2 text-slate-600 transition hover:text-brand-600 dark:border-slate-700 dark:text-slate-300 dark:hover:text-brand-300"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Ganti tema"
            className="rounded-lg border border-slate-200 p-2 text-slate-600 dark:border-slate-700 dark:text-slate-300"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Buka menu"
            className="rounded-lg border border-slate-200 p-2 text-slate-600 dark:border-slate-700 dark:text-slate-300"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 pb-4 md:hidden dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={linkTo(l.href)}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                {l.label}
              </a>
            ))}
            <Link
              to="/cv"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              CV
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
