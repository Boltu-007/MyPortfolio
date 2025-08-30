import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Hero } from "@/components/portfolio/hero"
import { AboutSection } from "@/components/portfolio/about-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { AchievementsSection } from "@/components/portfolio/achievements-section"
import { ContactSection } from "@/components/portfolio/contact-section"

export default function HomePage() {
  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <header className="border-b border-border bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
          <a href="#" className="font-semibold text-foreground">
            Aditya Sen
          </a>
          <nav aria-label="Primary" className="hidden gap-4 text-sm md:flex">
            <a href="#about" className="text-muted-foreground hover:text-foreground">
              About
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-foreground">
              Skills
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground">
              Projects
            </a>
            <a href="#experience" className="text-muted-foreground hover:text-foreground">
              Experience
            </a>
            <a href="#achievements" className="text-muted-foreground hover:text-foreground">
              Achievements
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" className="hidden md:inline-flex bg-transparent">
              <a href="mailto:aditysen0620@gmail.com" aria-label="Email Aditya">
                Email
              </a>
            </Button>
            <Button asChild>
              <a
                href="https://www.linkedin.com/in/aditya-sen-a4a748322/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
              >
                Connect
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main id="content" className="mx-auto max-w-4xl px-4">
        <Hero />

        <section id="about" className="scroll-mt-20 py-12">
          <AboutSection />
        </section>

        <Separator />

        <section id="skills" className="scroll-mt-20 py-12">
          <SkillsSection />
        </section>

        <Separator />

        <section id="projects" className="scroll-mt-20 py-12">
          <ProjectsSection />
        </section>

        <Separator />

        <section id="experience" className="scroll-mt-20 py-12">
          <ExperienceSection />
        </section>

        <Separator />

        <section id="achievements" className="scroll-mt-20 py-12">
          <AchievementsSection />
        </section>

        <Separator />

        <section id="contact" className="scroll-mt-20 py-12">
          <ContactSection />
        </section>
      </main>

      <footer className="mt-8 border-t border-border">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-6 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Aditya Sen</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Boltu-007"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-sen-a4a748322/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              LinkedIn
            </a>
            <a href="mailto:aditysen0620@gmail.com" className="hover:text-foreground">
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
