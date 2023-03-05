
/*
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
*/

//การ require ตัวแปรและFunction นอก Node Module แบบผ่านตัวแปร
/*
const requireExport = require("./requireExports");
requireExport.functionFristExport;
console.log(requireExport.variableFristExport);
*/

/*
//การ require ตัวแปรและFunction นอก Node Module แบบไม่ผ่านตัวแปร
const { variableFristExport, functionFristExport } = require("./requireExports");
functionFristExport();
console.log(variableFristExport);
*/

/*
//การ Module Exports ตัวแปรและFunction ไปใช้
const pets = require("./petExports");
const pets1 = new pets("Arpo", "Cat");
console.log(pets1);
*/

//Import-Export
/*
import PetsModule from "./petExports.js";
import {testExportVariable, fristExportFunction} from "./requireExports.js";
const pets1 = new PetsModule("Arpo", "Cat");
console.log(pets1);
console.log(testExportVariable);
fristExportFunction();
*/



//การรับค่าจาก cmd ด้วย process.argv
//node testNodeJS.js --s=tri --w=number1 --h=number2
/*
const minimist = require("minimist"); //<- import minimist
function triangleArea(width,height){
    console.log(1/2 * width * height);
    return 1/2 * width * height;
}

function rectangleArea(width,height){
    console.log(width*height);
    return width*height;
}

const inputUser = process.argv.slice(2);
const cleanInputUser = minimist(inputUser); //ทำ Array -> Object
console.log(cleanInputUser);
const {s, w, h} = cleanInputUser;

let area = 0;
if (s === "tri" && !isNaN(w) && !isNaN(h)){
    area = triangleArea(Number(w),Number(h));
    console.log(s + " area -> " + Number(area));
}else if (s === "rec" && !isNaN(w) && !isNaN(h)){
    area = rectangleArea(Number(w),Number(h));
    console.log(s + " area -> " + Number(area));
}else{
    console.log("try again !");
}
*/

//สร้าง Link MySQL connection string ด้วย process.env
const dbString = "mysql://root:pass1234@123.0.0.1:3306/mydb99";