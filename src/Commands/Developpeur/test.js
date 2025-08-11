const { SlashCommandBuilder, Guild, InteractionContextType } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('test')
    .setDescription('commande de test')
    .setContexts(InteractionContextType.Guild),
    async execute(client, interaction) {
        interaction.reply({content: 'test', components: [client.components.get("ExempleButton").create(client, interaction.user.id)]})
    }
}