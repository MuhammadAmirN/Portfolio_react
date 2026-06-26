import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Download, Mail, MapPin, Phone, Globe } from 'lucide-react'
import { profile, socials, skills, cv } from '../data/portfolioData'

export default function CV() {
  useEffect(() => {
    document.title = `CV — ${profile.name}`
  }, [])

  const handleDownload = () => window.print()

  return (
    <div className="min-h-screen bg-slate-100 py-10 dark:bg-slate-950">
      {/* Action bar */}
      <div className="no-print mx-auto mb-6 flex max-w-3xl items-center justify-between px-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
        >
          <ArrowLeft className="h-4 w-4" /> Kembali
        </Link>
        <button
          onClick={handleDownload}
          className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700"
        >
          <Download className="h-4 w-4" /> Download PDF
        </button>
      </div>

      {/* CV sheet (A4-ish) */}
      <article className="print-container mx-auto max-w-3xl bg-white px-10 py-10 text-slate-800 shadow-xl">
        {/* Header */}
        <header className="border-b-2 border-brand-600 pb-5">
          <h1 className="font-display text-3xl font-extrabold text-slate-900">{profile.name}</h1>
          <p className="mt-1 text-lg font-medium text-brand-700">{profile.roles.join(' · ')}</p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-600">
            <span className="inline-flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5" /> {profile.email}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5" /> {profile.phone}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> {profile.location}
            </span>
            {socials
              .filter((s) => s.icon !== 'mail')
              .map((s) => (
                <span key={s.name} className="inline-flex items-center gap-1.5">
                  <Globe className="h-3.5 w-3.5" /> {s.url.replace(/^https?:\/\//, '')}
                </span>
              ))}
          </div>
        </header>

        {/* Summary */}
        <Section title="Ringkasan">
          <p className="text-sm leading-relaxed text-slate-700">{cv.summary}</p>
        </Section>

        {/* Education */}
        <Section title="Pendidikan">
          <div className="space-y-4">
            {cv.education.map((e, i) => (
              <div key={i}>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-semibold text-slate-900">{e.school}</h3>
                  <span className="shrink-0 text-xs font-medium text-slate-500">{e.period}</span>
                </div>
                <p className="text-sm text-brand-700">{e.degree}</p>
                {e.detail && <p className="mt-1 text-sm text-slate-600">{e.detail}</p>}
              </div>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section title="Pengalaman & Organisasi">
          <div className="space-y-4">
            {cv.experience.map((x, i) => (
              <div key={i}>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-semibold text-slate-900">
                    {x.role} <span className="font-normal text-slate-600">· {x.company}</span>
                  </h3>
                  <span className="shrink-0 text-xs font-medium text-slate-500">{x.period}</span>
                </div>
                <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm text-slate-700">
                  {x.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section title="Keahlian">
          <div className="grid gap-2 sm:grid-cols-3">
            {skills.map((g) => (
              <div key={g.category}>
                <p className="text-sm font-semibold text-slate-900">{g.category}</p>
                <p className="text-sm text-slate-600">{g.items.join(', ')}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Certifications + Languages */}
        <div className="grid gap-6 sm:grid-cols-2">
          <Section title="Sertifikat">
            <ul className="space-y-1.5 text-sm text-slate-700">
              {cv.certifications.map((c, i) => (
                <li key={i}>
                  <span className="font-medium text-slate-900">{c.name}</span> — {c.issuer}{' '}
                  <span className="text-slate-500">({c.year})</span>
                </li>
              ))}
            </ul>
          </Section>
          <Section title="Bahasa">
            <ul className="space-y-1.5 text-sm text-slate-700">
              {cv.languages.map((l, i) => (
                <li key={i}>
                  <span className="font-medium text-slate-900">{l.name}</span> — {l.level}
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </article>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <section className="mt-6">
      <h2 className="mb-3 font-display text-sm font-bold uppercase tracking-widest text-brand-700">
        {title}
      </h2>
      {children}
    </section>
  )
}
