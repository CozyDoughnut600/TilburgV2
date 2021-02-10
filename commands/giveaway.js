const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var item = "";
    var time;
    var winnerCount;

    if (!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Jij hebt geen permissie hiervoor");

    if (!winnerCount) return message.reply("Geef een aantal winnaars op");
    if (!time) return message.reply("Geef een tijd op");
    if (!item) return message.reply("Wat kan je winnen?");

    winnerCount = args[0];
    time = args[1];
    item = args.splice(2, args.length).join(" ");

    message.delete();

    var date = new Date().getTime();
    var dateEnd = new Date(date + (time * 1000));

    var giveawayEmbed = new discord.MessageEmbed()
        .setTimestamp

}


module.exports.help = {

    name: "giveaway",
    description: "Lock een kanaal",
    category: "moderatie"

}