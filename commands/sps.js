const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    // sps steen, papier, schaar
 
    if (!args[0]) return message.reply("Gebruik: `steen, paper, scissors`");
 
    var options = ["steen", "papier", "schaar"];
 
    var result = options[Math.floor(Math.random() * options.length)];
 
    if (args[0].toUpperCase() == "STEEN") {
 
        if (result == "papier") {
 
            return message.channel.send(`Ik heb ${result} :notepad_spiral:, Ik win!`);
 
        } else if (result == "schaar") {
 
            return message.channel.send(`Ik heb ${result} :scissors:, jij wint!`);
 
        } else if (result == "steen") {
 
            return message.channel.send(`Ik heb ${result} :rock:, Tie!`);
 
        }
 
    }
    else if (args[0].toUpperCase() == "PAPIER") {
 
        if (result == "schaar") {
 
            return message.channel.send(`Ik heb ${result} :scissors:, Ik win!`);
 
        } else if (result == "steen") {
 
            return message.channel.send(`Ik heb ${result} :rock:, jij wint!`);
 
        } else if (result == "papier") {
 
            return message.channel.send(`Ik heb ${result} :notepad_spiral:, tie!`);
 
        }
 
    } else if (args[0].toUpperCase() == "SCHAAR") {
 
        if (result == "steen") {
 
            return message.channel.send(`Ik heb ${result} :rock:, Ik win!`);
 
        } else if (result == "papier") {
 
            return message.channel.send(`Ik heb ${result} :notepad_spiral:, jij wint!`);
 
        } else if (result == "schaar") {
 
            return message.channel.send(`Ik heb ${result} :scissors:, Gelijkspel!`);
 
        }
 
    }


}


module.exports.help = {

    name: "sps",
    description: "Steen, papier schaar!",
    category: "fun"

}