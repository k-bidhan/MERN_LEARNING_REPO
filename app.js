const express = require('express')
const app = express()
const db = require('./database_stuff/connection.js')

app.get('/books',
    (req,res)=>{
        res.json({
            response: 'books fetched successfully'
        })
    }
)

app.post('/books',
    (req,res)=>{
        // logic to add books here 
        res.json({
            response: "Book added successfully"
        })
    }
)

app.delete('/books/:id',
    (req,res)=>{
        // logic to del books here 
        res.json({
            response: "Book deleted successfully"
        })
    }
)
app.patch('/books/:id',
    (req,res)=>{
        // logic to up books here 
        res.json({
            response: "Book updated successfully"
        })
    }
)



app.listen(3000, 
    ()=>{
        console.log('Srever started on port 3000');
    }
)