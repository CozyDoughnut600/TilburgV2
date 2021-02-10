const discord = require("discord.js");
const botConfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    var commandList = [];
    var prefix = botConfig.prefix;

    bot.commands.forEach(command => {

        var constructor = {
            name: command.help.name,
            description: command.help.description,
            category: command.help.category

        }

        commandList.push(constructor);
    });
    var response = "**commands**\n";
    var moderatie = "\n**moderatie**\n";
    var tickets = "\n**Tickets**\n";

    for (let i = 0; i < commandList.length; i++) {
        const command = commandList[i];

        if(command["category"] == "moderatie") {

            moderatie += `${prefix}${command["name"]} - ${command["description"]}\n`;
        }else if(command["category"] == "tickets") {

            tickets += `${prefix}${command["name"]} - ${command["description"]}\n\n`;
        }
    }

   
    response += moderatie;
    response += tickets;

var helpEmbed = new discord.MessageEmbed()
    .setTitle('Help')
    .setColor("#005eff")
    .setDescription(response)
    .setTimestamp();



    message.author.send(helpEmbed).then(() => {
        message.channel.send(":white_check_mark: Ik heb je gedmed met mijn commands!");

    }).catch(() => {
        message.channel.send(":x: Ik kan je niet dmen");
    });
}


module.exports.help = {

    name: "help",
    description: "Geeft commands",
    category: "Info"

}