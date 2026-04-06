const express = require('express')
const myspace = express.Router()

myspace.get('/', (req, res) => {
    res.send("woah you found the secret space");
})

myspace.get('/hana', (req, res) => {
    res.send("the ultimate secret space reserved for hana only");
})

myspace.get('/hana/fathony', (req, res) => {
    res.send("what?? you found this??");
})

module.exports = myspace