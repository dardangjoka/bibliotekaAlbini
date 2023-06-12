const BookCollection = require('../models/bookCollection');
const bookCollectioon = new BookCollection(1);

exports.getAllBookCollections= async (req, res)=>{
    const userId= req.session.user.id;
    const books= new BookCollection(userId);
    const bookCollection= await books.getBookCollection();
    res.render("librat/koleksioniLibra",{titulliIfaqes:"Librat e: ", librat: bookCollection, active: true, isAuthenticated: req.session.isLoggedIn})
}

exports.getABookToCollection = async (req, res)=>{
    const id=req.params.id;
    if(req.session.user.id){
        const userId= req.session.user.id;
        const books= new BookCollection(userId);
        await books.getABook(id);
        res.redirect("/book-collection");
    }
    else{
     res.render('redirect',{message: "Duhesh me u kan logged in"});
    }
    
}