import express from 'express'
const app = express()
const port = 3080
import getUsers from './getUser.js'


app.get('/test/getUsers', (req, res) => {
    console.log(req.query)
    let userList = getUsers(req.query.list * 1 || 10)
    setTimeout(()=>{
        res.send(JSON.stringify(userList))
    },100)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

