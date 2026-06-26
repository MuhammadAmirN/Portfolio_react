import { motion } from 'framer-motion'
import { skills } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 px-5 py-24 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Keahlian"
          title="Skill & Tools"
          description="Teknologi dan tools yang saya gunakan untuk membangun produk digital."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-brand-50 px-3 py-1.5 text-sm font-medium text-brand-700 ring-1 ring-brand-100 dark:bg-brand-500/10 dark:text-brand-300 dark:ring-brand-500/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
