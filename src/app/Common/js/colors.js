import vibrant from 'node-vibrant'

export async function generateColors (img) {
  const palette = await vibrant.from(img).getPalette()

  return [
    {
      code: 'vibrant',
      label: 'Vibrant',
      color: palette.Vibrant.getHex().toUpperCase()
    },
    {
      code: 'muted',
      label: 'Muted',
      color: palette.Muted.getHex().toUpperCase()
    },
    {
      code: 'dark-muted',
      label: 'Dark Muted',
      color: palette.DarkMuted.getHex().toUpperCase()
    },
    {
      code: 'dark-vibrant',
      label: 'Dark Vibrant',
      color: palette.DarkVibrant.getHex().toUpperCase()
    },
    {
      code: 'light-muted',
      label: 'Light Muted',
      color: palette.LightMuted.getHex().toUpperCase()
    }
  ]
}

export function shadeColor2 (color, percent) {
  let f = parseInt(color.slice(1), 16)
  let t = percent < 0 ? 0 : 255
  let p = percent < 0 ? percent * -1 : percent
  let R = f >> 16
  let G = f >> 8 & 0x00FF
  let B = f & 0x0000FF
  return '#' + (
    0x1000000 +
      (Math.round((t - R) * p) + R) * 0x10000 +
      (Math.round((t - G) * p) + G) * 0x100 +
      (Math.round((t - B) * p) + B)
  ).toString(16).slice(1).toUpperCase()
}
