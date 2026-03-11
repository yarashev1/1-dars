const express = require("express");
const fs = require("node:fs")

const app= express() 

app.get("/", (req,res) => {
    res.json({
        message: "Hello from server !",
    });
});

app.get("/tasks",(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./data/tasks.json"));
        res.json({
            success:true,
            data,
        });
});

app.get("/tasks/:id", ( req,res)=>{
    const tasksId = req.params.id;
    const data = JSON.parse(fs.readFileSync("./data/tasks.json"))

    const task = data.find((el)=> el.id == tasksId);


if ( !task){
    res.status(404).json({
        message:   `Berilgan id  ${tasksId} topilmadi  `,
    });
}

res.json({
    success: true,
    data : task,
 });

});

app.listen(3000,()=>{
    console.log(`runing on ${3000}`);
});