// const os =require("os")
// console.log(os)

// console.log(os.cpus())
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.platform());



const { error } = require("node:console")
const fs = require("node:fs")
const os = require("node:os")
// const content = fs.readFileSync("./example.txt", {encoding: "utf-8"})
// const json =fs.readFileSync("./server.json",{encoding: "utf-8"})
// console.log(JSON.parse(json));


// const newContent ="new content";

// fs.writeFileSync("./example.txt", newContent);

// const newJsonContent ={
//     brend:"toyota",
//     maxSpeed: 250,
// };


// fs.writeFileSync("./server.json", JSON.stringify(newJsonContent,null,4))

// sinxiron o'qish
 
//   const json = fs.readFileSync("./server.json",{encoding:"utf-8"});
// console.log(JSON.parse(json))
const newContent = "new contetnt"

console.log("start...");

fs.writeFile("./example.txt", newContent,(err)=>{
    if(err){
        throw new Error(err.message);
    }

    console.log("wrote successfully"); 
});

console.log("end...");


