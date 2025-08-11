const { Events } = require("discord.js");
const databaseLoader = require("../../Handlers/databaseLoader");
const { logError, logSucces, logInfo } = require('../../Functions/ConsoleLogger');
module.exports = {
    name: Events.ClientReady,
    once: true,
    async execute(client) {
        logInfo(`[CLIENT] ${client.user.tag} connecté`);
        await client.application.commands.set([...client.commands.map(cmd => cmd.data)]);

        client.db = await databaseLoader();
        if (client.db) logSucces('[BDD] Base de donnée connectée');
        else logError('[BDD] Erreur lors de la connexion');
    }
};