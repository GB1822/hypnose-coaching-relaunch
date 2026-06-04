
interface TestimonialCardProps {
  name: string
  text: string
  date: string
  rating: number
}

export function TestimonialCard({ name, text, date, rating }: TestimonialCardProps) {
  return (
    <div className="rounded-xl border bg-white p-6 flex flex-col h-full">
      <div className="flex gap-1 mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-yellow-400">★</span>
        ))}
      </div>
      <p className="text-gray-700 text-sm flex-1 mb-4">&quot;{text}&quot;</p>
      <div>
        <p className="font-semibold text-sm">{name}</p>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
    </div>
  )
}
