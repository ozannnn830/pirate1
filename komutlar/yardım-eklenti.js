  
const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffd100') 
.setAuthor(`Pirate eklenti Komutlar`, client.user.avatarURL())
.setDescription(` Pirate botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Komut Sayısı__`,`\`${prefix}kayıtsistemi\` kayıt sistemini gösterir`,true)
.addField(`__Davet Et__`,` \`${prefix}davetsistemi\` davet sistemini gösterir`,true)
.addField(`__Bot Bilgi__`,` \`${prefix}davet\` pirate davet edersiniz`,true)
.addField(`__Bilgilendirme__`,` \`${prefix}davet\` | Pirate'yi Sunucunuza Davet Edersiniz\n\`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n  \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://i.hizliresim.com/Y7jFCB.png`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "eklenti",
  aliases: []
}
