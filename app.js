const express = require('express')
const app = express()
const port = 7070

var knex = require('knex')({
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'postgres',
      database: 'neighbourhoods'
    },
    pool: { min: 0, max: 7 }
  })

app.use(express.static('views'));
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send("Hello World!")
    // console.log()
})
  

app.get('/people', (req, res) => {
    knex.select('*')
    .from('people')
    .on('query', function (data){

    })
    .then((response) => {
        console.log(response)
        res.send(response)
    })
})





app.listen(port, () => console.log(`Example app listening on port ${port}!`))