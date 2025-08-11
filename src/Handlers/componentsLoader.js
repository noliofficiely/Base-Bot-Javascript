const { glob } = require("glob");
const path = require("path");
const { logSucces, logError } = require('../Functions/ConsoleLogger');
module.exports = async client =>
{
    const componentsFiles = (await glob("./src/Components/**/*.js")).map((filePath) => path.resolve(filePath));

    componentsFiles.map(async file => 
        {
            const component = require(file);
            if(!component.name) return logError(`Le fichier ${file.split("/").pop()} n'a pas de propriété name!`);
            client.components.set(component.name, component);
        },
    );
    logSucces(`[COMPONENTS] ${componentsFiles.length} Components chargées !`);
};