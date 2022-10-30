module.exports = {
    name: 'roast',
    description: "",
    execute(message, args) {

        var random = Math.floor(Math.random()*6);
        random;
        switch (random) {
            case 1: message.channel.send("Some people drink from the fountain of knowledge -- it appears that you just gargled."); break;
            case 2: message.channel.send("I have always wondered why people bang their heads against brick walls ... then I met you."); break;
            case 3: message.channel.send("Do you want people to accept you as you are ... or do you want people to like you?"); break;
            case 4: message.channel.send("I'm just trying to imagine you with a personality"); break;
            case 5: message.channel.send("This is no battle of wits between you and me. I never pick on an unarmed man."); break;
        }
    }
}