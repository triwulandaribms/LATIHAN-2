
import {appendFile} from "node:fs/promises";

let alas= 8, tinggi = 10;
let hasil2 = alas*tinggi/2;

function segitiga(){
    console.log(`luas segitiga adalah ${hasil2}`);
}

segitiga();


try{
    await appendFile("data.txt",(`\n${hasil2.toString()}`),"utf8");
    console.log("berhasil menambah data");
}catch(err){
    console.log(`gagal menampilkan data, errorr:${err.message}`);
}