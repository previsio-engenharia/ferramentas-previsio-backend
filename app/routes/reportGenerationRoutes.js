const express = require('express')
const router = express.Router()
//controllers
const { pdfReport } = require('../controllers/reports')


//GET

//POST
router.post('/report', pdfReport);

//PUT
//router.put('/user/updateUserInfo')

//DELETE


//testes com pdfkit:
//router.post('/pdf', pdfReport);

module.exports = router