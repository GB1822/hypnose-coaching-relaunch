import Link from "next/link"
import { siteConfig } from "@/lib/content"

interface BlogCardProps {
  title: string
  category: string
  date: string
  excerpt: string
  slug: string
}

export function BlogCard({ title, category, date, excerpt, slug }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="block rounded-xl border p-6 hover:shadow-lg transition-all duration-300 bg-white group">
      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
        <span className="flex items-center gap-1">📁 {category}</span>
        <span className="flex items-center gap-1">📅 {date}</span>
      </div>
      <h3 className="font-semibold text-lg mb-2 group-hover:text-[#00b0d0] transition-colors">{title}</h3>
      <p className="text-gray-600 text-sm">{excerpt}</p>
    </Link>
  )
}
