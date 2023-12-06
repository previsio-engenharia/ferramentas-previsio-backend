const express = require('express')
const router = express.Router()
//controllers
const { generateReport, pdfReport } = require('../controllers/reports')


//GET

//POST
router.post('/report', generateReport);

//PUT
//router.put('/user/updateUserInfo')

//DELETE


//testes com pdfkit:
router.post('/pdf', pdfReport);

module.exports = router