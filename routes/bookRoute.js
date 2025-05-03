const { fetchBooks, addBooks, deleteBook, updateBook, singleBookFetch } = require("../controllers/bookController")

const router = require("express").Router()

router.route("/books").get(fetchBooks).post(addBooks)

router.route("/books/:id").delete(deleteBook).patch(updateBook).get(singleBookFetch)



module.exports = router 