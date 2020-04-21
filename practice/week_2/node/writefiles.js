
const fs = require("fs");

fs.writeFileSync("writtenbyjs.txt", "Information from JS.", "utf8");
fs.appendFileSync("writtenbyjs.txt", "this is to update my file fot test", "utf8");
