var http = require('http')
var fs = require('fs')

var images = require('./images.json')

images.map(image => {
  let file = fs.createWriteStream(`../images/samples/${image.id}.jpg`)
  http.get(
    `http://images.unsplash.com/photo-${image.id}?auto=format&fit=crop&w=1024&h=512&q=100`,
    function (response) {
      console.log(`../images/samples/${image.id}.jpg`)
      response.pipe(file)
    }
  )
})
