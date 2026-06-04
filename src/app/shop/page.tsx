import type { Metadata } from "next"
import Link from "next/link"
import { shopProducts, siteConfig } from "@/lib/content"

export const metadata: Metadata = {
  title: "Shop",
  description: "Hypnose-MP3s, Selbsthypnose-Kurse und Geschenkgutscheine – für Ihre persönliche Entwicklung.",
}

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Shop</h1>
      <p className="text-lg text-gray-600 mb-12">
        Hypnose für zuhause – personalisierte MP3s, Kurse und Gutscheine für Ihre persönliche Entwicklung.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {shopProducts.map((product, i) => (
          <div key={i} className="bg-white rounded-xl border p-6 hover:shadow-lg transition-all">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <span className="text-xl font-bold" style={{ color: siteConfig.colors.primary }}>{product.price}</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            <Link href="/kontakt" className="inline-flex items-center gap-1 text-sm font-medium" style={{ color: siteConfig.colors.accent }}>
              Jetzt bestellen →
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-12 bg-gray-50 rounded-xl p-8 text-center">
        <span className="text-5xl block mb-3">🛍️</span>
        <h2 className="text-xl font-semibold mb-2">Fragen zu unseren Produkten?</h2>
        <p className="text-gray-600 mb-4">Ich berate Sie gerne persönlich, welches Produkt am besten zu Ihnen passt.</p>
        <Link href="/kontakt" className="inline-block px-6 py-3 rounded-md text-white font-medium"
              style={{ backgroundColor: siteConfig.colors.accent }}>
          Kontakt aufnehmen
        </Link>
      </div>
    </div>
  )
}
