import { SectionHeader } from "./section-header"
import { Badge } from "@/components/ui/badge"

const skills = [
  { name: "Shell Scripting", level: "Learning" },
  { name: "React", level: "Learning" },
  { name: "System Design", level: "Learning" },
]

export function SkillsSection() {
  return (
    <div>
      <SectionHeader
        title="Skills"
        subtitle="Focused on fundamentals and consistent practice. Here’s what I’m actively learning."
      />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {skills.map((s) => (
          <div
            key={s.name}
            className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3"
          >
            <span className="font-medium">{s.name}</span>
            <Badge variant="secondary" className="text-foreground">
              {s.level}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  )
}
