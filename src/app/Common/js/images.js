const IMAGES_COUNT = 200

export function getRandomImageUrl (previous = null) {
  const randomImage = Math.floor((Math.random() * IMAGES_COUNT) + 1)
  const imageUrl = `/images/samples/p${randomImage}.jpeg`
  return (previous !== null && previous === imageUrl)
    ? getRandomImageUrl(previous)
    : imageUrl
}
