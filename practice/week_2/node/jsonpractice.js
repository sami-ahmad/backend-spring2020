//JSON: Javascript object Notation before Jsan we had XML.
const fs = require("fs");
let myObject = {
myName: "sami",
myJob: "sleep",
favFood: {
    fodd1: "tacos",
    food2: "qabeli",
    food3: "mantoo"
},


};

JSON.stringify();

let converted = JSON.stringify(myObject);

console.log("Saving object to file");
fs.writeFileSync("savedData.json", converted, "utf8");
console.log("Finished");

//let contents = fs.readfileSync("savedData.json", "utf8");
//console.log(typeof contents);



