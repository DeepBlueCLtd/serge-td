var AdmZip = require('./adm-zip');
var zip;

console.log("installing backend modules");
zip = new AdmZip('./node_modules.zip')
zip.extractAllTo("../node_modules/", true);
console.log("installing backend modules (success)");

console.log("installing frontend modules");
zip = new AdmZip('./node_modules_frontend.zip')
zip.extractAllTo("../client/node_modules/", true);
console.log("installing frontend modules (success)");
