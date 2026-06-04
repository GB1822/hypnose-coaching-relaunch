import type { Metadata } from "next"
import { anfahrtInfo, siteConfig } from "@/lib/content"

export const metadata: Metadata = {
  title: "Anfahrt",
  description: `So finden Sie zur Praxis in ${siteConfig.address}. Anfahrt mit Auto und öffentlichen Verkehrsmitteln.`,
}

export default function AnfahrtPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Anfahrt</h1>
      <p className="text-lg text-gray-600 mb-12">
        {siteConfig.name} – zentral in Ludwigsburg gelegen, gut erreichbar mit Auto und öffentlichen Verkehrsmitteln.
      </p>
      <div className="grid gap-8 md:grid-cols-2 mb-12">
        <div className="bg-white rounded-xl border p-6">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <span className="text-xl">🚗</span> Mit dem Auto
          </h2>
          <p className="text-gray-700">{anfahrtInfo.auto}</p>
        </div>
        <div className="bg-white rounded-xl border p-6">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <span className="text-xl">🚌</span> Öffentliche Verkehrsmittel
          </h2>
          <p className="text-gray-700">{anfahrtInfo.oepnv}</p>
        </div>
      </div>
      <div className="bg-white rounded-xl border overflow-hidden mb-8">
        <iframe src={siteConfig.googleMapsEmbed} width="100%" height="400" className="border-0" title={anfahrtInfo.mapTitle} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
      <div className="bg-gray-50 rounded-xl p-6 flex items-start gap-3">
        <span className="text-xl">📍</span>
        <div>
          <p className="font-semibold">{siteConfig.name}</p>
          <p className="text-gray-600">{siteConfig.address}</p>
        </div>
      </div>
    </div>
  )
}
