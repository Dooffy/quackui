import vibrant from 'node-vibrant'

export const CODE_VIBRANT = 'vibrant'
export const LABEL_VIBRANT = 'Vibrant'

export const CODE_MUTED = 'muted'
export const LABEL_MUTED = 'Muted'

export const CODE_DARK_MUTED = 'dark-muted'
export const LABEL_DARK_MUTED = 'Dark Muted'

export const CODE_DARK_VIBRANT = 'dark-vibrant'
export const LABEL_DARK_VIBRANT = 'Dark Vibrant'

export const CODE_LIGHT_MUTED = 'light-muted'
export const LABEL_LIGHT_MUTED = 'Light Muted'

const ACTION_CODE_SUCCESS = 'success'
const ACTION_LABEL_SUCCESS = 'Success'

const ACTION_CODE_DANDER = 'danger'
const ACTION_LABEL_DANDER = 'Danger'

const ACTION_CODE_WARNING = 'warning'
const ACTION_LABEL_WARNING = 'Warning'

const ACTION_CODE_INFO = 'info'
const ACTION_LABEL_INFO = 'Info'

const ACTION_BUTTONS = [
  {code: ACTION_CODE_SUCCESS, label: ACTION_LABEL_SUCCESS, to: '#4CAF50'},
  {code: ACTION_CODE_DANDER, label: ACTION_LABEL_DANDER, to: '#F44336'},
  {code: ACTION_CODE_WARNING, label: ACTION_LABEL_WARNING, to: '#FF9800'},
  {code: ACTION_CODE_INFO, label: ACTION_LABEL_INFO, to: '#00BCD4'}
]

const SHADOW_LEVEL = -0.4
const BLEND_LEVEL = 0.8

function getMainColors (palette) {
  return [
    {
      code: CODE_VIBRANT,
      label: LABEL_VIBRANT,
      color: palette.Vibrant.getHex().toUpperCase(),
      shadow: shadeColor2(palette.Vibrant.getHex(), SHADOW_LEVEL)
    },
    {
      code: CODE_MUTED,
      label: LABEL_MUTED,
      color: palette.Muted.getHex().toUpperCase(),
      shadow: shadeColor2(palette.Muted.getHex(), SHADOW_LEVEL)
    },
    {
      code: CODE_DARK_MUTED,
      label: LABEL_DARK_MUTED,
      color: palette.DarkMuted.getHex().toUpperCase(),
      shadow: shadeColor2(palette.DarkMuted.getHex(), SHADOW_LEVEL)
    },
    {
      code: CODE_DARK_VIBRANT,
      label: LABEL_DARK_VIBRANT,
      color: palette.DarkVibrant.getHex().toUpperCase(),
      shadow: shadeColor2(palette.DarkVibrant.getHex(), SHADOW_LEVEL)
    },
    {
      code: CODE_LIGHT_MUTED,
      label: LABEL_LIGHT_MUTED,
      color: palette.LightMuted.getHex().toUpperCase(),
      shadow: shadeColor2(palette.LightMuted.getHex(), SHADOW_LEVEL)
    }
  ]
}

function getActionColors (palette) {
  const vibrantColor = palette.Vibrant.getHex()

  return ACTION_BUTTONS.map(({code, label, to}) => {
    const mainColor = blendColors(vibrantColor, to, BLEND_LEVEL)
    const shadowColor = shadeColor2(mainColor, SHADOW_LEVEL)

    return {
      code: code,
      label: label,
      color: mainColor,
      shadow: shadowColor
    }
  })
}

export async function generateColors (img) {
  const palette = await vibrant.from(img).getPalette()

  return {
    main: getMainColors(palette),
    action: getActionColors(palette)
  }
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

export function blendColors (c0, c1, p) {
  let f = parseInt(c0.slice(1), 16)
  let t = parseInt(c1.slice(1), 16)
  let R1 = f >> 16
  let G1 = f >> 8 & 0x00FF
  let B1 = f & 0x0000FF
  let R2 = t >> 16
  let G2 = t >> 8 & 0x00FF
  let B2 = t & 0x0000FF

  return '#' + (
    0x1000000 +
    (Math.round((R2 - R1) * p) + R1) * 0x10000 +
    (Math.round((G2 - G1) * p) + G1) * 0x100 +
    (Math.round((B2 - B1) * p) + B1)
  ).toString(16).slice(1)
}

export function getColorByType (colors, type) {
  return colors.find(color => color.code === type)
}
