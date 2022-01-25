const createConnectAccount = async (req, res)=>{
    console.log("tokenMiddleware",req.user)
    console.log("you hit createConnectAccount")
}

module.exports = { createConnectAccount }