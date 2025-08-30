import { SectionHeader } from "./section-header"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
  return (
    <div>
      <SectionHeader title="Projects" subtitle="Hands-on learning by building practical tools." />

      <div className="grid grid-cols-1 gap-6">
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="text-pretty">Voice-Activated AI Summarizer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-muted-foreground">
              A tool to help visually impaired individuals access digital content seamlessly. Users can control the app
              with voice, fetch content, and receive concise summaries via audio.
            </p>
            <ul className="list-inside list-disc text-sm text-muted-foreground">
              <li>Goal: Accessibility-first experience with speech input and audio output</li>
              <li>Learning focus: Speech interfaces, prompt design, and reliable summarization</li>
              <li>Status: In progress</li>
            </ul>
          </CardContent>
          <CardFooter className="flex items-center gap-3">
            <Button variant="outline" asChild>
              <a href="#contact" aria-label="Contact to learn more">
                Discuss
              </a>
            </Button>
            <Button variant="ghost" asChild className="text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/20">
              <a href="#experience">Related experience</a>
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-dashed">
          <CardHeader>
            <CardTitle className="text-pretty">More projects coming soon</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            I&apos;m continuously building and will add more here as they mature.
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
