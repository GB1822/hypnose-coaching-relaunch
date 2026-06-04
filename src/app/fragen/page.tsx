import type { Metadata } from "next"
import { Accordion } from "@/components/ui/accordion"
import { faqItems } from "@/lib/content"

export const metadata: Metadata = {
  title: "Fragen & Antworten",
  description: "Häufig gestellte Fragen zur Hypnose – verständlich und ehrlich beantwortet.",
}

export default function FragenPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Fragen & Antworten</h1>
      <p className="text-lg text-gray-600 mb-12">
        Hier finden Sie Antworten auf die häufigsten Fragen rund um das Thema Hypnose.
        Sollte Ihre Frage nicht dabei sein, kontaktieren Sie mich gerne!
      </p>
      <Accordion items={faqItems.map(f => ({ title: f.question, content: f.answer }))} />
    </div>
  )
}
