exports.run = Trade();

function Trade(){
    return (client, message, args) => {

        const fs = require("fs");
        let trades = JSON.parse(fs.readFileSync("./trades.json", "utf8"));

        // build the trades object
        trades[message.author.id].trades = {
            "id": 1, 
            "tradedWith":{
                "id":0
            },
            "timesTraded":0
        };
        //trades[message.author.id].trades.id = trades[message.author.id].trades.id + 1;


        // write the trade object to json file
        fs.writeFile("./trades.json", JSON.stringify(trades), (err) => {
            if (err)
                console.error(err);
        });


        message.reply('Trade Completed Successfuly!')
        .then(msg => console.log('Trade completed ${msg.author}'))
        .catch(console.error);
    }
}