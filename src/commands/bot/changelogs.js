const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: "📃・Changelogs",
        desc: `_____`,
        thumbnail: client.user.avatarURL({ size: 1024 }),
        fields: [{
            name: "📃┆Changelogs",
                value: '03/14/2024 - Updated the bot to the latest version of discord.js (v14)',
                inline: false,
            },
        ],
        type: 'editreply'
    }, interaction)
}

 
