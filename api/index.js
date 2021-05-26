const express = require('express')
const cors = require('cors')
const app = express()
const sequelize = require('./db')

const genericRouter = require('./routes/genericRoutes')

app.use(express.json())
app.use(cors())
// >> requestDater Middleware
app.use((req, _, next) => {
  req.requestTime = new Date().toISOString()
  next()
})
// *** Router
const apiV1Route = ''
app.use(`${apiV1Route}`, genericRouter)

// app.get('/echo/:what', (req, res) => {
//   res.json(req.params)
// })

module.exports = {
  path: '/api',
  handler: app,
}
