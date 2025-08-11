const { EmbedBuilder } = require('discord.js');
class BaseEmbed extends EmbedBuilder {
  constructor() {
    super();
    this.setColor('#ffffff');
    this.setTimestamp()
  }
}
module.exports = {
  test() {
  return new BaseEmbed()
    .setTitle(`Embeds`)
    .setDescription('Test')
},
};