import { SectionHeader } from "./section-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ExperienceSection() {
  return (
    <div>
      <SectionHeader
        title="Experience"
        subtitle="Gaining practical exposure through projects and self-driven learning. Open to internships."
      />
      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-pretty">Open to Internships</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            I&apos;m actively seeking opportunities in AI, web development, or backend systems. If you&apos;re hiring or
            open to collaboration, I&apos;d love to connect.
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
