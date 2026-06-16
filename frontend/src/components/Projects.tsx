import { Github, Globe, ExternalLink, Play, Apple } from 'lucide-react'
import type { ProfileData } from '../types'

interface ProjectsProps {
  data: ProfileData
}

function getProjectIcon(icon: string) {
  switch (icon) {
    case 'github':
      return <Github className="w-4 h-4" />
    case 'globe':
      return <Globe className="w-4 h-4" />
    case 'external':
      return <ExternalLink className="w-4 h-4" />
    case 'play':
      return <Play className="w-4 h-4" />
    case 'apple':
      return <Apple className="w-4 h-4" />
    default:
      return <ExternalLink className="w-4 h-4" />
  }
}

export default function Projects({ data }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#242526]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-50 dark:bg-[#18191a] rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 flex flex-col transition-transform hover:scale-[1.02]"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-sans rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-display text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-sans leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={link.label}
                      className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-colors"
                    >
                      {getProjectIcon(link.icon)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
