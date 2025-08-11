const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports =  {
    name: "ExempleButton",
    create: (client, userId) =>
    {
        return new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setLabel('test')
            .setCustomId(`exemple_${userId}`)
            .setStyle(ButtonStyle.Secondary)
        );
    },
};
