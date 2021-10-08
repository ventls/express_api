const express = require('express')
const app = express()
const port = 3080

app.get('/', (req, res) => {
    setTimeout(()=>{
        res.send('{"uid": "ffdsf-fads-dsad","name": "limin"}')
    },100)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})