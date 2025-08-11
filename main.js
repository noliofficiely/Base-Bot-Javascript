const { Client, Collection, IntentsBitField } = require("discord.js");
const eventsLoader = require("./src/Handlers/eventsLoader.js");
const commandsLoader = require("./src/Handlers/commandsLoader.js");
const interactionsLoader = require("./src/Handlers/interactionsLoader.js");
const componentsLoader = require("./src/Handlers/componentsLoader.js");
const client = new Client({intents: new IntentsBitField(3276799)});
require("dotenv").config();

client.commands = new Collection();
client.interactions = new Collection();
client.components = new Collection();

commandsLoader(client); 
eventsLoader(client); 
interactionsLoader(client); 
componentsLoader(client);

client.utils = {
    SetStatus: require('./src/Functions/StatusClient.js')
}

client.assets = {
    footer: `Votre footer d'embed`,
    color: `Votre couleur d'embed`,
    title: `Votre titre d'embed`
    // ETC... RAJOUTEZ AUTANT DE PARAMETRES QUE VOUS VOULEZ
}

client.utils.SetStatus(client)

client.login(process.env.TOKEN); 