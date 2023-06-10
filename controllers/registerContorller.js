const User = require('../models/users');

exports.getRegister = (req, res)=>{
    if(req.session.isLoggedIn)
     res.redirect('/');
    res.render('authentication/register');
}

exports.postRegister = async (req, res, next)=>{
    const emri = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const mbiemri = req.body.lastname;

    const user = new User(emri, mbiemri, email, password);
    try{
        await user.createUser();
        res.redirect('/');
    }
    catch(err){
        await res.send(err.sqlMessage.split('for')[0]).status(400);
        setTimeout(()=>{
        }, 5000);
    }
    
}