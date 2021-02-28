let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const book = require('../models/book');

let passport = require('passport');

let bookController = require('../controllers/book');

//helper function for guard purposes
function requireAuth(req,res,next)
{
    //check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET route for the book list page - read operation */
router.get('/', bookController.displayBookList);

/* GET route for displaying add page - Create operation */
router.get('/add', requireAuth, bookController.displayAddPage);

/* Post route for processing add page - Create operation */
router.post('/add', requireAuth, bookController.ProcessAddPage); 

/* GET route for displaying edit page - Update operation */
router.get('/edit/:id', requireAuth,  bookController.DisplayEditPage);

/* Post route for processing - Update operation */
router.post('/edit/:id', requireAuth,  bookController.ProcessEditPage);

/* GET route for deletion - Delete operation */
 router.get('/delete/:id', requireAuth, bookController.PerformDelete);


module.exports = router;