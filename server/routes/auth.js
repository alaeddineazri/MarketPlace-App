const express =require('express')
const router=express.Router()


router.get('/login', (req ,res )=>{
    res.send("hii")
})

// router.post('/register',validationCheck,userController.register)
// router.post('/login',userController.login)

module.exports = router