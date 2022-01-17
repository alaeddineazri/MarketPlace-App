const userSchema = require('../models/user');

const register = async (req,res)=>{
    const {name , email , password} =req.body
    // validation 
    if(!name) return res.status(400).send("Name is required")
    if(!password || password.length <6) return res.status(400).send("Password is required and should be more than 6 car")
    let emailExist = await userSchema.findOne({email}).exec()
    if (emailExist) return res.status(400).send("Email is taken ")

    //register
    const user =new userSchema(req.body)
    try {
        await user.save()
        console.log("user created ",user)
        return res.send("created success")
    } catch (error) {
        console.log("creat user error" ,error)
        res.status(400).send('Error')
    }    
}



module.exports = {  register}