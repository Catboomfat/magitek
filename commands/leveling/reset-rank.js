const { MessageEmbed } = require('discord.js');
const { wrongemoji, prefix, checkemoji } = require("../../config.js");
const db = require('quick.db');

module.exports = {
    config: {
  name: "reset-rank",
  aliases: ["reset"],
  description: "Resets your whole experience to 0",
  usage: "rank [@user]",
  category: "leveling",
    },
    run: async (bot, message) => {
	const embed = new MessageEmbed()
		.setDescription(`Please send \`**${prefix}**confirm\` under 20 seconds to reset your data.`)
		.setColor('BLURPLE');
	message.channel.send(embed);
	await message.channel.awaitMessages((m) => (m.author.id === message.author.id) && (m.content === `${prefix}confirm`), {
		max: 1,
		time: 20000,
		errors: ['time'],
	}).catch(() => {
		const embed2 = new MessageEmbed()
			.setColor('#f04947')
			.setDescription(`${bot.config.wrongemoji} **| Please try again since the time is over!**`);
		return message.channel.send(embed2);
	});
	db.all().filter(d => d.ID.startsWith(`cmessages_${message.channel.id}_${message.author.id}`)).forEach(d => db.delete(d.ID));
	db.all().filter(d => d.ID.startsWith(`gmessages_${message.author.id}`)).forEach(d => db.delete(d.ID));
	db.all().filter(d => d.ID.startsWith(`messages_${message.guild.id}_${message.author.id}`)).forEach(d => db.delete(d.ID));
	db.set(`level_${message.guild.id}_${message.author.id}`, 1);
	const embed2 = new MessageEmbed()
		.setColor('#43b481')
		.setDescription(`${bot.config.checkemoji} **| Successfully resetted your data!**`);
	return message.channel.send(embed2);
}
};