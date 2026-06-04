import type { Metadata } from "next"
import { hypnoseHistory } from "@/lib/content"

export const metadata: Metadata = {
  title: "Hypnose",
  description: "Erfahren Sie alles über Hypnose – von den historischen Anfängen bis zur modernen Hypnotherapie.",
}

export default function HypnosePage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Was ist Hypnose?</h1>
      <p className="text-lg text-gray-600 mb-12">
        Hypnose ist ein natürlicher, wissenschaftlich anerkannter Bewusstseinszustand zwischen Wachsein und Schlaf. 
        In diesem Zustand ist das Unterbewusstsein besonders aufnahmefähig – der perfekte Moment für positive Veränderungen.
      </p>

      <h2 className="text-2xl font-bold mb-8">Die Geschichte der Hypnose</h2>
      <div className="space-y-8">
        {hypnoseHistory.map((item, i) => (
          <div key={i} className="bg-white rounded-xl border p-6">
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-700 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
