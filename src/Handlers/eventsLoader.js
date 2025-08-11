const { glob } = require("glob");
const path = require("path");
const { logSucces, logError } = require('../Functions/ConsoleLogger');
module.exports = async client => 
{
    const eventsFiles = (await glob("./src/Events/**/*.js")).map((filePath) => path.resolve(filePath));

    eventsFiles.map(async file => 
        {
            const event = require(file);
            if(!event.name) return logError(`Le fichier ${file.split("/").pop()} n'a pas de propriété name!`);
            
            if(event.once) 
            {
                client.once(event.name, (...args) => event.execute(client, ...args));
            }
            else
            {
                client.on(event.name, (...args) => event.execute(client, ...args));
            };
        },
    );
    logSucces(`[EVENTS] ${eventsFiles.length} Events chargées !`);
};