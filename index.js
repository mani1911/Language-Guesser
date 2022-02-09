// importing franc
import { franc } from 'franc';
// making the require() available
import { createRequire } from "module";
const require = createRequire(import.meta.url);
// importing langs
const langs = require('langs');

let statement = process.argv.slice(2).join(" ");

let code = franc(statement);
if(code == "und"){
    console.log("Could not Recognise Language.")
}
else{
    let lang = langs.where("3",code);
    console.log(lang.name);
}