const conn = require("../util/db");
const bcrypt = require('bcrypt');

async function encryptPassword(password){
    const hash= await bcrypt.hash(password, 10);
    return hash;
}
class Users{
    constructor(emrin, mbiemri, email, passwordi, privilegji, user_image, bio){
                    this.emrin=emrin;
                    this.mbiemri=mbiemri;
                    this.email=email;
                    this.passwordi=passwordi;
                    this.privilegji=privilegji;
                    this.user_image=user_image;
                    this.bio=bio;
    }
    async createUser(){
        this.passwordi= await encryptPassword(this.passwordi);
        const query = 'INSERT INTO libraria.userat SET ?';
        const [results] = await conn.query(query, this);
        return results;
    }

    async getUser(id){
        const query = 'SELECT FROM userat WHERE id = ?';
        const [results] = await conn.query(query, [id]);
        return results;
    }

    static async deletaUser(id){
        const query = 'DELETE FROM userat WHERE id = ?';
        const [results] = await conn.query(query, [id]);
        return results.affectedRows;
    }

    async printo(){
        this.passwordi= await encryptPassword(this.passwordi);
        console.log(this);
    }
    static async getAllUsers(){
        try{
            const [row, field] = await  conn.query(`
            SELECT id, emrin, mbiemri, email, passwordi, privilegji 
            FROM userat`)
            return row;
        }
        catch(err){
            console.error(err);
        }

    }


}

module.exports = Users;