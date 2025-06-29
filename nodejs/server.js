const express = require('express')
const app = express()
require('dotenv').config()

const productRouter = require('./src/routes/productRoutes')
const searchRouter = require('./src/routes/searchRoutes')

const connection = require('./src/config/db')

const port = process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

connection()

app.use('/uploads', express.static('src/uploads'))

app.get('/', (req, res) => {res.send('Server is running!')})
app.use('/products', productRouter)
app.use('/search', searchRouter)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
}
)