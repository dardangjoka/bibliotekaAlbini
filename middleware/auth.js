exports.isAuth = async (req, res, next)=>{
    if(req.session.isLoggedIn){
        if(req.session.user.privilegji==="2"){
            next();
        }
    }else{
        await res.render('redirect',{message: "duhet te beni log in2"});
    }
    console.log("Error ")
}