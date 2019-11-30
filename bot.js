
const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const moment = require("moment");
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const weather = require("weather-js");
const fs = require("fs");
const db = require("quick.db");
const http = require("http");
const express = require("express");
require("./util/eventLoader")(client);
const path = require("path");
const request = require("request");
const snekfetch = require("snekfetch");
const queue = new Map();
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");

const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);

//sayaç sistem

client.on("guildMemberAdd", member => {
  const profil = JSON.parse(fs.readFileSync("./sayaç.json", "utf8"));
  if (!profil[member.guild.id]) return;
  if (profil[member.guild.id]) {
    let sayaçkanalID = profil[member.guild.id].kanal;
    let sayaçsayı = profil[member.guild.id].sayi;
    let sayaçkanal = client.channels.get(sayaçkanalID);
    let aralık = parseInt(sayaçsayı) - parseInt(member.guild.members.size);
    sayaçkanal.sendMessage(
      "🔹 **" +
        member +
        "** Sunucuya Katıldı \n🔹 **" +
        sayaçsayı +
        "** Kişi Olmamıza **" +
        aralık +
        "** Kişi Kaldı! \n🔹 **" +
        member.guild.members.size +
        "** Kişiyiz!"
    );
  }
});

//kanal koruma

client.on("channelDelete", async function(channel) {
  if (channel.guild.id !== "584804559793422336") return;
  let logs = await channel.guild.fetchAuditLogs({ type: "CHANNEL_DELETE" });
  if (logs.entries.first().executor.bot) return;
  channel.guild
    .member(logs.entries.first().executor)
    .roles.filter(role => role.name !== "@everyone")
    .array()
    .forEach(role => {
      channel.guild
        .member(logs.entries.first().executor)
        .removeRole(channel.guild.roles.get("641190280099266560"));
      channel.guild
        .member(logs.entries.first().executor)
        .removeRole(channel.guild.roles.get("636658904767660065"));
      channel.guild
        .member(logs.entries.first().executor)
        .removeRole(channel.guild.roles.get("642341579004313600"));
      channel.guild
        .member(logs.entries.first().executor)
        .removeRole(channel.guild.roles.get("638769427504168961"));
    });
  channel.guild
    .member(logs.entries.first().executor)
    .removeRole(channel.guild.roles.get("641189298623741952"));
  channel.guild
    .member(logs.entries.first().executor)
    .addRole(channel.guild.roles.get("634059596641861638"));
  channel.guild
    .member(logs.entries.first().executor)
    .removeRole(channel.guild.roles.get("634056807890812959"));
  channel.guild
    .member(logs.entries.first().executor)
    .removeRole(channel.guild.roles.get("634056807890812959"));
  const sChannel = channel.guild.channels.find(
    c => c.id === "634056823292428298"
  );
  const cıks = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(
      `🔸 \`${channel.name}\` Adlı Kanal Silindi, Silen Kişinin Yetkileri Alındı!`
    )
    .setFooter("Kanal Koruma Sistemi");
  sChannel.send(cıks);

  channel.guild.owner.send(
    `🔸 \`${channel.name}\` Kanalı Silen Kişinin Yetkileri Alındı!`
  );
});

//kanal koruma - kanalı geri yükleme

client.on("channelDelete", channel => {
  if (channel.type === "voice") {
    console.log(`${channel.name} Adlı Sesli Kanal Silindi!`);
    const bChannel = channel.guild.channels.find(
      c => c.id === "634056823292428298"
    );
    const yenile1 = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(
        `🔸 \`${channel.name}\` İsimli Ses Kanalı Sunucuya Geri Yüklendi!`
      )
      .setFooter("Kanal Koruma Sistemi");
    bChannel.send(yenile1);
    let kategoriID = channel.parentID;
    let isim = channel.name;
    let sıra = channel.position;
    let limit = channel.userLimit;
    channel.guild.owner.send(
      `🔸 \`${channel.name}\` İsimli Ses Kanalını Sunucuya Geri Yükledim! `
    );
    channel.clone(this.name, true, false).then(kanal => {
      let z = kanal.guild.channels.get(kanal.id);
      z.setParent(z.guild.channels.find(channel => channel.id === kategoriID));
      z.edit({ position: sıra, userLimit: limit });
    });
  }
  if (channel.type === "text") {
    console.log(`${channel.name} Adlı Metin Kanalı Silindi!`);
    const aChannel = channel.guild.channels.find(
      c => c.id === "634056823292428298"
    );
    const yenile = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(
        `🔸 \`${channel.name}\` İsimli Metin Kanalı Sunucuya Geri Yüklendi!`
      )
      .setFooter("Kanal Koruma Sistemi");
    aChannel.send(yenile);
    let açıklama = channel.topic;
    let kategoriID = channel.parentID;
    let isim = channel.name;
    let sıra = channel.position;
    let nsfw = channel.nsfw;
    channel.guild.owner.send(
      `🔸 \`${channel.name}\` İsimli Metin Kanalını Sunucuya Geri Yükledim!`
    );
    channel.clone(this.name, true, true).then(kanal => {
      let z = kanal.guild.channels.get(kanal.id);
      z.setParent(z.guild.channels.find(channel => channel.id === kategoriID));
      z.edit({ position: sıra, topic: açıklama, nsfw: nsfw });
    });
  }
});

//Rol Koruma 
client.on("roleUpdate", async function(oldRole, newRole, message) {
  
   const bilgilendir = await newRole.guild.fetchAuditLogs({type: "ROLE_UPLATE"}).then(hatırla => hatırla.entries.first())
    let yapanad= bilgilendir.executor;
  let idler= bilgilendir.executor.id;
  if(idler === "619325018723319819") return // yapan kişinin id si bu ise bir şey yapma
  if(oldRole.hasPermission("ADMINISTRATOR")) return
  
   setTimeout(() => {

     if(newRole.hasPermission("ADMINISTRATOR")){
   newRole.setPermissions((newRole.permissions-8))    
 }
     
 if(newRole.hasPermission("ADMINISTRATOR")){
  
     if(!client.guilds.get(newRole.guild.id).channels.has("634056816610770977")) return newRole.guild.owner.send(`Rol Koruma Nedeniyle ${yapanad} Kullanıcısı Bir Role Yönetici Verdiği İçin Rolün **Yöneticisi** Alındı. \Rol: **${newRole.name}**`)//bu id ye sahip kanal yoksa sunucu sahibine yaz

  message.channels.get("634056816610770977").send(`Rol Koruma Nedeniyle ${yapanad} Kullanıcısı Bir Role Yönetici Verdiği İçin Rolün **Yöneticisi Alındı**. \Rol: **${newRole.name}**`)// belirtilen id ye sahip kanala yaz
 }
      }, 1000)
  })