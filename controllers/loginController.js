
exports.getLogIn =async (req, res)=>{

    res.render("authentication/log-in",{isAuthenticated: req.session.isLoggedIn});
}

exports.postLogIn = async (req, res)=>{
    req.session.isLoggedIn = true;
    res.redirect("/");
}

exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
      console.log(err);
      res.redirect('/');
    });
  };