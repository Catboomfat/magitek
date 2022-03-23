/* 
* Comfi Bot for Discord 
* Copyright (C) 2021 Xx-Mohit-xX
* This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International 
* For more information, see README.md and LICENSE 
*/

const { CommandInteraction, EmbedBuilder, ApplicationCommandOptionType } = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
	name: 'covid',
	description: 'Track a country or worldwide COVID-19 cases',
	ownerOnly: false,
	options: [
		{
			name: 'country',
			description: 'The country you want to track',
			type: ApplicationCommandOptionType.String,
			required: true
		}
	],
  directory: "info",
  userperm: [""],
  botperm: [""],

	/**
	 *
	 * @param {CommandInteraction} interaction
	 * @param {String[]} args
	 */
	run: async (bot, interaction, args) => {
		try {
			const country = interaction.options.getString("country")

			const noArgs = new EmbedBuilder()
				.setTitle('Missing fields')
				.setColor(0xff0000)
				.setDescription(
					'You are missing some fields (ex: /covid all || /covid India)'
				)
				.setTimestamp()

			if (!country) return interaction.followUp(noArgs)

			if (country === 'all') {
				fetch(`https://covid19.mathdro.id/api`)
					.then(response => response.json())
					.then(async (data) => {
						let confirmed = data.confirmed.value.toLocaleString()
						let recovered = data.recovered.value.toLocaleString()
						let deaths = data.deaths.value.toLocaleString()

						const embed = new EmbedBuilder()
							.setTitle(`Worldwide COVID-19 Stats 🌎`)
							.addField('Confirmed Cases', confirmed, true)
							.addField('Recovered', recovered, true)
							.addField('Deaths', deaths, true)
            .setColor(bot.color);

						await interaction.followUp({ embeds: [embed] })
					})
			} else {
				fetch(`https://covid19.mathdro.id/api/countries/${country}`)
					.then(response => response.json())
					.then(async (data) => {
						let confirmed = data.confirmed.value.toLocaleString()
						let recovered = data.recovered.value.toLocaleString()
						let deaths = data.deaths.value.toLocaleString()

						const embed = new EmbedBuilder()
							.setTitle(`COVID-19 Stats for **${country}**`)
							.addField('Confirmed Cases', confirmed, true)
							.addField('Recovered', recovered, true)
							.addField('Deaths', deaths, true)
            .setColor(bot.color);

						await interaction.followUp({ embeds: [embed] })
					})
					.catch(e => {
						return interaction.followUp({ content: `Invalid Country Provided` })
					})
			}
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
}
