const express = require('express')
const router = express.Router()
const { getAllTechniques } = require('./../controllers/techniqueController')

router
    .route('/')
    .get(getAllTechniques)

module.exports = router