'use client'

import { useState } from "react"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { moods, type Mood } from "../../../data/moods"

export default function MoodButton({ onSelect }: { onSelect: (topic: string) => void }) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary">How are you feeling?</Button>
      </DialogTrigger>

      <DialogContent className="max-w-xs text-center space-y-4">
        <h3 className="font-bold text-lg">Pick a mood</h3>

        <div className="grid gap-2">
          {moods.map((m: Mood) => (
            <Button
              key={m.topic}
              variant="outline"
              onClick={() => {
                onSelect(m.topic)
                setOpen(false)
              }}
            >
              {m.label}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
