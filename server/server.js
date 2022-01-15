const  express = require ("express")
const app =express()

app.get('/', (req ,res)=>{
    res.send("hi")
})


app.listen(5050 , ()=>console.log("server is running in 5050"))