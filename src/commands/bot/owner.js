const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `Youzarx`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `<@780906998962061343>`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `GP Studio`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `(https://linktr.ee/youssefhanin)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 
