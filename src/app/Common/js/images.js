import fetch from 'isomorphic-fetch'

export async function getImages () {
  const response = await fetch('/data/images.json')
  return response.json()
}

export async function getRandomImageUrl (images, previous = null) {
  const image = images[Math.floor((Math.random() * images.length))]

  return (previous !== null && image.id === previous.id)
    ? getRandomImageUrl(previous)
    : {
      ...image,
      url: `images/samples/${image.id}.jpg`
    }
}
