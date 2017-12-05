exports.run = GetInventory();

function GetInventory() {
    return (client, message, args) => {
        const fs = require("fs");
        let inventory = JSON.parse(fs.readFileSync("./inventory.json", "utf8"));
        const config = require("../config.json");       
        args = message.content.slice(config.prefix.length).trim().split(/ +/g);        
        const command = args.shift().toLowerCase();
       
        var inv = inventory[message.author.id].inventory;
        inv.itemId = 1;
        //inventory[message.author.id].inventory = [];






        fs.writeFile("./inventory.json", JSON.stringify(inventory), (err) => {
            if (err)
                console.error(err);
        });

        message.reply("Your inventory contains the following:")
        .then(msg => console.log(msg.author + ' requested inventory'))
        .catch(console.err);
    }
}