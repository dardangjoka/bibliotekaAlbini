exports.isAuth = async (req, res, next)=>{
    console.log("perUserThjesht")
    if(!req.session.isLoggedIn){
        await res.render('redirect',{message: "Duhesh me u kan logged in"});
    }else{
        next();
    }
}