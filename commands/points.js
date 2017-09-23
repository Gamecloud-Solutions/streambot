exports.run = (client, message, args) => {
    const fs = require("fs");
    let points = JSON.parse(fs.readFileSync("./points.json", "utf8"));

    if (!points[message.author.id]) points[message.author.id] = {
        points: 0,
        level: 0
    };


    points[message.author.id].points++;


    if (points[message.author.id].points > 9) {
        if (points[message.author.id].level == 0) {
            points[message.author.id].level++;
        } else
        if (points[message.author.id].points > 24) {
            if (points[message.author.id].level == 1) {
                points[message.author.id].level++;
            } else
            if (points[message.author.id].points > 49) {
                if (points[message.author.id].level == 2) {
                    points[message.author.id].level++;
                } else
                if (points[message.author.id].points > 149) {
                    if (points[message.author.id].level == 3) {
                        points[message.author.id].level++;
                    }
                }
            }
        }
    }


    // And then, we save the edited file.
    fs.writeFile("./points.json", JSON.stringify(points), (err) => {
        if (err) console.error(err)
    });

    message.channel
        .send("You now have " +
            points[message.author.id].points + " points and are level " +
            points[message.author.id].level + ". The time is: " + new Date().toString())

    .catch(console.error);
}