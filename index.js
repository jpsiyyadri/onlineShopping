const express = require('express')
const path = require("path")
const app = express()
const port = 5000

// ============= url mapping starts here ======================
// example: serving a string
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// example render html page
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
  })

// ============= url mapping ends here ========================
// don't change this code
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
