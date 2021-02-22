const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_SERVER")) return message.reply("You don't have the perms for this.");


    if (!args[0]) return message.reply("Geef een nieuwe slowmode");


    var slowmode = args[0];



    message.channel.setRateLimitPerUser(slowmode);
    message.channel.send(`Slowmode is nu ${slowmode}s`)



}   





module.exports.help = {

    name: "slowmode",
    description: "Verander de slowmode",
    category: "moderatie"

}