import type { ProfileData } from '../types'

interface AboutProps {
  data: ProfileData
}

export default function About({ data }: AboutProps) {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Image */}
          <div className="hidden md:block flex-shrink-0">
            <div className="w-64 h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-blue-500/20 shadow-lg">
              <img
                src={data.aboutImage}
                alt="About"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            {data.aboutText.map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-600 dark:text-gray-400 font-sans leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            ))}

            <h3 className="font-display text-lg font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">
              Tech Stack
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {data.techStack.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 font-sans"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
