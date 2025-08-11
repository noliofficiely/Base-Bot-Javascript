const {ActivityType} = require('discord.js')
module.exports = client => {
    client.on('ready', client => { 

        setInterval(async () => {
            let statuses = [
                `état 1`,
                `état 2`,
                `état 3`
            ];
            let status = statuses[Math.floor(Math.random() * statuses.length)];
            client.user.setPresence({
                status: 'online',
                activities: [{
                    name: status,
                    type: ActivityType.Watching,
                    state: 'Status',
                }],
            })
        }, 3000); //SECONDES AVANT DE CHANGER DE STATUS
    });
}