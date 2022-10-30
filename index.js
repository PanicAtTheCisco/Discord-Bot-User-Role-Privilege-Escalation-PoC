/**
 * IMPORTANT: 
 * > THIS BOT IS A PROJECT TO LEARN MORE ABOUT JS AND DISCORD BOTS, ONLY USE ON SERVERS YOU HAVE PERMISSION TO : DO NOT USE FOR MALICIOUS PURPOSES
 * > DEVELOPER IS NOT RESPONSIBLE FOR ANYTHING DONE WITH BOT BY OTHERS
 * 
 * LOOK AT READ ME FOR MORE INFORMATION
 */

const Discord = require('discord.js');
const bot = new Discord.Client();

const { token } = require('./config.json'); //create a config.json file and put your discord token in
                                            //follow https://discordjs.guide/creating-your-bot/#using-config-json for more info

const prefix = '-'; //change optional, really just personal preference

const fs = require('fs');

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}


bot.on('ready', () =>{
    console.log('BOT ONLINE');
})

bot.on('message', message=>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    /**
     * To add new commands or change commands, follow format below
     * Make new file in commands folder (follow other format of other commands code) then add below
     */

    if (command === 'help') {
        bot.commands.get('help').execute(message, args);
    } else if (command === 'roast') {
        bot.commands.get('roast').execute(message, args);
    } else if (command === 'joke') {
        bot.commands.get('joke').execute(message, args);
    } else if (command === 'spam') {
        bot.commands.get('spam').execute(message, args);
    } else if (command === 'create') {
        bot.commands.get('create').execute(message, args);
    } else if (command === 'add') {
        bot.commands.get('add').execute(message, args);
    } else {
        message.channel.send("Invalid command try again.");
    }
})

bot.login(token);