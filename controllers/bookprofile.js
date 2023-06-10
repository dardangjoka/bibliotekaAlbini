const Librat = require('../models/libra');

exports.getBookProfile =async (req, res)=>{
    const id=req.params.id;
    const libriIDerguar= await Librat.getAllBooks();
    const libriIFLitruar=libriIDerguar.filter(c=>{return c.id==id});
    const [libriIVetem]= libriIFLitruar;
    console.log(req.session.user.privilegji)
    res.render("librat/profiliILibrit", {libri: libriIVetem, librrrr:libriIDerguar, isAuthenticated: req.session.isLoggedIn, privilege:req.session.user.privilegji});
}

exports.deleteABook =async (req, res)=>{
    var errori='';
    try{
        await Librat.deletaABook(req.params.id);
    }catch(err){
        errori= err;
    }
   // await Librat.deletaABook(req.params.id);
    await res.render("dashboard/dashboard", {aaa1:  Librat.getAllBooks(), isAuthenticated: req.session.isLoggedIn, err:errori});
}

exports.getAllBooks = async (req, res)=>{
    const dbBooks = Librat.getAllBooks();    
    const zhanri = req.query;
    let zhanriAktiv = "clear";
    if(!(Object.keys(zhanri).length === 0) && zhanri.zhanri!=="clear"){
        zhanriAktiv=zhanri.zhanri;
        const array = await Librat.getAllBooks();
        filterdBooks= array.filter((c)=>{ return zhanri.zhanri === c.zhanri;});
        return res.render("librat/index",{titulliIfaqes:"Librat me zhaner: " + zhanri.zhanri, active: zhanriAktiv, librat:  await filterdBooks, isAuthenticated: req.session.isLoggedIn,privilege:req.session.user.privilegji});
    }
    res.render("librat/index",{titulliIfaqes:"Te gjitha librat", librat: await dbBooks, active: zhanriAktiv, isAuthenticated: req.session.isLoggedIn,privilege:req.session.user.privilegji})
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
        await res.render("dashboard/dashboard", {aaa1:  allBooks, errorActive: "none", isAuthenticated: req.session.isLoggedIn});
    }catch(err){
        const allBooks= await Librat.getAllBooks();
        await res.render("dashboard/dashboard", {aaa1:  allBooks, errorActive: "block", err:err, isAuthenticated: req.session.isLoggedIn});
    }
        
}



exports.updateAbook = async (req, res)=>{
    const titulli=req.body.titulli;
    const autori=req.body.titulli;
    const zhanri=req.body.titulli;

}

exports.getUpdateBookProfile= async(req, res)=>{
    const id=req.params.id;
    try{
        const libriIDerguar= await Librat.getAllBooks();
        const libriIFLitruar=libriIDerguar.filter(c=>{return c.id==id});
        const [libriIVetem] = libriIFLitruar;
        console.log(libriIVetem);
        await res.render("librat/libri", {libri: libriIVetem});

    }
    catch(err){
        console.log(err);
    }
}
//module.exports=dbBooks;