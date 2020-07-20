module.exports = async (client, message) => {
    if (!message.guild || message.author.bot) return;
    const args = message.content.split(/ +/g);
    console.log(client.prefix)
    const command = args.shift().slice(1).toLowerCase();
    const cmd = client.commands.get(command);
    if(!cmd) return;
    cmd.run(client, message, args);
}