const express = require('express')
const { books } = require('./database_stuff/connection')
const app = express()

app.use(express.json())

app.get('/books',
    async (req,res)=>{
        const book_data = await books.findAll()
        console.log(book_data);
        res.json({
            response: 'Books fetched successfully',
            book_data
        })
    }
)

app.post('/books',
    async (req,res)=>{
        // logic to add books here 
        const {bookName, bookAuthor, bookPrice, bookGenre} = await req.body
        books.create({
            bookName,
            bookAuthor,
            bookPrice,
            bookGenre
        })
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
        console.log('Server started on port 3000');
    }
)