const Discord = require("discord.js");

const client = new Discord.Client();

const config = require("./config.json");

client.on("ready", () => {
  console.log(`Bot has started succesfully`);
  client.user.setGame(`Annoucer bot in Java Script`);
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === "ping" ){
    message.channel.send('pong');
  }

  if(command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
     message.guild.channels.find("id", "392400500676362240").send(sayMessage);
  }

  /*if(command === "update") {
    let id = args[0];
    let message = args.slice(1).join(" ");
    const messageToEdit = message.channel.fetchMessage(id);
    messageToEdit.edit(message);
  }*/

/*if(command === "edit") {
  const message = args[0]
  const id = args[1]
  message.first().edit(message)
}*/

});
client.login(config.token);
