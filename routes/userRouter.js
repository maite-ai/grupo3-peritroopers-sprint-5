const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const controller = require('../controller/usersController');

router.get('/register', controller.register);

router.get('/login', controller.login);

=======
const controller = require('../controller/userController');
const uploadFile=require('../middlewares/multerMiddleware')
const validations=require('../middlewares/userValidationsMiddleware')
const authMiddleware=require('../middlewares/authMiddleware')
const guestMiddleware=require('../middlewares/guestMiddleware')
router.get('/register', guestMiddleware, controller.register);
router.post('/register', uploadFile.single('avatar'), validations, controller.processRegister);
router.get('/login', guestMiddleware, controller.login);
router.post('/login', controller.loginProcess);
router.get('/profile/', authMiddleware, controller.profile);
router.get('/logout/', controller.logout)
>>>>>>> c35d1b6df820b722e65d47b867ce420c5c6446dc
module.exports = router;