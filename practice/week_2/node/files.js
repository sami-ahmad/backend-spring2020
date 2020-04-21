const fs = require("fs");
const file = "practice.txt";
if (fs.existsSync(file)) {
    console.log("file" + file + " asfound! ");
    let data = fs.readFileSync(file, "utf8");
    console.log("The contecnt fo the file are:" + data);

} else {
    console.log("file '" + file + "' was not found ");
    console.log("creating file with the name '" + file + "'");
    fs.writeFileSync(file, "", "utf8");
    console.log("Finshed creating file");


}