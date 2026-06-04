import type { Metadata } from "next"
import { ContactForm } from "@/components/ContactForm"
import { kontaktInfo, siteConfig } from "@/lib/content"

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktieren Sie Hypnose & Coaching am Schloss in Ludwigsburg. Telefon, E-Mail oder Kontaktformular.",
}

export default function KontaktPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Kontakt</h1>
      <p className="text-lg text-gray-600 mb-12">Sie haben Fragen oder möchten einen persönlichen Termin? Schreiben Sie mir – ich lese jede Nachricht selbst und melde mich innerhalb von 24 Stunden bei Ihnen. Garantiert.</p>
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold mb-6">Schreiben Sie mir</h2>
          <p className="text-gray-600 text-sm mb-6">{kontaktInfo.formIntro}</p>
          <ContactForm />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-6">So erreichen Sie mich</h2>
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <span className="text-xl">📞</span>
              <div>
                <p className="font-medium">Telefon</p>
                <a href={`tel:${siteConfig.phone}`} className="text-gray-600 hover:text-gray-900">{siteConfig.phone}</a>
                <br />
                <a href={`tel:${siteConfig.mobile}`} className="text-gray-600 hover:text-gray-900">{siteConfig.mobile} (Mobil)</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl">📧</span>
              <div>
                <p className="font-medium">E-Mail</p>
                <a href={`mailto:${siteConfig.email}`} className="text-gray-600 hover:text-gray-900">{siteConfig.email}</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl">📍</span>
              <div>
                <p className="font-medium">Adresse</p>
                <p className="text-gray-600">{siteConfig.name}<br />{siteConfig.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl">🕐</span>
              <div>
                <p className="font-medium">Termine</p>
                <p className="text-gray-600">nach Vereinbarung</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
