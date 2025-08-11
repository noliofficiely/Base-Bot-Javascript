const { glob } = require("glob");
const path = require("path");
const { logSucces, logError } = require('../Functions/ConsoleLogger');
module.exports = async client => 
{
    const commandFiles = (await glob("./src/Commands/**/*.js")).map((filePath) => path.resolve(filePath));
    
    commandFiles.map(async file => 
        {
            const command = require(file);
            if(!command.data.name) return logError(`Le fichier ${file.split("/").pop()} n'a pas de propriété name!`);
            client.commands.set(command.data.name, command);
        },
    );
    logSucces(`[COMMANDES] ${commandFiles.length} Commandes chargées !`);
};