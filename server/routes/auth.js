const express =require('express')
const { message } = require('../controllers/auth')
const router=express.Router()


router.get('/login', message)

// router.post('/register',validationCheck,userController.register)
// router.post('/login',userController.login)

module.exports = router