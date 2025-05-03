const {books} = require('../database_stuff/connection')

exports.fetchBooks = async (req,res)=>{
        const book_data = await books.findAll()
        console.log(book_data);
        res.json({
            response: 'Books fetched successfully',
            book_data
        })
    }
    
exports.addBooks = async (req,res)=>{
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

exports.deleteBook =  (req,res)=>{
    // logic to del books here 
    res.json({
        response: "Book deleted successfully"
    })
}

exports.updateBook = (req,res)=>{
    // logic to up books here 
    res.json({
        response: "Book updated successfully"
    })
}

exports.singleBookFetch = async (req,res) =>{
    const id = req.params.id;
    const single_data = await books.findByPk(id)


    res.json({
        response : "Single book fetched!",
        single_data
    })
}