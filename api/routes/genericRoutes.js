const express = require('express')
const router = express.Router()
const genericController = require('../controllers/genericController')

router.route('/:resource').get(genericController.getAll)

module.exports = router
