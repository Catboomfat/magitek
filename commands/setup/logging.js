/* 
* Comfi Bot for Discord 
* Copyright (C) 2021 Xx-Mohit-xX
* This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International 
* For more information, see README.md and LICENSE 
*/

const { CommandInteraction, EmbedBuilder } = require('discord.js')
const guilds = require('../../models/guild')

module.exports = {
	name: 'logging',
	description: 'Setup logging system!',
	ownerOnly: false,
  directory: "setting",
	options: [
		{
			type: 1,
			name: 'enable',
			description: 'Sets channel for logs',
			options: [
				{
					type: 7,
					description: 'logs channel',
					name: 'name',
					required: true,
					channelTypes: [0]
				}
			]
		},
		{
			type: 1,
			name: 'disable',
			description: 'Disables the logging system'
		}
	],
	userperm: ['MANAGE_GUILD'],
	botperm: ['MANAGE_GUILD'],
	/**
	 *
	 * @param {CommandInteraction} interaction
	 * @param {String[]} args
	 */
	run: async (bot, interaction, args) => {
		let [subcommand] = args

		const finalData = {
			value: undefined,
			channel: undefined
		}

		if (subcommand === 'enable') {
			try {
				let channel = interaction.options.getChannel('name')

				if (channel)
					return interaction.editReply(
						`${bot.error} **Please Mention a Text Channel To Set!**`
					)
				finalData['channel'] = channel.id
				await guilds.findOneAndUpdate(
					{ guildId: interaction.guild.id },
					{
						logging: true,
						logging_channel: finalData.channel
					}
				)
				interaction.editReply(
					`${bot.tick} **Logging Channel Has Been Set Successfully as \`${
						channel.name
					}\`!**`
				)
			} catch (e) {
				let emed = new EmbedBuilder()
					.setTitle(`${bot.error} • Error Occured`)
					.setDescription(`\`\`\`${e.stack}\`\`\``)
					.setColor(bot.color)

				bot.sendhook(null, {
					channel: bot.err_chnl,
					embed: emed
				})

				interaction.followUp({
					embeds: [
						{
							description: `${
								bot.error
							} Error, try again later \n Error: ${e} \n [Contact Support](https://comfibot.tk/discord) `,
							color: bot.color
						}
					]
				})
			}
		}

		if (subcommand === 'disable') {
			try {
				let channel = interaction.guild.channels.cache.get(
					guild.logging_channel
				)
				await guilds.findOneAndUpdate(
					{ guildId: interaction.guild.id },
					{
						log: false
					}
				)

				interaction.editReply(
					`${bot.tick} **Logging System Has Been Successfully Disabled in \`${
						channel.name
					}\`**`
				)
			} catch (e) {
				let emed = new MessageEmbed()
					.setTitle(`${bot.error} • Error Occured`)
					.setDescription(`\`\`\`${e.stack}\`\`\``)
					.setColor(bot.color)

				bot.sendhook(null, {
					channel: bot.err_chnl,
					embed: emed
				})

				interaction.followUp({
					embeds: [
						{
							description: `${
								bot.error
							} Error, try again later \n Error: ${e} \n [Contact Support](https://comfibot.tk/discord) `,
							color: bot.color
						}
					]
				})
			}
		}
	}
}
