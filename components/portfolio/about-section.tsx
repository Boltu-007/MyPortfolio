import { SectionHeader } from "./section-header"

export function AboutSection() {
  return (
    <div>
      <SectionHeader
        title="About Me"
        subtitle="Friendly, curious, and driven. I love building practical tools that help people."
      />
      <div className="prose prose-sm max-w-none dark:prose-invert">
        <p>
          I&apos;m a 2nd-year B.Tech student in Computer Science and Engineering (AI & ML specialization) at MCKV
          Institute of Engineering. I enjoy learning by building—lately, I&apos;ve been exploring shell scripting,
          React, and system design while preparing for interviews.
        </p>
        <p>
          My current project, a <strong>voice-activated AI summarizer</strong>, aims to make digital content more
          accessible for visually impaired individuals. I&apos;m actively seeking internships in AI, web development, or
          backend engineering to grow through real-world impact.
        </p>
        <p>
          Long-term, I aspire to secure a tech role at a reputed company and eventually build a startup that solves
          meaningful problems.
        </p>
      </div>
    </div>
  )
}
