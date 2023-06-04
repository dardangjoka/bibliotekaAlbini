const conn = require("../util/db");
class Librat{
    constructor(titulli, isbn, autori, vitiIBotimit, cmimi, zhanri, isVisible, pdfLink, imgId, pershkrimiID){
        this.titulli = titulli;
        this.isbn = isbn;
        this.autori = autori;
        this.botimi = vitiIBotimit;
        this.cmimi = cmimi;
        this.zhanri = zhanri;
        this.isVisible = isVisible;
        this.pdfLink = pdfLink;
        this.imgId = imgId;
        this.pershkrimiID = pershkrimiID;
    
    }
    static async getAllBooks(){
        try{
            const [row, field] = await  conn.query(`
            SELECT l.id, titulli, autori, i.linku, z.zhanri 
            FROM librat l
            join image i on l.image_id=i.id
            join zhanri z on l.zhanri=z.id;`)
            return row;
        }
        catch(err){
            console.error(err);
            await conn.end();
        }

    }
}

module.exports = Librat;