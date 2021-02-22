const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {



    

    var categoryID = '806523102246731886';

    var staff = '806523103790366720';

var channelName = "Sollicitatie-" + message.author.username;
var ticket = false;

message.guild.channels.cache.forEach(channel => {

    if (channel.name.toLowerCase() === channelName.toLowerCase()) {
        ticket = true;
        return message.reply("jij hebt al een sollicitatie.").then(msg => msg.delete({ timeout: 6000 }));
        
    }


});


if(ticket) return;

var startEmbed = new discord.MessageEmbed()
    .setTitle("Hallo " + message.author.username)
    .setColor('#00BFFF')
    .setDescription("Kanaal wordt aangemaakt");




if (!args[0]) {


message.channel.send(startEmbed).then(msg => msg.delete({ timeout: 6000 }));

message.guild.channels.create(channelName, {type: 'text'}).then(
    (createdChannel) => {
        createdChannel.setParent(categoryID).then(
            (settedParent) => {
                
                settedParent.updateOverwrite(message.guild.roles.cache.find(role => role.name === '@everyone'), {
                    SEND_MESSAGES: false,
                    VIEW_CHANNEL: false                          
                });
                settedParent.updateOverwrite(message.author.id, {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true                          
                });
                settedParent.updateOverwrite(message.guild.roles.cache.get(staff), {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true                          
                });
                
                
                var embedParent = new discord.MessageEmbed()
                    .setTitle("Hallo " + message.author.username)
                    .setColor('#00BFFF')
                    .setDescription("Vul rustig je sollicitatie in.\nNa elke vraag heb je een bericht om te antwoorden.\nZorg ervoor dat dit in **één** bericht is. Je kan altijd je bericht bewerken.\nSucces!")
                    .setFooter("Sollicitatie " + message.author.username);
                
                var vraag1 = new discord.MessageEmbed()
                    .setTitle("Vraag 1 ")
                    .setColor('#00BFFF')
                    .setDescription("*Wat is je roblox naam?*")
                    .setFooter("Sollicitatie " + message.author.username);
                
                var vraag2 = new discord.MessageEmbed()
                    .setTitle("Vraag 2 ")
                    .setColor('#00BFFF')
                    .setDescription("*Wat doet uw dienst, en voor welke dienst solliciteert u?*")
                    .setFooter("Sollicitatie " + message.author.username);
                
                var vraag3 = new discord.MessageEmbed()
                    .setTitle("Vraag 3 ")
                    .setColor('#00BFFF')
                    .setDescription("*Noem alle begrippen die u kent (met uitleg) van uw dienst*")
                    .setFooter("Sollicitatie " + message.author.username);
                
                var vraag4 = new discord.MessageEmbed()
                    .setTitle("Vraag 4 ")
                    .setColor('#00BFFF')
                    .setDescription("*Wat is je discord naam + tag?*")
                    .setFooter("Sollicitatie " + message.author.username);
                
                var vraag5 = new discord.MessageEmbed()
                    .setTitle("Vraag 5 ")
                    .setColor('#00BFFF')
                    .setDescription("*Hoe oud ben je?*")
                    .setFooter("Sollicitatie " + message.author.username);
                
                var vraag6 = new discord.MessageEmbed()
                    .setTitle("Vraag 6")
                    .setColor('#00BFFF')
                    .setDescription("*Hoe vaak in de week kan je trainingen geven?*")
                    .setFooter("Sollicitatie " + message.author.username);
                
                var vraag7 = new discord.MessageEmbed()
                    .setTitle("Vraag 7 ")
                    .setColor('#00BFFF')
                    .setDescription("*Begrijp je dat je ontslagen wordt als je vaak offline bent?*")
                    .setFooter("Sollicitatie " + message.author.username);
                
                var vraag8 = new discord.MessageEmbed()
                    .setTitle("Vraag 8")
                    .setColor('#00BFFF')
                    .setDescription("*Heb je een werkende microfoon?*")
                    .setFooter("Sollicitatie " + message.author.username);
                
                var vraag9 = new discord.MessageEmbed()
                    .setTitle("Vraag 9 ")
                    .setColor('#00BFFF')
                    .setDescription("*Leg uit wat jouw dienst doet*")
                    .setFooter("Sollicitatie " + message.author.username);
                
                var vraag10 = new discord.MessageEmbed()
                    .setTitle("Vraag 10 ")
                    .setColor('#00BFFF')
                    .setDescription("*Hoe zou jij een training geven? Geef details en waarop jij ze zou keuren, minimaal 100 woorden.*")
                    .setFooter("Sollicitatie " + message.author.username);
                
                settedParent.send(message.author.id);
                settedParent.send(embedParent);
                settedParent.send(vraag1);
                
                settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1}).then(antwoord => {
                    var antwoord1 = antwoord.first();
                    settedParent.send(vraag2);

                    settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1}).then(antwoord => {
                        var antwoord2 = antwoord.first();
                        settedParent.send(vraag3);

                        settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1}).then(antwoord => {
                            var antwoord3 = antwoord.first();
                            settedParent.send(vraag4);

                            settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1}).then(antwoord => {
                                var antwoord4 = antwoord.first();
                                settedParent.send(vraag5);

                                settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1}).then(antwoord => {
                                    var antwoord5 = antwoord.first();
                                    settedParent.send(vraag6);

                                    settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1}).then(antwoord => {
                                        var antwoord6 = antwoord.first();
                                        settedParent.send(vraag7);

                                        settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1}).then(antwoord => {
                                            var antwoord7 = antwoord.first();
                                            settedParent.send(vraag8);

                                            settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1}).then(antwoord => {
                                                var antwoord8 = antwoord.first();
                                                settedParent.send(vraag9);

                                                settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1}).then(antwoord => {
                                                    var antwoord9 = antwoord.first();
                                                    settedParent.send(vraag10);

                                                    settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1}).then(antwoord => {
                                                        var antwoord10 = antwoord.first();
                                                        

                                                        var uitkomst = new discord.MessageEmbed()
                                                            .setTitle("Bedankt voor het solliciteren")
                                                            .setColor('#00BFFF')
                                                            .setTimestamp()
                                                            .setDescription(`Jouw antwoorden:\n**Vraag 1**: ${antwoord1}\n**Vraag 2**: ${antwoord2}\n**Vraag 3**: ${antwoord3}\n**Vraag 4**: ${antwoord4}\n**Vraag 5**: ${antwoord5}\n**Vraag 6**: ${antwoord6}\n**Vraag 7**: ${antwoord7}\n**Vraag 8**: ${antwoord8}\n**Vraag 9**: ${antwoord9}\n**Vraag 10**: ${antwoord10}`)

                                                        settedParent.send(uitkomst);
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })

                
                

                
                
                
                
            }).catch(err => {
                message.channel.send("Er ging iets fout, vraag de developer");
            console.log(err);
            })
        
    })

} else if (args[0] == "dienstchef") {



    message.channel.send(startEmbed).then(msg => msg.delete({ timeout: 6000 }));

    message.guild.channels.create(channelName, {type: 'text'}).then(
        (createdChannel) => {
            createdChannel.setParent(categoryID).then(
                (settedParent) => {
                    
                    settedParent.updateOverwrite(message.guild.roles.cache.find(role => role.name === '@everyone'), {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false                          
                    });
                    settedParent.updateOverwrite(message.author.id, {
                        SEND_MESSAGES: true,
                        VIEW_CHANNEL: true                          
                    });
                    settedParent.updateOverwrite(message.guild.roles.cache.get(staff), {
                        SEND_MESSAGES: true,
                        VIEW_CHANNEL: true                          
                    });
                    
                    
                    var embedParent = new discord.MessageEmbed()
                        .setTitle("Hallo " + message.author.username)
                        .setColor('#00BFFF')
                        .setDescription("Je hebt gekozen voor: `Dienstchef solli`\n\nVul rustig je sollicitatie in.\nNa elke vraag heb je een bericht om te antwoorden.\nZorg ervoor dat dit in **één** bericht is. Je kan altijd je bericht bewerken.\nSucces!")
                        .setFooter("Sollicitatie " + message.author.username);
                    
                    var vraag1 = new discord.MessageEmbed()
                        .setTitle("Vraag 1 ")
                        .setColor('#00BFFF')
                        .setDescription("*Wat is je roblox naam?*")
                        .setFooter("Sollicitatie " + message.author.username);
                    
                    var vraag2 = new discord.MessageEmbed()
                        .setTitle("Vraag 2 ")
                        .setColor('#00BFFF')
                        .setDescription("*Wat doet uw dienst, en voor welke dienst solliciteert u?*")
                        .setFooter("Sollicitatie " + message.author.username);
                    
                    var vraag3 = new discord.MessageEmbed()
                        .setTitle("Vraag 3 ")
                        .setColor('#00BFFF')
                        .setDescription("*Wat zal jij doen als een OC van jou dienst aa / trainingen aan het koteren is:*")
                        .setFooter("Sollicitatie " + message.author.username);
                    
                    var vraag4 = new discord.MessageEmbed()
                        .setTitle("Vraag 4 ")
                        .setColor('#00BFFF')
                        .setDescription("Wat zal jij doen in uw macht als een persoon zit te verstoren van trainingen / koter gedrag / ta enzo doet:*")
                        .setFooter("Sollicitatie " + message.author.username);
                    
                    var vraag5 = new discord.MessageEmbed()
                        .setTitle("Vraag 5 ")
                        .setColor('#00BFFF')
                        .setDescription("*Kan u iets maken tegen een hogeren rang dan jou als dientschef? (Bijv CO)*")
                        .setFooter("Sollicitatie " + message.author.username);
                    
                    var vraag6 = new discord.MessageEmbed()
                        .setTitle("Vraag 6")
                        .setColor('#00BFFF')
                        .setDescription("*Wat zal u doen als u gekickt wordt van dienstchef, omdat er een hernieuwing is??*")
                        .setFooter("Sollicitatie " + message.author.username);
                    
                    var vraag7 = new discord.MessageEmbed()
                        .setTitle("Vraag 7 ")
                        .setColor('#00BFFF')
                        .setDescription("*Wat zal u doen als een hogeren rang je aanspreekt ook all ben je dienstchef?*")
                        .setFooter("Sollicitatie " + message.author.username);
                    
                    
                    settedParent.send(message.author.id);
                    settedParent.send(embedParent);
                    settedParent.send(vraag1);
                    
                    settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1}).then(antwoord => {
                        var antwoord1 = antwoord.first();
                        settedParent.send(vraag2);
    
                        settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1}).then(antwoord => {
                            var antwoord2 = antwoord.first();
                            settedParent.send(vraag3);
    
                            settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1}).then(antwoord => {
                                var antwoord3 = antwoord.first();
                                settedParent.send(vraag4);
    
                                settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1}).then(antwoord => {
                                    var antwoord4 = antwoord.first();
                                    settedParent.send(vraag5);
    
                                    settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1}).then(antwoord => {
                                        var antwoord5 = antwoord.first();
                                        settedParent.send(vraag6);
    
                                        settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1}).then(antwoord => {
                                            var antwoord6 = antwoord.first();
                                            settedParent.send(vraag7);
    
                                            settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1}).then(antwoord => {
                                                var antwoord7 = antwoord.first();
                                               
                                                            
    
                                                            var uitkomst = new discord.MessageEmbed()
                                                                .setTitle("Bedankt voor het solliciteren")
                                                                .setColor('#00BFFF')
                                                                .setTimestamp()
                                                                .setDescription(`Jouw antwoorden:\n**Vraag 1**: ${antwoord1}\n**Vraag 2**: ${antwoord2}\n**Vraag 3**: ${antwoord3}\n**Vraag 4**: ${antwoord4}\n**Vraag 5**: ${antwoord5}\n**Vraag 6**: ${antwoord6}\n**Vraag 7**: ${antwoord7}`)
    
                                                            settedParent.send(uitkomst);
                                                       
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
    
                    
                    
    
                    
                    
                    
                    
                }).catch(err => {
                    message.channel.send("Er ging iets fout, vraag de developer");
                console.log(err);
                })
            
        })







}



}   





module.exports.help = {

    name: "apply",
    description: "Start met je sollicitatie",
    category: "Info"

}