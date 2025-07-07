'use client'
import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

type Quote = {
  text: string
  topic: string
  author: string
}

export default function QuoteForm() {
  const [topic, setTopic] = useState("")
  const [allQuotes, setAllQuotes] = useState<Quote[]>([])
  const [results, setResults] = useState<Quote[]>([])

  useEffect(() => {
    fetch('/quotes.json')
      .then(res => res.json())
      .then(data => setAllQuotes(data))
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const cleaned = topic.trim().toLowerCase()

    if (!cleaned) {
      // Random 3
      const shuffled = [...allQuotes].sort(() => 0.5 - Math.random())
      setResults(shuffled.slice(0, 3))
    } else {
      const filtered = allQuotes.filter(q =>
        q.topic.toLowerCase().includes(cleaned)
      )
      setResults(filtered.slice(0, 3))
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-10 space-y-6">
      <form onSubmit={handleSearch} className="flex gap-2 items-center">
        <Input
          placeholder="Enter a topic (e.g. success, life)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <Button type="submit">Inspire Me</Button>
      </form>

      {results.length > 0 && (
        <div className="space-y-4">
          {results.map((q, idx) => (
            <Card key={idx} className="p-4">
              <blockquote className="text-lg italic">❝ {q.text} ❞</blockquote>
              <p className="text-sm text-right text-muted-foreground mt-2">— {q.author}</p>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
