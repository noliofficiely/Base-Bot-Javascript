const { Events, InteractionType, MessageFlags, PermissionsBitField } = require("discord.js");
const { logMidland, logSuccess, logError } = require('../../Functions/ConsoleLogger');
module.exports = {
    name: Events.InteractionCreate,
    once: false,
    async execute(client, interaction)
    {
        switch(interaction.type)
        {
            case InteractionType.ApplicationCommand:
            {
                if(interaction.isChatInputCommand())
                {
                    const command = client.commands.get(interaction.commandName);
                    if(!command) return logError(`Commande ${interaction.commandName} n'a pas de nom !`);

                    try { await command.execute(client, interaction); }
                    catch(error) { logError(error); };
                };
            }
            break;

            default: 
            {
                const name = interaction.customId.split("_")[0];
                const args = interaction.customId.split("_").slice(1);
                const file = client.interactions.find(i => i.name === name && i.type === interaction.componentType);
                if(!file) return logError(`[ERREUR] Interactions ${name} n'a pas de nom !`);

                if(file.permission && !interaction.member.permissions.has(new PermissionsBitField(file.permission))) return await interaction.reply({ content: `Vous n'avez pas la permission d'intéragir avec ce message !`, flags: MessageFlags.Ephemeral });
                try { await file.execute(client, interaction, ...args); } 
                catch(error) { 
                    logError(error); 
                };    
            }
            break;
        };
    },
};