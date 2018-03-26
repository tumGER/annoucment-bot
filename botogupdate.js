const Discord = require("discord.js");

const client = new Discord.Client();

const config = require("./config.json");

client.on("ready", () => {
  console.log(`Bot has started succesfully`);
  client.user.setGame(`Annoucing News`);
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
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

if(command === "bork"){
   message.channel.send("you borked bot! \n <@167669031548092428")
 }

 if(command === "help") {
   message.channel.send("+say - sends annoucment | syntax !say <annoucment> \n +bork - DON'T USE BORKS BOT \n +help - shows this, **duh** \n +about - shows info about bot")
 }

 if(command === "about"){
   message.channel.send(" **A simple annoucer bot** \n Author: ks#0908 \n language and libliary: JavaScript using discord.js \n Special Thakns to: OGNovuh for helping me make command to edit annoucment \n and no, it don't work yet")
 }
});
client.login(config.token);
