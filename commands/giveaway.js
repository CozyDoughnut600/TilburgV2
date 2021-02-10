const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var item = "";
    var time;
    var winnerCount;

    if (!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Jij hebt geen permissie hiervoor");

    winnerCount = args[0];
    time = args[1];
    item = args.splice(2, args.length).join(" ");   

    if (!winnerCount) return message.reply("Geef een aantal winnaars op");
    if (!time) return message.reply("Geef een tijd op");
    if (!item) return message.reply("Wat kan je winnen?");



    message.delete();

    var date = new Date().getTime();
    var dateEnd = new Date(date + (time * 1000));

    var giveawayEmbed = new discord.MessageEmbed()
        .setTitle("🎉 **Giveaway** 🎉")
        .setFooter(`Eindigt: ${dateEnd}`)
        .setDescription(`Win ${item}!`);


    var embedSend = await message.channel.send(giveawayEmbed);
    embedSend.react("🎉");


    setTimeout(function(){

        var random = 0;
        var winners = [];
        var inList = false;

        var peopleReacted = embedSend.reactions.cache.get("🎉").users.cache.array();

        for (let i = 0; i < peopleReacted.length; i++) {

            if (peopleReacted[i].id == bot.user.id) {
                peopleReacted.splice(i,1);
                continue;
            }
        }

        if (peopleReacted == 0){
            return message.channel.send("Geen winnaars, ik win!");
        }

        if (peopleReacted.length < winnerCount) {
            return message.channel.send("Te weinig mensen deden mee, ik win!");
        }

        for (let y = 0; y < winnerCount; y++) {

            inList = false;

            random = Math.floor(Math.random() * peopleReacted.length);

            for (let o = 0; o < winners.length; o++) {

                if (winners[o] == peopleReacted[random]){
                    inList = true;
                    y--;
                    break;
                }
            }

            if (!inList) {
                winners.push(peopleReacted[random]);
            }
        }

        for (let y = 0; y < winners.length; y++) {

            message.channel.send("Gefeliciteerd " + winners[i].username + `. Je hebt *${item}* gewonnen!`);
        }


    }, time*1000)


}


module.exports.help = {

    name: "giveaway",
    description: "Host een giveaway",
    category: "moderatie"

}