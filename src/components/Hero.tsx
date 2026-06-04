import Link from "next/link"
import { siteConfig } from "@/lib/content"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium uppercase tracking-wider mb-4" style={{ color: siteConfig.colors.accent }}>
            {siteConfig.heroHeadline}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-gray-900">
            {siteConfig.tagline}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {siteConfig.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/termin"
              className="px-8 py-4 rounded-md text-white font-semibold text-lg transition-all hover:opacity-90 shadow-lg"
              style={{ backgroundColor: siteConfig.colors.accent }}
            >
              Jetzt Termin buchen
            </Link>
            <Link
              href="/preise"
              className="px-8 py-4 rounded-md font-semibold text-lg border-2 transition-all hover:bg-gray-50"
              style={{ borderColor: siteConfig.colors.primary, color: siteConfig.colors.primary }}
            >
              Preise ansehen
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500 flex items-center justify-center gap-2">
            🏠 {siteConfig.houseVisitNote}
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
