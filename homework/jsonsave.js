const fs = require("fs");
let myObject = {
CompanyName: "DHL",
Location: "CA",
Zipcode: "94510",
TypeOFActivity: {
    activity1: "transportion",
    acitivy2: "mailing"
    
},
};

JSON.stringify();
let converted = JSON.stringify(myObject);

console.log("Saving object to file");
fs.writeFileSync("savedData.json", converted, "utf8");
console.log("Finished");

//let contents = fs.readfileSync("savedData.json", "utf8");
//console.log(typeof contents);