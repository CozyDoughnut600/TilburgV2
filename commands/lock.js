const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if (!message.member.hasPermission("MANAGE_SERVER")) return message.reply("jij hebt geen permissie hiervoor");

if (!message.guild.me.hasPermission("MANAGE_SERVER")) return message.channel.send("Error: no perms");


    await message.channel.overwritePermissions([

        {
            id: message.guild.roles.cache.find(r => r.name == "@everyone").id,
            deny: ['SEND_MESSAGES']

        }
    ]);

    message.channel.send("Kanaal in lockdown :lock:");

}


module.exports.help = {

    name: "lock",
    description: "Lock een kanaal",
    category: "moderatie"

}