import Link from "next/link"
import { siteConfig, navigation } from "@/lib/content"

export function Footer() {
  return (
    <footer style={{ backgroundColor: siteConfig.colors.primary }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Kontakt</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <p>{siteConfig.address}</p>
              <a href={`tel:${siteConfig.phone}`} className="block hover:text-white">{siteConfig.phone}</a>
              <a href={`tel:${siteConfig.mobile}`} className="block hover:text-white">{siteConfig.mobile}</a>
              <a href={`mailto:${siteConfig.email}`} className="block hover:text-white">{siteConfig.email}</a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Navigation</h3>
            <nav className="grid grid-cols-2 gap-2 text-sm">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="text-gray-300 hover:text-white transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">{siteConfig.name}</h3>
            <p className="text-gray-300 text-sm mb-4">{siteConfig.tagline} &bull; {siteConfig.subtitle}</p>
            <p className="text-gray-300 text-sm mb-4">Seit {siteConfig.since} &ndash; {siteConfig.socialProof}</p>
            <p className="text-sm font-medium mb-4" style={{ color: siteConfig.colors.accent }}>
              {siteConfig.houseVisitNote}
            </p>
            <Link href="/termin" className="inline-block px-4 py-2 rounded-md text-white text-sm font-medium"
                  style={{ backgroundColor: siteConfig.colors.accent }}>
              Jetzt Termin buchen
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-xs">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name} &ndash; {siteConfig.owner}. Alle Rechte vorbehalten.</p>
          <div className="mt-2 space-x-4">
            <Link href="/" className="hover:text-white">Impressum</Link>
            <Link href="/" className="hover:text-white">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
