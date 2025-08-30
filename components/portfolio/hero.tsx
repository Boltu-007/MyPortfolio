"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  return (
    <section className="py-10 md:py-16">
      <div className="flex flex-col items-start gap-6">
        <img
          src={"/placeholder.svg?height=80&width=80&query=Aditya%20Sen%20portrait%20placeholder"}
          alt="Portrait placeholder for Aditya Sen"
          className="h-20 w-20 rounded-full border border-border object-cover"
        />

        <div className="space-y-3">
          <Badge variant="outline" className="text-blue-600 border-blue-600">
            2nd-year B.Tech CSE (AI & ML), MCKVIE
          </Badge>
          <h1 className="text-pretty text-3xl font-semibold leading-tight md:text-4xl">
            Hi, I&apos;m Aditya — aspiring software engineer focused on AI, web, and backend systems.
          </h1>
          <p className="max-w-2xl text-pretty text-muted-foreground">
            Currently building a voice-activated AI summarizer to help visually impaired individuals access digital
            content seamlessly. Learning shell scripting, React, and system design. Open to internships in AI, web
            development, or backend.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button asChild>
            <a href="mailto:aditysen0620@gmail.com" aria-label="Email Aditya about internship opportunities">
              Email me
            </a>
          </Button>
          <Button asChild variant="outline">
            <a
              href="https://github.com/Boltu-007"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Aditya's GitHub profile"
            >
              GitHub
            </a>
          </Button>
          <Button asChild variant="ghost" className="text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20">
            <a href="#projects" aria-label="Jump to projects section">
              View projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
