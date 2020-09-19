const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;

module.exports = async bot => {
  //bot.shard.fetchClientValues("guilds.size").then(async results => {
  //botetchClientValues("users.size").then(async results2 => {
//  let shardi = bot.shard.id + 1;
  var oyun = [
    "Her hangi bir sorunda iletişim Shi#7214 ",
    "Bizi tercih ettiğiniz için teşekkürler",
    "a!yardım ile komutlara ulaşabilirsiniz",
    "Yapımcım; Shi⁰⁷#0010 ",
    ".yardım  yazarak Botun Davet  linkine Erişebilirsiniz.",
    //`Shard: ${shardi}/${bot.shard.count}`,
    `${bot.guilds.size.toLocaleString()} Sunucu ve ${bot.guilds
      .reduce((a, b) => a + b.memberCount, 0)
      .toLocaleString()} Kullanıcı!`
  ];

  setInterval(async () => {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    bot.user.setActivity(oyun[random], { type: "PLAYING" });
  }, 12000);
  bot.user.setStatus("online");
  //});
  //});
};