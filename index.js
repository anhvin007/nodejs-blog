const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {

    var a = 3
    var b = 2
    var c = a+b

    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})