'use client'

import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Quote } from '@/types/quote'

export default function QuoteForm() {
  const [topic, setTopic] = useState('')
  const [allQuotes, setAllQuotes] = useState<Quote[]>([])
  const [results, setResults] = useState<Quote[]>([])

  useEffect(() => {
    fetch('/quotes.json')
      .then(res => res.json())
      .then(data => setAllQuotes(data))
  }, [])

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const cleaned = topic.trim().toLowerCase()

    const filtered = allQuotes
      .filter(q => q.topic.toLowerCase().includes(cleaned))
      .sort(() => Math.random() - 0.5)

    const three = filtered.slice(0, 3)
    setResults(three)

    toast(`Found ${three.length ? three.length : 'no'} quotes!`)
  }

  return (
    <section className="max-w-2xl mx-auto px-4 py-10">
      <form onSubmit={onSubmit} className="flex flex-col gap-4 mb-8">
        <Input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter a topic (e.g. life, success)"
        />
        <Button type="submit">Inspire Me</Button>
      </form>

      <div className="grid gap-6">
        {results.map((q, i) => (
          <Card key={i} className="p-6 shadow-md bg-white border border-black">
            <blockquote className="text-lg italic text-gray-800">“{q.text}”</blockquote>
            <p className="text-right mt-4 text-sm text-gray-600">— {q.author}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
