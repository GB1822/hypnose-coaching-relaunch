import type { Metadata } from "next"
import Link from "next/link"
import { PriceCard } from "@/components/PriceCard"
import { prices, paymentMethods, siteConfig, pricesIntro } from "@/lib/content"

export const metadata: Metadata = {
  title: "Preise",
  description: "Transparente Preise für Hypnose-Sitzungen. Erste Sitzung 250 €, Folge-Sitzung 180 €. Hausbesuche möglich.",
}

export default function PreisePage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{pricesIntro.headline}</h1>
      <p className="text-lg text-gray-600 mb-4">{pricesIntro.subheadline}</p>
      <p className="text-lg text-gray-600 mb-12">
        Transparente und faire Preise für Ihre persönliche Veränderung. Investieren Sie in Ihr Wohlbefinden.
      </p>

      <div className="grid gap-6 md:grid-cols-3 mb-16">
        {prices.map((p, i) => (
          <PriceCard key={i} {...p} highlighted={i === 0} />
        ))}
      </div>

      {/* Hausbesuche Highlight */}
      <div className="bg-gradient-to-r rounded-xl p-6 md:p-8 mb-12 text-white"
           style={{ backgroundImage: `linear-gradient(135deg, ${siteConfig.colors.primary}, ${siteConfig.colors.accent})` }}>
        <div className="flex items-center gap-3 mb-3">
          🏠
          <h2 className="text-xl font-bold">Hausbesuche – Behandlung bei Ihnen zuhause</h2>
        </div>
        <p className="text-white/90 mb-4">
          Auf Wunsch komme ich auch zu Ihnen nach Hause. Genießen Sie die Behandlung in Ihrer vertrauten Umgebung – 
          bequem und ohne Anfahrtsweg. Der Hausbesuch hat einen Aufpreis von <strong>+30 €</strong> pro Besuch.
        </p>
        <p className="text-white/80 text-sm">
          Für Hausbesuche kontaktieren Sie mich bitte telefonisch unter {siteConfig.mobile}.
        </p>
      </div>

      {/* Zahlungsmittel */}
      <div className="mb-12">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          💳 Zahlungsmittel
        </h2>
        <div className="flex flex-wrap gap-3">
          {paymentMethods.map((method) => (
            <span key={method} className="px-4 py-2 rounded-lg border bg-white text-sm font-medium">
              {method}
            </span>
          ))}
        </div>
      </div>

      
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-12 text-center">
        <p className="text-green-800 font-medium">{pricesIntro.guarantee}</p>
      </div>

      <div className="text-center">
        <Link href="/termin" className="inline-block px-8 py-4 rounded-md text-white font-semibold text-lg"
              style={{ backgroundColor: siteConfig.colors.accent }}>
          Jetzt Termin buchen
        </Link>
      </div>
    </div>
  )
}
