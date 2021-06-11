const express = require('express');
const router = express.Router();
//controler
const HomeControl= require('../Controlers/main/home.control');
const LoginControl=require('../Controlers/main/login.control');
const LogOutControl=require('../Controlers/main/logout.control');
const IndexControl=require('../Controlers/main/index.control')

//midleware
var milderedirectHome= require('../middlewares/home/home.middle');


// index
router.get('/test',IndexControl.IndexGet);
/* GET home page. */
router.get('/home',milderedirectHome.redirectLogin, HomeControl.HomeLoad);
// login
router.get('/',milderedirectHome.redirectHome,LoginControl.LoginLoad );
router.post('/login',milderedirectHome.redirectHome,LoginControl.LoginPost);
// logout
router.post('/logout',milderedirectHome.redirectLogin,LogOutControl.Logout);

module.exports = router;
