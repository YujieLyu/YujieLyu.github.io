import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'
import { profileData } from './data/profile'

function App() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} data={profileData} />
      <Hero data={profileData} />
      <About data={profileData} />
      <Experience data={profileData} />
      <Projects data={profileData} />
      <Achievements data={profileData} />
      <Education data={profileData} />
      <Contact data={profileData} />
      <Footer data={profileData} />
      <ChatWidget />
    </div>
  )
}

export default App
