exports.isAuth = (req, res, next)=>{
    console.log("ketu")
    if(!req.session.isLoggedIn){
        if(req.session.user.privilegji==="0" || req.session.user.privilegji==='1'){
            res.redirect('/');
        }else{
            if(req.session.user.privilegji==2){
                next();
            }
        }
    }
    next();
}