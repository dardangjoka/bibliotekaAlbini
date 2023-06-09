const dbBookProfile={titulli:"Beni ecen vetem", autori:"Fan Noli", img:"/img/img1.jpg"};
const Librat = require('../models/libra');

exports.getBookProfile =async (req, res)=>{
    const id=req.params.id;
    const libriIDerguar= await Librat.getAllBooks();
    const libriIFLitruar=libriIDerguar.filter(c=>{return c.id==id});
    const [libriIVetem]= libriIFLitruar;
    console.log(libriIVetem)
    res.render("librat/profiliILibrit", {libri: libriIVetem, librrrr:libriIDerguar, isAuthenticated: req.session.isLoggedIn });
}

exports.deleteABook =async (req, res)=>{
    console.log(req.params.id);
    await Librat.deletaABook(req.params.id);
    await res.render("dashboard/dashboard", {aaa1:  Librat.getAllBooks(), isAuthenticated: req.session.isLoggedIn});
}

exports.getAllBooks = async (req, res)=>{
    const dbBooks = Librat.getAllBooks();    
    const zhanri = req.query;
    console.log(req.session.isLoggedIn)
    let zhanriAktiv = "clear";
    if(!(Object.keys(zhanri).length === 0) && zhanri.zhanri!=="clear"){
        zhanriAktiv=zhanri.zhanri;
        const array = await Librat.getAllBooks();
        filterdBooks= array.filter((c)=>{ return zhanri.zhanri === c.zhanri;});
        return res.render("librat/index",{titulliIfaqes:"Librat me zhaner: " + zhanri.zhanri, active: zhanriAktiv, librat:  await filterdBooks, isAuthenticated: req.session.isLoggedIn});
    }
    res.render("librat/index",{titulliIfaqes:"Te gjitha librat", librat: await dbBooks, active: zhanriAktiv, isAuthenticated: req.session.isLoggedIn})
}

exports.createBook = async (req, res)=>{
    const titulli = req.body.titulli;
    const isbn = req.body.isbn;
    const autori = req.body.autori;
    const viti = req.body.vitiBotimit;
    const cmimi = req.body.cmimi;
    const isVisible = "1"; 
    const pdfLink = req.body.pdfLink;
    const imgId = 1;
    const pershkrimi = req.body.pershkrimi;
    const zhanri = req.body.zhanri;
    const libri = new Librat(titulli, parseInt(isbn), autori, parseInt(viti), parseFloat(cmimi), parseInt(zhanri), parseInt(isVisible), parseInt(pdfLink), parseInt(imgId), parseInt(pershkrimi));

    try{
        await libri.createBook();
        const allBooks= await Librat.getAllBooks();
        await res.render("dashboard/dashboard", {aaa1:  allBooks, errorActive: "none", isAuthenticated: req.session.isLoggedIn });
    }catch(err){
        const allBooks= await Librat.getAllBooks();
        await res.render("dashboard/dashboard", {aaa1:  allBooks, errorActive: "block", err:err, isAuthenticated: req.session.isLoggedIn});
    }
        
     
    
    

}
//module.exports=dbBooks;