const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");

const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;
module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`
  );
  client.user.setStatus("idle");
  var oyun = [
        "Gif Sky "     + client.guilds.cache.size +    " sunucuya ve "   + client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() +   "  kullanıcıya hizmet veriyor!",
        "g!yardım",
        "Yardım discord.gg/dev",
        "Türkiyenin en iyisi olmak için çaba gösteriyoruz!",
        "Hızla Büyüyoruz"
  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "");
  }, 2 * 3000);
};