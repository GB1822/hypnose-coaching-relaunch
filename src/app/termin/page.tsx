import type { Metadata } from "next"
import { terminInfo, siteConfig } from "@/lib/content"

export const metadata: Metadata = {
  title: "Termin vereinbaren",
  description: "Buchen Sie Ihren persönlichen Hypnose-Termin online – einfach und unkompliziert.",
}

export default function TerminPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{terminInfo.title}</h1>
      <p className="text-lg mb-2" style={{ color: siteConfig.colors.accent }}>{terminInfo.subtitle}</p>
      <p className="text-gray-600 mb-8">{terminInfo.intro}</p>

      {/* Calendly */}
      <div className="bg-white rounded-xl border overflow-hidden mb-8">
        <iframe
          src={siteConfig.calendlyUrl}
          width="100%"
          height="650"
          className="border-0"
          title="Terminbuchung Kalender"
        />
      </div>

      <div className="bg-gray-50 rounded-xl p-6 text-center text-sm text-gray-600 mb-8">
        <strong>Hinweis:</strong> {terminInfo.note}
      </div>

      <div className="text-center space-y-2">
        <p className="text-gray-600">Oder rufen Sie mich direkt an:</p>
        <a href={`tel:${siteConfig.mobile}`} className="inline-flex items-center gap-2 text-lg font-semibold"
           style={{ color: siteConfig.colors.primary }}>
          📞 {siteConfig.mobile}
        </a>
      </div>
    </div>
  )
}
