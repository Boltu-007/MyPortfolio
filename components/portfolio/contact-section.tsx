import { SectionHeader } from "./section-header"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <div>
      <SectionHeader title="Contact" subtitle="I’m happy to chat about internships, collaborations, or projects." />
      <div className="flex flex-wrap items-center gap-3">
        <Button asChild>
          <a href="mailto:aditysen0620@gmail.com" aria-label="Email Aditya">
            Email
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href="https://github.com/Boltu-007" target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub">
            GitHub
          </a>
        </Button>
        <Button asChild variant="ghost" className="text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20">
          <a
            href="https://www.linkedin.com/in/aditya-sen-a4a748322/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn"
          >
            LinkedIn
          </a>
        </Button>
      </div>
    </div>
  )
}
