import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import type { ProfileData } from '../types'

interface ExperienceProps {
  data: ProfileData
}

export default function Experience({ data }: ExperienceProps) {
  const [activeTab, setActiveTab] = useState(0)
  const experience = data.experiences[activeTab]

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#242526]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Experience
        </h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          {/* Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l-2 border-gray-200 dark:border-gray-700 shrink-0">
            {data.experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                title={exp.tooltip}
                className={`px-4 py-3 text-sm font-sans whitespace-nowrap text-left transition-colors ${
                  activeTab === index
                    ? 'text-blue-500 border-b-2 md:border-b-0 md:border-l-2 border-blue-500 md:-ml-[2px] bg-blue-50 dark:bg-blue-500/10'
                    : 'text-gray-500 dark:text-gray-400 hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-xl font-semibold text-gray-900 dark:text-white">
              {experience.role}{' '}
              {experience.companyUrl ? (
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  @ {experience.company}
                </a>
              ) : (
                <span className="text-blue-500">@ {experience.company}</span>
              )}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-sans mt-1 mb-4">
              {experience.period}
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-sans leading-relaxed mb-4">
              {experience.description}
            </p>
            {experience.bullets.length > 0 && (
              <ul className="space-y-2">
                {experience.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm text-gray-600 dark:text-gray-400 font-sans"
                  >
                    <span className="text-blue-500 mt-1 flex-shrink-0">
                      &#9654;
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
            {experience.projectUrl && (
              <a
                href={experience.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-lg bg-blue-500 text-white text-sm font-sans hover:bg-blue-600 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                {experience.projectLabel || 'View the project'}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
