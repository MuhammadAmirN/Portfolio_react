import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, FileText, MapPin } from 'lucide-react'
import { profile } from '../data/portfolioData'
import SocialLinks from './SocialLinks'

function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('')
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    if (profile.roles.length < 2) return
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % profile.roles.length),
      2600,
    )
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24 pb-16"
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-blob absolute -left-20 top-10 h-72 w-72 rounded-full bg-brand-300/40 blur-3xl dark:bg-brand-600/20" />
        <div className="animate-blob absolute right-0 top-1/3 h-80 w-80 rounded-full bg-fuchsia-300/40 blur-3xl dark:bg-fuchsia-600/20 [animation-delay:3s]" />
        <div className="animate-blob absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky-300/40 blur-3xl dark:bg-sky-600/20 [animation-delay:6s]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {profile.available && (
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/60 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Tersedia untuk magang
            </span>
          )}

          <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Halo, saya{' '}
            <span className="bg-gradient-to-r from-brand-600 to-fuchsia-500 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>

          <div className="mt-3 h-9 text-xl font-semibold text-slate-700 sm:text-2xl dark:text-slate-200">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-block"
            >
              {profile.roles[roleIndex]}
            </motion.span>
          </div>

          <p className="mt-5 max-w-md text-base text-slate-600 dark:text-slate-400">
            {profile.tagline}
          </p>

          <div className="mt-6 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
            <MapPin className="h-4 w-4" /> {profile.location}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:-translate-y-0.5 hover:bg-brand-700"
            >
              Lihat Proyek <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/cv"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:text-brand-300"
            >
              <FileText className="h-4 w-4" /> Lihat CV
            </Link>
          </div>

          <SocialLinks className="mt-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-brand-500 to-fuchsia-500 opacity-30 blur-2xl" />
            <div className="relative grid h-60 w-60 place-items-center overflow-hidden rounded-full border-4 border-white bg-gradient-to-br from-brand-500 to-fuchsia-500 shadow-2xl sm:h-72 sm:w-72 dark:border-slate-800">
              {profile.avatar ? (
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="font-display text-6xl font-extrabold text-white sm:text-7xl">
                  {initials(profile.name)}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
