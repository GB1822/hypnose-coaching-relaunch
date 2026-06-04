import Link from "next/link"
import { siteConfig } from "@/lib/content"

interface ServiceCardProps {
  title: string
  description: string
  href: string
}

export function ServiceCard({ title, description, href }: ServiceCardProps) {
  return (
    <div className="group rounded-xl border p-6 hover:shadow-lg transition-all duration-300 bg-white">
      <h3 className="font-semibold text-lg mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-1 text-sm font-medium transition-colors group-hover:gap-2"
        style={{ color: siteConfig.colors.accent }}
      >
        Jetzt anschauen 
      </Link>
    </div>
  )
}
