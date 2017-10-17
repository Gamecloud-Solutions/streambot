exports.run = Trade();

function Trade(){
    return (client, message, args) => {

        const fs = require("fs");
        let trades = JSON.parse(fs.readFileSync("./trades.json", "utf8"));
        // Counters
        var level = trades[message.author.id].trades.level;
        if(trades[message.author.id].trades.timesTraded > 10){

        }
        var userTrades = trades[message.author.id].trades.tradedWith.timesTraded + 1;
        var timesTraded = trades[message.author.id].trades.timesTraded + 1;

        // build the trades object
        trades[message.author.id].trades = {
            "id": 357300870515261440, 
            "tradedWith":{
                "id":args[0],
                "timesTraded": userTrades
            },
            "level": level,
            "timesTraded":timesTraded,
            "timestamp": new Date().toString()
        };
        //trades[message.author.id].trades.id = trades[message.author.id].trades.id + 1;


        // write the trade object to json file
        fs.writeFile("./trades.json", JSON.stringify(trades), (err) => {
            if (err)
                console.error(err);
        });


        message.reply(args[1] + ' traded successfuly!')
        .then(msg => console.log('Trade completed with ' + msg.author + ' for ' + args[1]))
        .catch(console.error);
    };
}