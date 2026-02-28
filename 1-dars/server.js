// const http = require("node: http")

// const server = http.createServer((req,res)=>{
//     console.log("so'rov keldi");

//     res.end("hello from server!")
    
// })

// server.listen(3000, ()=>{
//     console.log("server is running on",3000);
// })


// const http = require("http");

// const server = http.createServer((req, res) => {
//     console.log("so'rov keldi...");


//     const method= req.method
//     const url = req.url.split("/")

//     if (url[1]==="todos"){
//         if(url[2]){
//             res.writeHead(200,{"content-type": "text/plain"});
//             res.end(`${url[2]}- todo!`);
//             return

//         }
//         res.writeHead(200,{"content-type": "text/plain"})
//     res.end("barcha todolar");
//     return;
//     }

//     res.writeHead(200,{"content-type": "text/plain"})
//     res.end("hello from server!");
// });

// const PORT=3000
// server.listen(PORT, () => {
//     console.log("server is running on: ", PORT);
// })


const fs = require("fs");
const path =require("path");

const dataFolderPath = path.join
( __dirname,"data",);
const dataFilePath = path.join(dataFolderPath, "data.json")

if(!fs.existsSync(dataFolderPath)){
    fs.mkdirSync(dataFolderPath);
    console.log("data papka yaratildi");
}else{
    console.log("data papka allaqachon yaratilgan");
    
}

if(!fs.existsSync(dataFilePath)){
    const users =[
         {
            id: 1,
            ism: "Ali",
            age: 22,
            year: 2003,
            profession: "Frontend Developer"
        },
        {
            id: 2,
            ism: "Vali",
            age: 25,
            year: 2000,
            profession: "Backend Developer"
        },
        {
            id: 3,
            ism: "Hasan",
            age: 28,
            year: 1997,
            profession: "Fullstack Developer"
        }
    ];

    fs.writeFileSync(dataFilePath, JSON.stringify(users, null,4));
    console.log("data.json file yaratildi va userlar qqo'shdi");
}else{
    console.log("data.json allaqachon mavjud");
    
}

function getUsers(){
    const data = fs.readFileSync(dataFilePath, "utf-8");
    return JSON.parse(data)
}

function addUser(newUser){
    const users = getUsers();

    users.push(newUser);
    fs.writeFileSync(dataFilePath, JSON.stringify(users, null, 4));

    console.log("Yangi user qo'shildi ✅");
}

addUser({
    id: 4,
    ism: "Sardor",
    age: 30,
    year: 1995,
    profession: "DevOps Engineer",
    married: true,
    nation: "Uzbek",
    city: "Tashkent"
});


if (fs.existsSync(dataFilePath)) {
    fs.unlinkSync(dataFilePath);
    console.log("data.json ochirildi ✅");
} else {
    console.log("data.json fayl mavjud emas ");
}