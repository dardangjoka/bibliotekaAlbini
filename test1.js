// const test = require("./util/db");
// // E thirra nje njga connection poolsat qe eshte krujuar ne db.js si promiss
// // pastas thirra metoden query per te egzekutuar nje mysql query
// // edhe meqense querry metoda e kthen nje promiss e perdora metoden .then qe e ka nje paramerter array te cilin e kam destruktuar dy anetare
// // dhe pastaj kam mbyllyr poolin duke perdorur pool.end()

// //id:1, titulli:"Beni ecen nuk vetem", autori:"Fan Noli", img:"/img/img1.jpg", zhanri:"femij"
// test.query(`SELECT l.id, titulli, autori, i.linku, z.zhanri 
//             FROM librat l
//             join image i on l.image_id=i.id
//             join zhanri z on l.zhanri=z.id
// ;`)
//     .then(([rows,fields])=>{
//          console.log(rows);})
//     .then(()=>test.end());

const Librat = require('./models/libra');

 async function getBook(){
     console.log(await Librat.getAllBooks());
}

getBook();


