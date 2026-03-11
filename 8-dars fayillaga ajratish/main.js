const express = require("express");
const path = require("node:path")
const { readFileCUstom, writeFileCUstom} = require("./helpers/fs");

const app = express();
const CLASSES_PATH=path.join(process.cwd(), "data", "classes.json");
const STUDENTS_PATH=path.join(process.cwd(), "data", "students.json");

app.get("/classes", ( req,res)=>{
    const data = readFileCUstom(CLASSES_PATH);

    res.send({
        success: true,
        data,
    });
});

const PORT = 3000;
app.listen(PORT, ()=> {
    console.log(`listining on ${PORT}`);
});