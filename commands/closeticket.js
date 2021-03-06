const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const categoryId = "806523102246731886";

    var embedVerifictaion = new discord.MessageEmbed()
    .setTitle("Ticket " + message.channel.name)
    .setDescription("Wil je dit ticket sluiten?")



    if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Je hebt geen perms");
    
    if (message.channel.parentID == categoryId) {
  //embed verification
        message.channel.send(embedVerifictaion).then(async msg => {

            var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);


            // We kijken dat het de gebruiker is die het als eerste heeft uitgevoerd.
            // message.channel.awaitMessages(m => m.author.id == message.author.id,
            //     { max: 1, time: 30000 }).then(collected => {

            //         if (collected.first().content.toLowerCase() == 'yes') {
            //             message.reply('Kick speler.');
            //         }
            //         else
            //             message.reply('Geanuleerd');

            //     }).catch(() => {
            //         message.reply('Geen antwoord na 30 sec, geanuleerd.');
            //     });


            if (emoji === "✅") {

                msg.delete();
                message.channel.delete();

                var embedCreateTicket = new discord.MessageEmbed()
                .setTitle("Ticket " + message.channel.name)
                .setDescription("Ticket gesloten")
                .setColor("#005eff")
            
            var logChannel = message.member.guild.channels.cache.get("808626470201196594");

            if (!logChannel) return message.reply("kan geen log kanaal vinden..");
            
            logChannel.send(embedCreateTicket);
            


            } else if (emoji === "❌") {

                msg.delete();

                message.reply("Ticket heropend").then(m => m.delete(5000));

            }

        });







        
    } else {

        message.channel.send("Je kan dit command alleen in een ticket kanaal gebruiken.");
    }


}


// Emojis aan teksten kopellen.
async function promptMessage(message, author, time, reactions) {
    // We gaan eerst de tijd * 1000 doen zodat we seconden uitkomen.
    time *= 1000;
    
    // We gaan ieder meegegeven reactie onder de reactie plaatsen.
    for (const reaction of reactions) {
        await message.react(reaction);
    }
    
    // Als de emoji de juiste emoji is die men heeft opgegeven en als ook de auteur die dit heeft aangemaakt er op klikt
    // dan kunnen we een bericht terug sturen.
    const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;
    
    // We kijken als de reactie juist is, dus met die filter en ook het aantal keren en binnen de tijd.
    // Dan kunnen we bericht terug sturen met dat icoontje dat is aangeduid.
    return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);
    }

module.exports.help = {

    name: "closeticket",
    description: "Close ticket",
    category: "tickets"

}


