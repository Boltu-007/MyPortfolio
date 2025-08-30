import { SectionHeader } from "./section-header"
import { Card, CardContent } from "@/components/ui/card"

export function AchievementsSection() {
  return (
    <div>
      <SectionHeader
        title="Achievements"
        subtitle="Highlights of meaningful milestones. I’ll keep this updated as I grow."
      />
      <Card className="border-dashed">
        <CardContent className="py-6 text-muted-foreground">
          Coming soon — focused on building my AI summarizer and strengthening fundamentals.
        </CardContent>
      </Card>
    </div>
  )
}
