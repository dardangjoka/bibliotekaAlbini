const Users= require('../models/users');
const bcrypt = require('bcrypt');

exports.getLogIn =async (req, res)=>{

    res.render("authentication/log-in",{isAuthenticated: req.session.isLoggedIn,privilege:req.session.user.privilegji});
}

exports.postLogIn = async (req, res)=>{
    const username= req.body.username;
    //const hash = await bcrypt.hash(req.body.password, 10);
    const password=req.body.password;
    const [userData] = await Users.getUserByEmail(username);
    const hash= userData.passwordi;
    const diqka= await bcrypt.compare(password, hash);
   
    const allUsers= await Users.getAllUsers();
    req.session.user="";
    const loggedInUser= allUsers.find(c=>{
        return (c.email===username)&&(diqka)
    })
    //console.log(loggedInUser,username, password );

    if(loggedInUser){
      req.session.user=loggedInUser;
      req.session.isLoggedIn = true;
      res.redirect("/");
    }
    else{
      res.send("Gabim shoku e ki njaonon");
    }
   
}

exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
     // console.log(err);
      res.clearCookie('connect.sid');
      res.redirect('/');
    });
  };
