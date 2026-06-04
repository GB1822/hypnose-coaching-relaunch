import type { Metadata } from "next"
import { BlogCard } from "@/components/BlogCard"
import { blogPosts } from "@/lib/content"

export const metadata: Metadata = {
  title: "Blog",
  description: "Hypnose-Blog mit Fachartikeln, Erfahrungsberichten und Tipps rund um Hypnose, Coaching und mentale Gesundheit.",
}

const categories = [...new Set(blogPosts.map(p => p.category))]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog</h1>
      <p className="text-lg text-gray-600 mb-8">
        Fachartikel, Erfahrungsberichte und hilfreiche Tipps rund um Hypnose, Coaching und mentale Gesundheit.
      </p>

      {/* Kategorien */}
      <div className="flex flex-wrap gap-2 mb-12">
        <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-900 text-white">Alle</span>
        {categories.map((cat) => (
          <span key={cat} className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer">
            {cat}
          </span>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  )
}
