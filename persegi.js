import {writeFile} from "node:fs/promises";


let sisi = 5; 
let hasil1 = sisi*sisi;



function persegi(){
    console.log(`luas persegi adalah ${hasil1}`);
}


persegi();


try{
    await writeFile(`data.txt`,hasil1.toString(),`utf8`);
    console.log("berhasil menampilkan");
}catch(err){
    console.log(`gagal memuat, error:${err.message}`);
}


