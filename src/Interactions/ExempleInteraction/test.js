const { ComponentType } = require("discord.js");
const embed = require('../../Embeds/index')
module.exports = {
    name: 'exemple',
    type: ComponentType.Button,
    //permission: PermissionFlagsBits.Administrator (optionel)
    async execute(client, interaction) {
        interaction.reply({content: 'test', embeds: [embed.test()]})
    }
}