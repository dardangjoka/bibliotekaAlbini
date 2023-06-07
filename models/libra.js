const conn = require("../util/db");
const zhanriEnum = require("./zhanri");

class Librat{
    constructor(titulli, isbn, autori, vitiIBotimit, cmimi, zhanri, isVisible, pdfLink, imgId, pershkrimiID){
        this.titulli = titulli;
        this.isbn = isbn;
        this.autori = autori;
        this.viti_botimit = vitiIBotimit;
        this.cmimi = cmimi;
        this.zhanri = zhanri;
        this.is_visible = isVisible;
        this.pdf_link = pdfLink;
        this.image_id = imgId;
        this.pershkrimi_id = pershkrimiID;
    }


    async createBook(){
     
            const query = 'INSERT INTO libraria.librat SET ?';
            const [results] = await conn.query(query, this);
            return results.insertId;
    }

    getBook(){
        console.log(this);
    }

    static async deletaABook(id){
    const query = 'DELETE FROM librat WHERE id = ?';
    const [results] = await conn.query(query, [id]);
    return results.affectedRows;
    }

    static async getAllBooks(){
        try{
            const [row, field] = await  conn.query(`
            SELECT l.id, titulli, autori, i.linku, z.zhanri, l.is_visible
            FROM librat l
            join image i on l.image_id=i.id
            join zhanri z on l.zhanri=z.id;`)
            return row;
        }
        catch(err){
            console.error(err);
        }

    }
}

module.exports = Librat;