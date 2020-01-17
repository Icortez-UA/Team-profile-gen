const fs = require("fs");
const path = require("path");
const util = require("util");


const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");


const templatesDir = path.resolve(__dirname, "../templates");

const buildDir = path.resolve(__dirname, "../output/");


const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);



