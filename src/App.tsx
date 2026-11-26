import { MotionConfig } from 'framer-motion'
import { LanguageProvider } from './context/LanguageContext'
import { ThemeBackdrop } from './components/ThemeBackdrop'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { OrnamentalDivider } from './components/OrnamentalDivider'
import { ScenicInterlude } from './components/ScenicInterlude'
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
        <ThemeBackdrop />
        <div className="relative z-10 min-h-svh flex flex-col">
          <Header />
          <main id="main-content" className="flex-1">
            <Hero />
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <OrnamentalDivider className="my-2" />
            </div>
            <ProjectsSection />
            <ScenicInterlude />
            <ExperienceSection />
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <OrnamentalDivider className="my-2" />
            </div>
            <OpenSourceSection />
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <OrnamentalDivider className="my-2" />
            </div>
            <SkillsEducationSection />
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <OrnamentalDivider className="my-2" />
            </div>
            <ContactSection />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </LanguageProvider>
  )
}
