const app = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'templates')))

app.listen(PORT, function () {
  console.log('Example app listening on port 5000!')
});
