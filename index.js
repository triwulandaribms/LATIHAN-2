import http from "node:http";

const server = http.createServer((req,res)=>{
    if(req.url === "/a" && req.method === "GET"){
        res.end("hi, selamat datang di nodeJs");
    }else if(req.url === "/b" && req.method === "POST"){
        res.end("anda berhasil menambah")
    }else if(req.url === "/c" && req.method === "DELETE"){
        res.end("anda berhasil menghapus")
    }else {
        res.end("not found");
    }
});
 
server.listen(3000, ()=> console.log("server sedang berjalan"));
