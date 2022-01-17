const express =require('express')
const {register} = require('../controllers/auth')
const router=express.Router()


router.post('/register',register)

// router.post('/register',validationCheck,userController.register)
// router.post('/login',userController.login)

module.exports = router