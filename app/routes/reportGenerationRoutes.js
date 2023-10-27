const express = require('express')
const router = express.Router()
//controllers
const { generateReport } = require('../controllers/reports')


//GET

//POST
router.post('/report', generateReport)

//PUT
//router.put('/user/updateUserInfo')

//DELETE

module.exports = router