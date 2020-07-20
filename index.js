const {
    token,
    prefix
} = require("./config");
const {
    Client,
    Collection
} = require("discord.js");

const client = new Client({
    disableEveryone: true,
    disabledEvents: ["TYPING_START"]

});

client.prefix = new Object();
client.prefix["default"] = prefix;
client.snipes = new Map();
client.commands = new Collection();
client.limits = new Map();
const commands = require("./structures/command");
commands.run(client);
const events = require("./structures/events");
events.run(client);
client.login(token);
