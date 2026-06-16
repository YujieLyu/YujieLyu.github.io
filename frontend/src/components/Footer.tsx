import { Github, Linkedin } from 'lucide-react'
import type { ProfileData } from '../types'

interface FooterProps {
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

export default function Footer({ data }: FooterProps) {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {data.socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              aria-label={link.platform}
            >
              {getSocialIcon(link.icon)}
            </a>
          ))}
        </div>

        {/* Logo */}
        <img src="/images/logo3.png" alt="Logo" className="h-8 w-8 opacity-60" />

        {/* Copyright */}
        <p className="text-sm text-gray-500 dark:text-gray-400 font-sans">
          &copy; 2024 All rights reserved
        </p>
      </div>
    </footer>
  )
}
