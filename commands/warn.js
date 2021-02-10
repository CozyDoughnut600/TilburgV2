const discord = require("discord.js");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));


module.exports.run = async (bot, message, args) => {

    //check perms
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Jij hebt geen permissie hiervoor");

    if (!args[0]) return message.reply("Mention iemand om te warnen.");

    if (!args[1]) return message.reply("Geef een reden.");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Ik kan niet warnen");

    var warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (warnUser.id === message.author.id) return message.reply("Je kan jezelf niet warnen");

    var reason = args.slice(1).join(" ");

    if (!warnUser) return message.reply("Mention een bestaand persoon");

    if (warnUser.hasPermission("ADMINISTRATOR")) return message.reply("Sorry, Je kan deze persoon niet warnen");


    // al warns?

    if (!warns[warnUser.id]) warns[warnUser.id] = {
        warns: 0

    };

    warns[warnUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err); 

    });


    var embed = new discord.MessageEmbed()
         .setTitle("**Warn**")
         .setColor("#ff0000")
         .setThumbnail(warnUser.user.displayAvatarURL)
         .setFooter(message.member.displayName, message.author.displayAvatarURL)
         .setTimestamp()
         .setDescription(`** User:** ${warnUser} (${warnUser.id})
         **Moderator:** ${message.author}
         **Reden: ** ${reason}`)
         .addField("Warnings: ", warns[warnUser.id].warns);
         


    var channel = message.member.guild.channels.cache.get("808626470201196594");

    if(!channel) return;

    channel.send(embed);
    message.channel.send(embed).then(msg => msg.delete({timeout: 10000 }));

}


module.exports.help = {

    name: "warn",
    description: "Warn iemand",
    category: "moderatie"

}