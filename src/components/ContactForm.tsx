'use client'

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { siteConfig } from "@/lib/content"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <span className="text-4xl block mb-4">✅</span>
        <h3 className="text-xl font-semibold mb-2">Vielen Dank!</h3>
        <p className="text-gray-600">Ihre Nachricht wurde versendet. Ich melde mich innerhalb von 24 Stunden bei Ihnen.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium mb-1">Name *</label>
          <Input required placeholder="Ihr Name" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">E-Mail *</label>
          <Input required type="email" placeholder="ihre@email.de" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Telefon</label>
        <Input type="tel" placeholder="Ihre Telefonnummer" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Nachricht *</label>
        <Textarea required placeholder="Ihre Nachricht an mich..." rows={5} />
      </div>
      <button
        type="submit"
        className="flex items-center gap-2 px-6 py-3 rounded-md text-white font-medium transition-colors hover:opacity-90"
        style={{ backgroundColor: siteConfig.colors.accent }}
      >
         Nachricht senden
      </button>
    </form>
  )
}
