const express = require ('express')
const app = express()

const port = process.env.port || 5000

app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) => {
    res.sendFile(index.html)
})

app.listen(port, () => {
    console.log('app running on port 3000')
})