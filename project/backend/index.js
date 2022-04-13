const express = require("express")
var cors = require('cors')
const path = require("path")

const app = express();
app.use(cors())

app.use(express.static('static'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const indexRouter = require('./routes/index')

app.use(indexRouter.router)

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})