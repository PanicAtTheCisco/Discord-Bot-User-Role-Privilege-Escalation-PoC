const { DiscordAPIError } = require("discord.js")

module.exports = {
    name: 'help',
    description: "",
    execute(message, args) {

        const helpEmbed = {
            color: 0x0099ff,
            title: 'Funny Bot Help',
            url: '',
            author: {
                name: '',
                icon_url: '',
                url: '',
            },
            description: 'Funny Bot Commands',
            thumbnail: {
                url: '',
            },
            fields: [
                {
                    name: '-joke',
                    value: 'Will tell you a joke.',
                    inline: false,
                },
                {
                    name: '-roast',
                    value: 'Will roast you.',
                    inline: false,
                },
                {
                    name: '-spam',
                    value: 'Will spam the Tragedy of Darth Plagueis the Wise.',
                    inline: false,
                },
                {
                    name: '-help',
                    value: 'If you need to know what this does, you need help.',
                    inline: false,
                },
            ],
            image: {
                url: '',
            },
        };
        
        message.channel.send({ embed: helpEmbed });
    }
}
