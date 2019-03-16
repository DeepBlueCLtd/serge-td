var AdmZip = require('./adm-zip');
var zip = new AdmZip();
zip.addLocalFolder("../node_modules");
zip.writeZip("./node_modules.zip");
