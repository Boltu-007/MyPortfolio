type Props = {
  title: string
  subtitle?: string
}

export function SectionHeader({ title, subtitle }: Props) {
  return (
    <div className="mb-6">
      <h2 className="text-pretty text-2xl font-semibold">{title}</h2>
      {subtitle ? <p className="mt-2 max-w-2xl text-pretty text-muted-foreground">{subtitle}</p> : null}
    </div>
  )
}
