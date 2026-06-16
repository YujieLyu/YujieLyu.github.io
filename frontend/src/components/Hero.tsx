import { Github, Linkedin } from 'lucide-react'
import type { ProfileData } from '../types'

interface HeroProps {
  data: ProfileData
}

function getSocialIcon(icon: string) {
  switch (icon) {
    case 'github':
      return <Github className="w-5 h-5" />
    case 'linkedin':
      return <Linkedin className="w-5 h-5" />
    default:
      return null
  }
}

export default function Hero({ data }: HeroProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        {/* Left content */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-blue-500 font-serif italic text-lg mb-2">
            {data.subtitle}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            {data.nickname}.
          </h1>
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 mb-6">
            {data.tagline}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-sans leading-relaxed max-w-lg mx-auto md:mx-0 mb-8">
            {data.heroDescription}
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4">
            {data.socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:text-blue-500 hover:border-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400 transition-colors"
                aria-label={link.platform}
              >
                {getSocialIcon(link.icon)}
              </a>
            ))}
          </div>
        </div>

        {/* Right avatar */}
        <div className="flex-shrink-0">
          <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-xl">
            <img
              src={data.avatarUrl}
              alt={data.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
