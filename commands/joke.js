module.exports = {
    name: 'joke',
    description: "",
    execute(message, args) {

        const https = require("https");

        const options = {
          hostname: "icanhazdadjoke.com",
          path: "/",
          headers: {
            Accept: "application/json",
          },
        };
        
        https.get(options, (res) => {
          if (res.statusCode == 200) {
            // Request succeeded, do something with the response data
            res.on("data", (data) => {
              const joke = JSON.parse(data);
              message.channel.send(joke.joke);
            });
          } else {
            // Request failed, do something with the error
            message.channel.send("Error getting joke. If errors keep persisting, the joke API may be having issues.");
          }
        }).on("error", (error) => {
          // Handle the error
          console.log(error);
        });        

        /*
        var random = Math.floor(Math.random()*6);
        random;
        switch (random) {
            case 1: message.channel.send('My therapist says I have a preoccupation for revenge. We’ll see about that.'); break;
            case 2: message.channel.send('The easiest time to add insult to injury is when you’re signing someone’s cast.'); break;
            case 3: message.channel.send('Always borrow money from a pessimist. They’ll never expect it back.'); break;
            case 4: message.channel.send('Build a man a fire and he’ll be warm for a day. Set a man on fire and he’ll be warm for the rest of his life.'); break;
            case 5: message.channel.send('Maybe if we start telling people their brain is an app, they’ll want to use it.'); break;
        }
        */
    }
}