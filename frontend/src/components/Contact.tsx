import { Mail } from 'lucide-react'
import type { ProfileData } from '../types'

interface ContactProps {
  data: ProfileData
}

export default function Contact({ data }: ContactProps) {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#242526]"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Get in Touch
        </h2>
        <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-500 inline-block mb-6">
          <Mail className="w-8 h-8" />
        </div>
        <p className="text-gray-600 dark:text-gray-400 font-sans text-lg leading-relaxed">
          {data.contactText}{' '}
          <a
            href={data.contactLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline font-semibold"
          >
            {data.contactLink.label}
          </a>
          .
        </p>
      </div>
    </section>
  )
}
