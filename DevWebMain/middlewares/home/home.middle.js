module.exports.redirectLogin= (req,res,next) =>{
    if(!req.signedCookies.userId){
      res.redirect('/')
    } 
        next();
  }

  module.exports.redirectHome = (req,res,next) =>{
    // req.session.userID
    // console.log(req.signedCookies.userId)
    if(req.signedCookies.userId){
   res.redirect('/home')
    } else{
      next();
    }
  }