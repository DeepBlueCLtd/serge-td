var AdmZip = require('./adm-zip');
var zip;

console.log("Write Zip: backend modules");
zip = new AdmZip();
zip.addLocalFolder("../node_modules");
zip.writeZip("./node_modules.zip");
console.log("Write Zip: backend modules (success)");

console.log("Write Zip: frontend modules");
zip = new AdmZip()
zip.addLocalFolder("../client/node_modules");
zip.writeZip("./node_modules_frontend.zip");
console.log("Write Zip: frontend modules (success)");


console.log("Write Zip: project");
zip = new AdmZip()
zip.addLocalFolder("../");
zip.writeZip("../project.zip");
console.log("Write Zip: project (success)");
console.log("You can found it on project root directory");
console.log("myProjectFolder/project.zip");
