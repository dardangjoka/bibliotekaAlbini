const dbBookProfile={titulli:"Beni ecen vetem", autori:"Fan Noli", img:"/img/img1.jpg"};
const Librat = require('../models/libra');

exports.getBookProfile=(req, res)=>{
    const id=req.params.id;
    const libriIDerguar=dbBooks[id-1];
    res.render("librat/profiliILibrit", {libri:libriIDerguar});
}

exports.getAllBooks=async (req, res)=>{
    const dbBooks = Librat.getAllBooks();    
    const zhanri = req.query;
    let zhanriAktiv = "clear";
    if(!(Object.keys(zhanri).length === 0) && zhanri.zhanri!=="clear"){
        zhanriAktiv=zhanri.zhanri;
        const array = await Librat.getAllBooks();
        filterdBooks= array.filter((c)=>{ return zhanri.zhanri === c.zhanri;});
        return res.render("librat/index",{titulliIfaqes:"Librat me zhaner: " + zhanri.zhanri, active: zhanriAktiv, librat:  await filterdBooks});
    }
    res.render("librat/index",{titulliIfaqes:"Te gjitha librat", librat: await dbBooks, active: zhanriAktiv})
}

//module.exports=dbBooks;