const Users= require('../models/users');
const bcrypt = require('bcrypt');

exports.getLogIn =async (req, res)=>{

    res.render("authentication/log-in",{isAuthenticated: req.session.isLoggedIn,privilege:req.session.user.privilegji});
}

exports.postLogIn = async (req, res)=>{
    const username= await req.body.username;
    const password=req.body.password;
    try{
      const [userData] = await Users.getUserByEmail(username);
      const hash= userData.passwordi;
      const diqka= await bcrypt.compare(password, hash);
      const allUsers= await Users.getAllUsers();
      req.session.user="";
      const loggedInUser= allUsers.find(c=>{
          return (c.email===username)&&(diqka)
      })
      
      if(loggedInUser){
        req.session.user=loggedInUser;
        req.session.isLoggedIn = true;
        res.redirect("/");
      }else{
        res.render('redirect',{message: "Passworid ose Emaila kan qen gabim"});
      }

     
    }catch(err){
      res.render('redirect',{message: "Passworid ose Emaila kan qen gabim"});
    }
    
    
   
}

exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
     // console.log(err);
      res.clearCookie('connect.sid');
      res.redirect('/');
    });
  };
