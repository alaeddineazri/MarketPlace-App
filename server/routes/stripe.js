const express =require('express')   
const {createConnectAccount } = require('../controllers/stripe')
const { tokenMiddleware } = require('../middlewares')
const router=express.Router()


router.post('/create-connect-account',tokenMiddleware,createConnectAccount)


module.exports = router