const fs = require("node:fs");


const readFileCUstom = (filePath) => {
 try {
    const data = JSON.parse(fs.readFileSync(filePath));
    return data;
 } catch (error) {
    console.log("fayl o'qishda xatolik", erorr)

 }
};

const writeFileCUstom = (filePath, data) => {
 try {
    fs.writeFileSync(filePath, JSON.stringify);
    return "fayl yozildi";
 } catch (error) {
    console.log("fayl yozishda xatolik xatolik", erorr)
 }
};


module.exports = {
    writeFileCUstom,
    readFileCUstom
}