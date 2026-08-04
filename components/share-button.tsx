'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

type ShareButtonProps = {
  title: string
  text: string
}

export function ShareButton({ title, text }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)

  async function handleShare() {
    const url = typeof window !== 'undefined' ? window.location.href : ''
    const shareData = { title, text: `${text}\n\n${title}`, url }

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share(shareData)
        return
      } catch {
        // User cancelled or share failed — fall through to copy.
      }
    }

    try {
      await navigator.clipboard.writeText(`${text}\n\n${url}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard unavailable — nothing else to do.
    }
  }

  return (
    <Button
      onClick={handleShare}
      className="h-12 rounded-sm border border-primary bg-primary px-8 font-display text-base font-semibold uppercase tracking-[0.15em] text-primary-foreground shadow-[3px_3px_0_0_#1c2821] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_0_#1c2821]"
    >
      {copied ? 'Copied to Clipboard' : 'Share with Friends'}
    </Button>
  )
}
