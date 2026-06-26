import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="mx-auto mb-12 max-w-2xl text-center"
    >
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-700 dark:bg-brand-500/15 dark:text-brand-300">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-slate-600 dark:text-slate-400">{description}</p>
      )}
    </motion.div>
  )
}
