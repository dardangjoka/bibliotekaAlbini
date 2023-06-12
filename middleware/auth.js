exports.isAuth = async (req, res, next)=>{
    console.log("ketu")
    if(!req.session.isLoggedIn){
        if(req.session.user.privilegji==="0" || req.session.user.privilegji==='1'){
            try{
                await res.render('redirect',{message: "Duhesh me u kan logged in"});
            }
            catch(err){
                console.error(err);
            }
        }else{
            if(req.session.user.privilegji==2){
                try{
                    await next();
                }catch(err){
                    console.error(err);
                }
            }
        }
    }
    try{
        await next();
    }catch(err){
        console.error(err);
    }
}