import Image from 'next/image'

export function CyclingLogo() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative mb-2 h-20 w-28 sm:h-24 sm:w-32">
        <Image
          src="/images/cycling_png.png"
          alt="Vintage Cycling Icon"
          fill
          className="object-contain"
          priority
        />
      </div>
      <p className="font-display text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">
        EST. ARCHIVE
      </p>
      <h1 className="mt-1 font-display text-3xl font-extrabold tracking-wider text-primary sm:text-4xl">
        NOTUSUAL
      </h1>
      <p className="font-display text-sm font-bold tracking-[0.2em] text-foreground/90 sm:text-base">
        CYCLING DAILY
      </p>
    </div>
  )
}