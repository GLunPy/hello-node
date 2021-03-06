const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express()

app.use(express.static(path.join(__dirname, 'templates')))

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
})
