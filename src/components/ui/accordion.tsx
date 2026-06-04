'use client'
import * as React from "react"
import { cn } from "@/lib/utils"

interface AccordionItem {
  title: string
  content: string
}

interface AccordionProps {
  items: AccordionItem[]
  className?: string
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)
  return (
    <div className={cn("space-y-2", className)}>
      {items.map((item, i) => (
        <div key={i} className="border rounded-lg overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex justify-between items-center p-4 text-left font-medium hover:bg-muted/50 transition-colors"
          >
            {item.title}
            <span className={cn("transform transition-transform", openIndex === i && "rotate-180")}>▼</span>
          </button>
          {openIndex === i && (
            <div className="p-4 pt-0 text-muted-foreground">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  )
}
