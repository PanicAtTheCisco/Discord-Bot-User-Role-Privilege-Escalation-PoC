module.exports = {
    name: 'add',
    description: "",
    execute(message, args) {

        /**
         * Command will add roles created by '-create' to the user then delete the command in chat to cover tracks
         * 
         * NOTE: 
         * Currently, '-add' command can only add roles that have been created with '-create'
         * cannot add via role ID either
         * ex. any auto-created bot roles, roles created by Owner roles, admin roles or other bots
         * 
         * Working to fix these issues
         */

        var roleName;
        if (args.length === 0) {
            roleName = "shadow role"; //default role name used if no input is given
        } else {
            let argString = args.toString();
            roleName = argString.replace(",", " ");
        }
        
        let role = message.guild.roles.cache.find(role => role.name === roleName);

        message.member.roles.add(role).catch(console.error);

        message.delete();
    }
}