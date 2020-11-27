const { Client, MessageEmbed } = require('discord.js'),
    client = new Client(),
    config = require('./config');

client
    .on("ready", () => {
        console.log("Je suis prêt");
    })
    .on("messageUpdate", (oldMessage, newMessage) => {
        if (oldMessage.content !== newMessage.content) {
            let channel = newMessage.channel.guild.channels.cache.get(config.log.channelID);
            if (channel) {
                let embed = new MessageEmbed()
                    .addField("Auteur:", newMessage.author.tag)
                    .addField("Ancien message:",  oldMessage.content)
                    .addField("Nouveau message:",  newMessage.content)
                    .setTimestamp();
                return channel.send(embed);
            }
        }
    })
    .login(config.bot.token)
