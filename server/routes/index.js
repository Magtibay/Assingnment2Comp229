let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About page. */
router.get('/about', indexController.displayAboutPage);


/* GET Project page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact page. */
router.get('/contact', indexController.displayContactPage);

/* GET route for displaying Login page  */
router.get('/login', indexController.displayLoginPage);

/* Post route for processing Login page */
router.post('/login', indexController.processLoginPage); 

/* GET route for displaying Register page  */
router.get('/register', indexController.displayRegisterPage);

/* Post route for processing Register page */
router.post('/register', indexController.processRegisterPage); 

/* GET to perofrm userlogout*/
router.get('/logout', indexController.performLogout);

module.exports = router;
