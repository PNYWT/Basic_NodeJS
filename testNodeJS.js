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
// importing environmental variables
/*
import dotenv  from "dotenv" //<- มันคือ require dotenv
import express from "express"
dotenv.config()
const {MYSQL_USERNAME,MYSQL_PASSWORD,MYSQL_HOSTNAME,MYSQL_PORT,MYSQL_DB} = process.env

const dbString = `mysql://${MYSQL_USERNAME}:${MYSQL_PASSWORD}@${MYSQL_HOSTNAME}:${MYSQL_PORT}/${MYSQL_DB}`;
console.log(dbString);
*/

//HTTP Server สร้างแบบไม่ใช้ Lib
/*
import dotenv from "dotenv";
dotenv.config();
import http from "http";
import mysql from "mysql2/promise";

//NodeJS เชื่อมกับ DataBase MySQL
const {
  APP_PORTDEV,
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  MYSQL_HOSTNAME,
  MYSQL_PORT,
  MYSQL_DB,
} = process.env;
const dbString = `mysql://${MYSQL_USERNAME}:${MYSQL_PASSWORD}@${MYSQL_HOSTNAME}:${MYSQL_PORT}/${MYSQL_DB}`;

async function startApp() {
  const db = await mysql.createConnection(dbString);

  const server = http.createServer(async (request, response) => {
    const { method, url } = request;
    let content = "";

    if (method === "GET" && url === "/") {
        const results = await db.query("SELECT * FROM Todo");
        const resultsString = results[0].map((item) => `<p>${item.title}</p>`).toString(); //return มาเป็น Array
        content = "<h1>Hello HomePage</h1>" + resultsString;
        response.setHeader("Content-Type", "text/html; charset=UTF-8");
        response.statusCode = 200; //ใช้งานได้
        response.end(content);
    } else if (method === "GET" && url === "/about") {
        content = "<h1>Hello About</h1>";
        response.setHeader("Content-Type", "text/html; charset=UTF-8");
        response.statusCode = 200;
        response.end(content);
    }
  });

  server.listen(APP_PORTDEV, () => {
    //สั่ง start Server
    console.log(`Server is start !!!, on PORT -> ${APP_PORTDEV}`);
  });
}
startApp();
*/

//Read File
/*
import dotenv from "dotenv";
dotenv.config();
import http from "http";
import fs from "fs";
import path from "path";
import { marked } from 'marked';
const {APP_PORTDEV} = process.env;

function startApp() {
  const server = http.createServer(async (request, response) => {
    const { method, url } = request;
    let content = "";

    if (method === "GET" && url === "/") {
        try {
            content = fs.readFileSync(path.resolve("fileText", "home.md"), "utf-8");
            content = marked(content);
        } catch(error){
            console.error(error);
        }
        response.setHeader("Content-Type", "text/html; charset=UTF-8");
        response.statusCode = 200; //ใช้งานได้
        response.end(content);
    }
  });
  server.listen(APP_PORTDEV, () => {
    //สั่ง start Server
    console.log(`Server is start !!!, on PORT -> ${APP_PORTDEV}`);
  });
}
startApp();
*/

//Write File
import dotenv from "dotenv";
dotenv.config();
import http from "http";
import fs from "fs";
const {APP_PORTDEV} = process.env;

function startApp() {
  const server = http.createServer(async (request, response) => {
    const { method, url } = request;
    let content = "";
    fs.writeFileSync("request.log", "test write");

    if (method === "GET" && url === "/") {
        response.setHeader("Content-Type", "text/html; charset=UTF-8");
        response.statusCode = 200; //ใช้งานได้
        response.end(content);
    }
  });
  server.listen(APP_PORTDEV, () => {
    //สั่ง start Server
    console.log(`Server is start !!!, on PORT -> ${APP_PORTDEV}`);
  });
}
startApp();