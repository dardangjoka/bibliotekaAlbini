const conn = require("../util/db");

class BookCollection{
    constructor(userat_id, librat_id){
        this.userat_id=userat_id;
        this.librat_id= librat_id;
    }

    async getBookCollection(){
        const query = 'SELECT k.id, u.id, l.id, l.titulli, l.autori,l.zhanri ,u.emrin, u.mbiemri FROM libraria.koleksioni k join userat u on k.userat_id=u.id join librat l on k.librat_id=l.id WHERE u.id = ?';
        const [results] = await conn.query(query, [this.userat_id]);
        return results;
    }

    async getABook(book_id){
        const query = 'INSERT INTO libraria.koleksioni (userat_id, librat_id) VALUES (?, ?)';
        const [results] = await conn.query(query, [this.userat_id, book_id]);
        return results.insertId;
    }
}

module.exports = BookCollection;

