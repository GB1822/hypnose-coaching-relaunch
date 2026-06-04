import type { Metadata } from "next"
import Link from "next/link"
import { tbcCoaching, siteConfig } from "@/lib/content"

export const metadata: Metadata = {
  title: "TBC – Turbo Business Coaching",
  description: tbcCoaching.subtitle,
}

export default function TbcCoachingPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{tbcCoaching.title}</h1>
      <p className="text-lg mb-2" style={{ color: siteConfig.colors.accent }}>{tbcCoaching.subtitle}</p>
      <p className="text-gray-600 mb-4">{tbcCoaching.description}</p>
      <p className="text-gray-700 font-medium mb-12">Die Frage ist nicht, ob Sie es sich leisten können – sondern ob Sie es sich leisten können, es NICHT zu tun.</p>

      <div className="space-y-4 mb-12">
        {tbcCoaching.program.map((week) => (
          <div key={week.week} className="bg-white rounded-xl border p-6 flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                 style={{ backgroundColor: siteConfig.colors.primary }}>
              {week.week}
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Woche {week.week}: {week.title}</h3>
              <p className="text-gray-600">{week.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link href="/termin" className="inline-block px-8 py-4 rounded-md text-white font-semibold text-lg"
              style={{ backgroundColor: siteConfig.colors.accent }}>
          Kostenloses Erstgespräch vereinbaren
        </Link>
      </div>
    </div>
  )
}
