
// common js
// const express = require("express")
// require('dotenv').config()

// module js
import express from "express"
import 'dotenv/config'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/twitter', (req, res) =>{
    res.send("Naman.com")
})

app.get('/login', (req, res) =>{
    res.send('<h1>Login please</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Listen on port ${port}`);
})