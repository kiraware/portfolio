import { MotionConfig } from 'framer-motion'
import { LanguageProvider } from './context/LanguageContext'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { OrnamentalDivider } from './components/OrnamentalDivider'
import { ProjectsSection } from './components/ProjectsSection'
import { ExperienceSection } from './components/ExperienceSection'
import { OpenSourceSection } from './components/OpenSourceSection'
import { SkillsEducationSection } from './components/SkillsEducationSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <div className="min-h-svh flex flex-col">
          <Header />
          <main id="main-content" className="flex-1">
            <Hero />
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <OrnamentalDivider label="CH POSTAL · 01" className="my-2" />
            </div>
            <ProjectsSection />
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <OrnamentalDivider label="CH POSTAL · 02" className="my-2" />
            </div>
            <ExperienceSection />
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <OrnamentalDivider label="CH POSTAL · 03" className="my-2" />
            </div>
            <OpenSourceSection />
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <OrnamentalDivider label="CH POSTAL · 04" className="my-2" />
            </div>
            <SkillsEducationSection />
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <OrnamentalDivider label="CH POSTAL · 05" className="my-2" />
            </div>
            <ContactSection />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </LanguageProvider>
  )
}
