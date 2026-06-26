import { motion } from 'framer-motion'
import { Code2, Palette, Rocket } from 'lucide-react'
import { profile } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: 'Clean Code',
    text: 'Menulis kode yang rapi, terstruktur, dan mudah dikelola dengan React.',
  },
  {
    icon: Palette,
    title: 'Desain Rapi',
    text: 'Memperhatikan detail visual, tipografi, dan pengalaman pengguna.',
  },
  {
    icon: Rocket,
    title: 'Cepat Belajar',
    text: 'Antusias mempelajari teknologi & tools baru untuk berkembang.',
  },
]

export default function About() {
  return (
    <section id="about" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Tentang Saya"
          title="Sedikit tentang saya"
          description={profile.about}
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {HIGHLIGHTS.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-xl bg-brand-100 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
                <h.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                {h.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{h.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
