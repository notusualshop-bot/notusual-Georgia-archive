import sharp from "sharp"
import { fileURLToPath } from "node:url"
import path from "node:path"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const src = path.join(__dirname, "..", "public", "images", "batter-cutout.png")
const out = path.join(__dirname, "..", "public", "images", "batter-transparent.png")

// Background cream sampled from the generated art (~ #efe3cb)
const BG = { r: 239, g: 227, b: 203 }

const { data, info } = await sharp(src)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })

const { width, height, channels } = info
const px = width * height

// Distance from the cream background, normalized. Cream -> transparent,
// dark ink -> opaque. This yields a natural "printed on paper" cutout.
const NEAR = 26 // fully transparent within this distance of cream
const FAR = 88 // fully opaque beyond this distance

for (let i = 0; i < px; i++) {
  const o = i * channels
  const r = data[o]
  const g = data[o + 1]
  const b = data[o + 2]
  const dist = Math.sqrt(
    (r - BG.r) ** 2 + (g - BG.g) ** 2 + (b - BG.b) ** 2,
  )
  let a
  if (dist <= NEAR) a = 0
  else if (dist >= FAR) a = 255
  else a = Math.round(((dist - NEAR) / (FAR - NEAR)) * 255)
  data[o + 3] = a
}

await sharp(data, { raw: { width, height, channels } })
  .png()
  .toFile(out)

console.log(`[v0] Wrote transparent cutout: ${out} (${width}x${height})`)
