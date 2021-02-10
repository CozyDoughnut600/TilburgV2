const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

// ID van de categorie van de tickets.
const categoryId = "806523102246731886";
 
var userName = message.author.username;
var userDiscriminator = message.author.discriminator;

var alreadyTicket = false;

  message.guild.channels.cache.forEach(channel => {

      if(channel.name == userName.toLowerCase() + "-" + userDiscriminator) {
          alreadyTicket = true;

          message.reply("Jij hebt al een ticket.");

          return;
      }
    
  });


if(alreadyTicket) return;

message.channel.send(":white_check_mark: Ticket aan het maken..");

message.guild.channels.create(userName.toLowerCase() + "-" + userDiscriminator, {type: 'text'}).then(
  (createdChannel) => {
      createdChannel.setParent(categoryId).then(

          (settedParent) => {

              settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'),{
                  SEND_MESSAGES: false,
                  VIEW_CHANNEL: false
              }); 
              settedParent.updateOverwrite(message.author.id,{
                  CREATE_INSTANT_INVITE:false,
                  READ_MESSAGES: false,
                  ATTACH_FILES: true,
                  CONNECT: true,
                  ADD_REACTIONS: true,
                  SEND_MESSAGES: true,
                  VIEW_CHANNEL: true
              }); 

              var embedParent = new discord.MessageEmbed()
              .setTitle("Ticket " + message.channel.name)
              .setColor("#005eff")
              .setDescription("Hier kan je je vraag stellen!")
              .setFooter("Ticket opened");

              settedParent.send(embedParent);

          }
      ).catch(err => {
          message.channel.send("Er ging iets fout...");
          console.log(err);
      });
  }


).catch(err => {
  message.channel.send("Er ging iets fout...");
  console.log(err);
});
 

}


module.exports.help = {

    name: "ticket",
    description: "open een ticket",
    category: "tickets"

}