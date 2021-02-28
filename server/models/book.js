let mongoose = require('mongoose');

//create a mondel class

let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number
},
{

    collection: "books"

});

module.exports = mongoose.model('Books', bookModel);