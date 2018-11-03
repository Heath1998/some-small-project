const express = require('express')
const UserController = require('../controller/controller')
const router = express.Router()

UserController(router)

module.exports = router
