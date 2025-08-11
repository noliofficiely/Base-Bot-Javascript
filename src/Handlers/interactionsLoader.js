const { glob } = require("glob");
const path = require("path");
const { logSucces, logError } = require('../Functions/ConsoleLogger');
module.exports = async client =>
{
    const interactionsFiles = (await glob("./src/Interactions/**/*.js")).map((filePath) => path.resolve(filePath));

    interactionsFiles.map(async file => 
        {
            const interaction = require(file);
            if(!interaction.name) return logError(`Le fichier ${file.split("/").pop()} n'a pas de propriété name!`);
            client.interactions.set(interaction.name, interaction);
        },
    );
    logSucces(`[INTERACTIONS] ${interactionsFiles.length} Interactions chargées !`);
};