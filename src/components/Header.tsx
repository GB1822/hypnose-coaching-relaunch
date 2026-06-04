'use client'

import { useState } from "react"
import Link from "next/link"
import { navigation, siteConfig } from "@/lib/content"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg" style={{ color: siteConfig.colors.primary }}>
          <span className="hidden sm:inline">{siteConfig.name}</span>
          <span className="sm:hidden">Hypnose & Coaching</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-sm">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors font-medium"
                  style={{ color: siteConfig.colors.primary }}>
              {item.label}
            </Link>
          ))}
          <Link href="/termin" className="ml-2 px-4 py-2 rounded-md text-white text-sm font-medium transition-colors"
                style={{ backgroundColor: siteConfig.colors.accent }}>
            Jetzt Termin buchen
          </Link>
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 lg:hidden text-xl">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <nav className="lg:hidden border-t bg-white px-4 py-3 space-y-1">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 rounded-md hover:bg-gray-100 font-medium">
              {item.label}
            </Link>
          ))}
          <Link href="/termin" onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 mt-2 rounded-md text-white text-center font-medium"
                style={{ backgroundColor: siteConfig.colors.accent }}>
            Jetzt Termin buchen
          </Link>
        </nav>
      )}
    </header>
  )
}
