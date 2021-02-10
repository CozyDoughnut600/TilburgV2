const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Jij hebt geen permissie hiervoor");
 
    if (!args[0]) return message.reply("Noem een bestaand nummer.");
 
    if (Number.isInteger(parseInt(args[0]))) {
 
        var aantal = parseInt(args[0]) + 1;
 
        message.channel.bulkDelete(aantal).then(() => { 
 
            if (args[0] == 0) {
 
                message.reply(`Sukkel, Ik kan toch niet 0 berichten verwijderen.`).then(msg => msg.delete({timeout: 6000}));
            
            } else if (args[0] == 1) {
            
                message.reply(`Ik heb een bericht verwijderd`).then(msg => msg.delete({timeout: 6000}));
            
            } else {
            
                message.reply(`*Tango Charlie, going Bravo*   Ik heb ${args[0]} berichten verwijderd.`).then(msg => msg.delete({timeout: 6000}));
            
            }
 
        });
 
    } else {
        return message.reply("Hoeveel berichten wil je dat ik verwijder?");
    }
    




}


module.exports.help = {

    name: "clear",
    description: "Verwijder berichten",
    category: "moderatie"

}