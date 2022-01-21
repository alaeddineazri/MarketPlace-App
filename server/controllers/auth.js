const User = require('../models/user')
var jwt = require('jsonwebtoken')


const register = async (req, res) => {
    const { name, email, password } = req.body
    // validation 
    if (!name) return res.status(400).send("Name is required")
    if (!password || password.length < 6) return res.status(400).send("Password is required and should be more than 6 car")
    let emailExist = await User.findOne({ email }).exec()
    if (emailExist) return res.status(400).send("Email is taken ")

    //register
    const user = new User(req.body)
    try {
        await user.save()
        console.log("user created ", user)
        return res.send("created success")
    } catch (error) {
        console.log("creat user error", error)
        res.status(400).send('Error')
    }
}


const login = async (req, res) => {
    const { email, password } = req.body
    try {
        let user = await User.findOne({ email }).exec()
        if (!user) res.status(400).send("user with that email not found ")
        user.comparePassword(password, (error, match) => {
            if (!match || error) return res.status(400).send("wrong password ")
            // generate JWT
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1w' })
            res.json({ token, user :{
                _id: user._id,
                name:user.name,
                email:user.email,
                createdAt:user.createdAt,
                updatedAt:user.updatedAt

            } })
            console.log("token & user" ,token , user)
        })
    } catch (error) {
        console.log("login error", error)
        res.status(400).send("login failed")
    }
}


module.exports = { register, login }