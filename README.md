# Discord-Bot-User-Role-Privilege-Escalation-PoC
## Version: 1.3
A Discord Bot with the capabilities of elevating the users roles on any Discord Server it is on

---
 ## IMPORTANT: 
 * THIS BOT IS A PROJECT TO LEARN MORE ABOUT JS AND DISCORD BOTS, ONLY USE ON SERVERS YOU HAVE PERMISSION TO : DO NOT USE FOR MALICIOUS PURPOSES
 * DEVELOPER IS NOT RESPONSIBLE FOR ANYTHING DONE WITH BOT BY OTHERS

 ## REQUIREMENTS:
 * node.js installed
 * discord.js npm packaged installed

 ## HOW TO START:
 * Clone this repo
 * Create config.json for discord token (https://discordjs.guide/creating-your-bot/)
 * Setup bot as an application on your discord developer portal (https://discord.com/developers/applications)
 * Create invite link using Discord's built in link generator and make sure the bot's permissions are set to only administrator 
 * Add bot to server
 * Run 'node .' in code to start bot
 
 ## NOTE:
 * I wrote part of this a while ago, so most of it is not using discord.js v14
 * Bot must be on the server for use
 * There are still a few bugs being worked with the '-create' and '-add' commands so expect a few issues
 * There is no multi-command handling so if more than one person tries to use a command at the same time nothing will happen for either of them. If needed on multiple servers it is recommened to host different instances of the bot
 * This bot is meant to be used as a privilege escalation tool for Discord servers
 * Bot can be customized to be used however is needed to maintain cover, the default is the 'Funny Bot' cover which includes some jokes and other commands; customizing requires some discord.js knowledge
 * Commands can be added and removed for modularity, again, some discord.js knowledge is needed

---
# Change Log

## v1.3 Changes
* Fixed security issues detected by GitHub Dependabot
* Made '-create' and '-add' commands automatically delete themselves in chat after execution to cover tracks
* Added comments with information regarding different functionality
* Created config.json requirement to prevent Discord Token from leaking
* Finally posted this project to GitHub
