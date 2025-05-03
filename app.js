const express = require('express')

const app = express()
app.use(express.json())
const bookRoute = require("./routes/bookRoute")
app.use("/api", bookRoute)



app.listen(3000, 
    ()=>{
        console.log('Server started on port 3000');
    }
)