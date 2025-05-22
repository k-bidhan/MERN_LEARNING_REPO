const express = require('express')
const cors = require("cors")
const app = express()
app.use(express.json())
const bookRoute = require("./routes/bookRoute")
app.use(cors({
    origin : "http://localhost:5173"
}))
app.use("", bookRoute)



app.listen(3000, 
    ()=>{
        console.log('Server started on port 3000');
    }
)