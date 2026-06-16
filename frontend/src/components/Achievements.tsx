import { Award } from 'lucide-react'
import type { ProfileData } from '../types'

interface AchievementsProps {
  data: ProfileData
}

export default function Achievements({ data }: AchievementsProps) {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="bg-white dark:bg-[#242526] rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 flex flex-col transition-transform hover:scale-[1.02]"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-6">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-yellow-100 dark:bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-sans leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
