var AdmZip = require('./adm-zip');
var zip = new AdmZip('./node_modules.zip');

zip.extractAllTo("../node_modules/", true);
