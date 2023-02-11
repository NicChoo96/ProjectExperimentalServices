import express from 'express'

const app = express()
const port = 3000

const secretKey = "f/MNW?.~@[[V^!s3Q?f^"

app.get('/', (req, res) => {
    res.send("Hi World")
})

app.listen(port, ()=> {
    console.log("Started on port 3000")
})