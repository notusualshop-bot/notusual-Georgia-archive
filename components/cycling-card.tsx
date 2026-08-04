'use client'

import { useEffect, useState } from 'react'
import {
  getNextCyclingTrivia,
  type Trivia,
} from '@/lib/trivia'
import { ShareButton } from '@/components/share-button'

export function CyclingCard() {
  const [trivia, setTrivia] = useState<Trivia | null>(null)

  useEffect(() => {
    // 每次进入或刷新时，自动按顺序从引擎获取一条不重复的彩蛋
    setTrivia(getNextCyclingTrivia())
  }, [])

  const dateLabel = trivia ? `Year ${trivia.year} — ${trivia.category}` : ''
  const shareText = trivia
    ? `A legendary cycling story from ${trivia.year}: ${trivia.headline}. ${trivia.body}`
    : ''

  return (
    <section className="w-full max-w-xl">
      <article className="rounded-sm border-2 border-foreground/80 bg-card p-6 shadow-[6px_6px_0_0_rgba(43,76,63,0.18)] sm:p-9">
        <div className="flex items-center justify-between font-display text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
          <span>No. {trivia ? trivia.year : '1896'}</span>
          <span>Notusual Cycling Edition</span>
        </div>
        <div className="mt-3 border-t-2 border-dashed border-border" />

        <p className="mt-5 text-center font-display text-xs font-medium uppercase tracking-[0.3em] text-primary">
          {dateLabel || "Unlocking today's cycling archive"}
        </p>

        <p className="mt-5 text-center font-display text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Every Corner Tells a Story
        </p>
        <p className="text-center font-display text-6xl font-bold leading-none text-primary sm:text-7xl">
          {trivia ? trivia.year : '1896'}
        </p>

        <h2 className="mt-6 text-balance text-center font-serif text-2xl font-bold leading-snug text-foreground sm:text-3xl">
          {trivia ? trivia.headline : 'The Birth of the Modern Bicycle'}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-pretty text-center font-serif text-base leading-relaxed text-foreground/80">
          {trivia
            ? trivia.body
            : 'Exploring the rich heritage, legendary climbs, and mechanical innovations of cycling history.'}
        </p>

        <div className="mt-7 border-t-2 border-dashed border-border" />

        <div className="mt-6 flex justify-center">
          <ShareButton
            title="NOTUSUAL CYCLING ARCHIVE"
            text={shareText}
          />
        </div>
      </article>
    </section>
  )
}