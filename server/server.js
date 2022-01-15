const  express = require ("express")
const fs =require('fs')
const app =express()



//..............Auto loading routes...............//

fs.readdirSync('./routes').map((r)=>app.use("/api",require(`./routes/${r}`)))




app.listen(5050 , ()=>console.log("server is running in 5050"))