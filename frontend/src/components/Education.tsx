import { GraduationCap } from 'lucide-react'
import type { ProfileData } from '../types'

interface EducationProps {
  data: ProfileData
}

export default function Education({ data }: EducationProps) {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Education
        </h2>

        <div className="space-y-6">
          {data.education.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#242526] rounded-xl shadow-md p-6 md:p-8 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-500 flex-shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <a
                    href={edu.institutionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline text-sm font-sans"
                  >
                    {edu.institution}
                  </a>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-sans mt-1">
                    {edu.period}
                  </p>
                  {edu.details.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {edu.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-sm text-gray-600 dark:text-gray-400 font-sans"
                        >
                          <span className="text-blue-500 mt-1 flex-shrink-0">
                            &#9654;
                          </span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
