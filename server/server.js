const express = require('express')
const dotEnv = require('dotenv')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const yaml = require('yamljs')
const swaggerDocs = yaml.load('./swagger.yaml')
const dbConnection = require('./database/connection')

dotEnv.config()

const app = express()
const PORT = process.env.PORT || 3001

// connect to the database
dbConnection()

// handle CORS issues
app.use(cors())

// request payload middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// handle custom routes
app.use('/api/v1/user', require('./routes/userRoutes'))

// doc API 
if (process.env.NODE_ENV !== 'production') {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}

app.get('/', (req, res, next) => {
  res.send('Hello from my Express server v2!')
})

app.listen(PORT, () => {
  console.log(`Server listening on http://127.0.0.1:${PORT}`)
})