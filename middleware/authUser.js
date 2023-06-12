exports.isAuthLoggedIn = async (req, res, next)=>{
    console.log(req.session.isLoggedIn);
    if(req.session.isLoggedIn){
        next();
    }
    await res.render('redirect',{message: "Duhet te beni log in1"});
}