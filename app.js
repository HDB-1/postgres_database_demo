const express = require('express')
const app = express()
const port = 7070
const setupFile = require('./knexfile').development

var knex = require('knex')({
    client: setupFile.client,
    connection: setupFile.connection,
    pool: { min: 0, max: 7 }
  })

app.use(express.static('views'));
app.use(express.urlencoded());

app.get('/', (req, res) => {
    
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

app.get('/address', (req, res) => {
    knex.select('*')
    .from('address')
    .on('query', function (data){

    })
    .then((response) => {
        console.log(response)
        res.send(response)
    })
})

app.get('/addresssearch', (req, res) => {
    knex.select('*')
    .from('address')
    .where(req.query)
    .on('query-response', () => {})
    .then(function(result) {
        res.send(result);
        console.log(result);
    })
    .catch(function (error) {
        console.log(error)
        res.send(error.hint)
    })
})

app.get('/homes', (req, res) => {
    knex.select('*')
    .from('homes')
    .where(req.query)
    .on('query-response', () => {})
    .then(function(result) {
        res.send(result);
        console.log(result);
    })
    .catch(function (error) {
        console.log(error)
        res.send(error.hint)
    })
})


app.get('/peoplesearch', (req, res) => {
    knex.select('*')
    .from('people')
    .where(req.query)
    .on('query-response', () => {})
    .then(function(result) {
        res.send(result)
        console.log(result);
    })
    .catch(function (error) {
        console.log(error)
        res.send(error.hint)
    })
})

app.get('/peopleAndAddress', (req, res) => {
    knex.select('*')
    .from('people')
    .leftJoin('address','people.id', 'address.id')
    .where(req.query)
    .on('query-response', () => {})
    .then(function(result) {
        res.send(result)
        console.log(result);
    })
    .catch(function (error) {
        console.log(error)
        res.send(error.hint)
    })
})

app.get('/namesAndPostcodes', (req, res) => {
    knex.select('people.name', 'address.postcode')
    .from('people')
    .innerJoin('address', 'people.id', 'address.id')
    .where(req.query)
    .on('query-response', () => {})
    .then(function(result) {
        res.send(result)
        console.log(result);
    })
    .catch(function(error) {
        res.send(error.hint)
        console.log(error);
    })
})

let me = {name: 'Harry', age: 100, occupants: 3}
app.post('/addme', (req, res) => {
    knex('people')
    .insert(me)
    .then(console.log('yay'))
    res.redirect('/')
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`))