const { where } = require('sequelize');
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

exports.deleteBook = async (req,res)=>{
    // logic to del books here
    const  id = req.params.id
   await books.destroy({
        where :{
            id
        }
    }) 
    res.json({
        response: "Book deleted successfully"
    })
}

exports.updateBook = async (req,res)=>{
    // logic to up books here 
    const id = req.params.id
    const{bookName, bookAuthor, bookGenre, bookPrice} = req.body
   await books.update({
        bookName,
        bookPrice,
        bookGenre,
        bookAuthor
    },{
        where :{
            id : id
        }
    })

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