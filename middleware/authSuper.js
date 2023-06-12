exports.isAuthSuper = async (req, res, next)=>{
    console.log("Per-Admin")
        if(req.session.user.privilegji==="0" || req.session.user.privilegji==='1'){
            try{
                await res.render('redirect',{message: "Nuk keni privilegje te mjaftueshme"});
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