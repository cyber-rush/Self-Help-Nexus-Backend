const express = require('express')
const morgan = require('morgan')
const techniqueRouter = require('./routes/techniqueRouter')

const app = express()

// MIDDLEWARES
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/api/v1/techniques', techniqueRouter)

module.exports = app;