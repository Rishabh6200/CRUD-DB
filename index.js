import express from "express"
const app = express()
const port = 5000
import { connectDatabase } from './src/config/db.js'
import userRoutes from './src/routes/userRoutes.js'

connectDatabase();
app.use('/api', userRoutes);


const middleware = (req, res, next) => {
    console.log('this middleware')
    next();
}

app.get('/', (req, res) => {
    res.send("hello wor")
})
app.get('/aa', middleware, (req, res) => {
    console.log('hh')
    res.send("this is text")
})

app.listen(port, () => {
    console.log(`port run on ${port}`)
})

