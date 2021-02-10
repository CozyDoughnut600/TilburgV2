const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const levelFile = require("./data/levels.json");

const fs = require("fs");

// de files importeren = 

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("No files founded");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require (`./commands/${f}`);
        console.log(`File ${f} loaded`);
        
        bot.commands.set(fileGet.help.name, fileGet);

    })

});




bot.on("ready", async () =>  {

    console.log(`${bot.user.username} is online`)
    bot.user.setActivity("Tilburg V1", {type: "PLAYING"});



})


bot.on("message", async message => {

  //verify command
  


    if (message.author.bot) return;

    if (message.channel.type === "dm") return message.reply("Sorry, ik kan niet antwoorden in dms. Ga naar de discord.");


    var swearWords = JSON.parse(fs.readFileSync("./data/swearwords.json"));
    var msg = message.content.toLowerCase();
    var modlog = message.member.guild.channels.cache.get("806523114967662653");

    for (let i = 0; i < swearWords["swearwords"].length; i++) {
      
      if (msg.includes(swearWords["swearwords"][i])) {

        message.delete();
          var swearEmbed = new discord.MessageEmbed()
            .setTitle(`Niet schelden ${message.author}`)
            .setColor("#A93226")
            .setTimestamp();
            var swearLogEmbed = new discord.MessageEmbed()
            .setTitle(`Bericht verwijderd`)
            .setColor("#A93226")
            .setTimestamp()
            .setDescription(`Bericht van ${message.author} verwijderd\nReden: Scheldwoord`);


          message.channel.send(swearEmbed).then(msg => msg.delete({timeout: 6000 }));
          modlog.send(swearLogEmbed);
      }

      RandomXP(message);


    }

    var prefix = botConfig.prefix;

    if(!message.content.startsWith(prefix)) return;
    
    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);


    var commands = bot.commands.get(command.slice(prefix.length));

    if(commands) commands.run(bot,message, arguments);


// TRIGGERSSS






})


// function RandomXP(message) {

//   var randomNumber = Math.floor(Math.random() * 15) + 1;

//   var IdUser = message.author.id;

//   if(!levelFile[IdUser]) {
//       levelFile[IdUser] = {
//           xp: 0,
//           level: 0
//       }
//   }
//   levelFile[IdUser].xp += randomNumber;

//   var levelUser = levelFile[IdUser].level;
//   var xpUser = levelFile[IdUser].xp;

//   var nextLevelXp = levelUser * 300;

//   if(nextLevelXp == 0) nextLevelXp = 100;

//   if(xpUser >= nextLevelXp) { 

//       levelFile[IdUser].level += 1;

//       fs.writeFile("./data/levels.json", JSON.stringify(levelFile), err => {
//           if (err) console.log(err);

//       });

//       message.reply("Je hebt net level " + levelFile[IdUser].level + " gehaald. Good job!");
//   }
// }




bot.on("guildMemberAdd", member => {

  var channel = member.guild.channels.cache.get('772735229139091461');

  if (!channel) return;

 channel.send(`Hey ${member}, welcome in the official TechCode discord. Check #rules in order to complete the first step of your verification process. Have fun!`);
})



bot.login(process.env.token);