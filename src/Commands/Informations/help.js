const { SlashCommandBuilder, Guild, InteractionContextType } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Liste les commandes du bot')
    .setContexts(InteractionContextType.Guild),
    async execute(client, interaction) {
        interaction.reply({content: 'Commandes help ...',})
    }
}