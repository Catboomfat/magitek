const Discord = require('discord.js'),
	mongoose = require('mongoose'),
	chalk = require('chalk'),
	fs = require('fs')

class Comfi extends Discord.Client {
	constructor() {
		super({
			allowedMentions: {
				parse: ['users', 'roles'],
				repliedUser: true
			},
			intents: [
				'GUILDS',
				'GUILD_MEMBERS',
				'GUILD_BANS',
				'GUILD_MESSAGES',
				'GUILD_EMOJIS_AND_STICKERS',
				'GUILD_INVITES',
				'GUILD_MESSAGE_TYPING'
			],
			partials: [
				'MESSAGE',
				'CHANNEL',
				'REACTION',
				'GUILD_MEMBER',
				'GUILD',
				'USER'
			],
			restRequestTimeout: 30000
		})
		this.logger = require('./Logger.js')
		this.color = '#F4B3CA'
		this.error = '<a:error:890107682013474846>'
		this.tick = '<a:tick:890113862706266112>'
		this.crosss = '<a:cross:890113459868553277>'
		this.dash = 'https://comfi.xx-mohit-xx.repl.co/'
		this.ms = require('ms')
		this.on('ready', () => {
			this.logger.ready(`Logged in as ${this.user.tag}`, 'ready')
		})
		this.owners = require('../config.json').owners
		this.login(process.env.TOKEN)
		this.config = require('../config.json')
		this.categories = fs.readdirSync('./commands/')
		this.dbs(process.env.Mongoose)
		this.commands = new Discord.Collection()
		this.aliases = new Discord.Collection()
		this.slashCommands = new Discord.Collection()
		this.timeout = new Discord.Collection()
		this.init()
	}
	dbs(s) {
		mongoose
			.connect(
				s,
				{
					useNewUrlParser: true,
					useUnifiedTopology: true
				}
			)
			.then(() => this.logger.log('Mongodb connected!'))
			.catch(err => this.logger.error(`${err}`))
	}

	init() {
		require('../handler/index')(this)
	}

	async resolveUser(search) {
		if (!search || typeof search !== 'string') return null
		let user = null
		search = search.split(' ').join('')
		if (search.match(/^<@!?(\d+)>$/))
			user = await this.users
				.fetch(search.match(/^<@!?(\d+)>$/)[1])
				.catch(() => {})
		if (search.match(/^!?(\w+)#(\d+)$/) && !user)
			user = this.users.cache.find(
				u =>
					u.username === search.match(/^!?(\w+)#(\d+)$/)[0] &&
					u.discriminator === search.match(/^!?(\w+)#(\d+)$/)[1]
			)
		if (search.match(/.{2,32}/) && !user)
			user = this.users.cache.find(u => u.username === search)
		if (!user) user = await this.users.fetch(search).catch(() => {})
		return user
	}
	/**
	 * @returns {Promise<GuildMember>|null}
	 * @param {string} search
	 * @param {Guild} guild
	 */
	async resolveMember(search, guild) {
		if (!search || typeof search !== 'string') return null
		search = search.split(' ').join('')
		const user = await this.resolveUser(search)
		if (!user) return null
		try {
			return await guild.members.fetch(user)
		} catch (e) {
			null
		}
	}
	/**
	 * @returns {Role|null}
	 * @param {string} search
	 * @param {Guild} guild
	 */
	resolveRole(search, guild) {
		if (!search || typeof search !== 'string') return null
		search = search.split(' ').join('')
		let role = null
		if (search.match(/^<@&!?(\d+)>$/))
			role = guild.roles.cache.get(search.match(/^<@&!?(\d+)>$/)[1])
		if (!role) role = guild.roles.cache.find(r => r.name === search)
		if (!role) role = guild.roles.cache.get(search)
		return role
	}
	/**
	 * @returns {Channel|null}
	 * @param {string} search
	 */
	resolveChannel(search) {
		if (!search) return null
		let channel = null
		channel = this.channels.cache.get(
			search
				.replace('<', '')
				.replace('#', '')
				.replace('>', '')
				.split(' ')
				.join('')
		)
		if (!channel) channel = this.channels.cache.find(c => c.name === search)
		if (!channel) channel = this.channels.cache.get(search)
		return channel
	}
	async getRandomString(length) {
		var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
		var s = ''
		for (var i = 0; i < length; i++) {
			var rnum = Math.floor(Math.random() * chars.length)
			s += chars.substring(rnum, rnum + 1)
		}
		return s
	}
	async timestamp(time, form) {
		var minutes = Math.floor(time / 1000) % 60
		var hours = Math.floor(minutes / 60) % 24
		var days = Math.floor(hours / 24) % 7
		var weeks = Math.floor(days / 7) % 1
		var d = new Date()
		var year = d.getUTCFullYear()
		var month = d.getUTCMonth()
		var day = d.getUTCDate()
		var hour = d.getUTCHours()
		var minute = d.getUTCMinutes()
		var second = d.getUTCSeconds()
		var datum = new Date(
			Date.UTC(
				year,
				month,
				day + days + weeks * 7,
				hour + hours,
				minute + minutes,
				second
			)
		)
		if (form) {
			return '<t:' + datum.getTime() / 1000 + `:${form || ''}>`
		} else {
			return '<t:' + datum.getTime() / 1000 + `>`
		}
	}
	async awaitReply(
		content = null,
		{
			message,
			image,
			embed,
			color = 'BLUE',
			max = 1,
			time = 60000,
			obj = false
		}
	) {
		const filter = m => m.user.id === interaction.user.id
		await interaction.channel.send({
			embeds: embed
				? embed
				: [
						{
							description: content,
							color: color,
							image: {
								url: image ? image : null
							},
							footer: {
								text: `Time: ${format(time)}`
							}
						}
				  ]
		})

		try {
			const collected = await interaction.channel.awaitMessages({
				filter,
				max: max,
				time: time,
				errors: ['time']
			})
			if (obj) {
				return collected.first()
			}
			return collected.first().content
		} catch (e) {
			return false
		}
	}
	async send(
		content = null,
		{
			message,
			embed,
			color = this.color,
			image,
			timeout,
			channel = null,
			type = null
		}
	) {
		let msg = (await type)
			? ((await this.resolveUser(channel)) || interaction.user)
					.send({
						embeds: embed
							? embed
							: [
									{
										author: {
											icon_url: interaction.user.displayAvatarURL({
												dynamic: true
											}),
											name: interaction.user.username
										},
										description: content,
										color: color,
										image: {
											url: image ? image : null
										}
									}
							  ]
					})
					.then(a => {
						if (timeout) {
							setTimeout(() => {
								a.delete()
							}, timeout)
						} else null
					})
			: (channel ? this.channels.cache.get(channel) : interaction.channel)
					.send({
						embeds: embed
							? embed
							: [
									{
										author: {
											icon_url: interaction.user.displayAvatarURL({
												dynamic: true
											}),
											name: interaction.user.username
										},
										description: content,
										color: color,
										image: {
											url: image ? image : null
										}
									}
							  ]
					})
					.then(a => {
						if (timeout) {
							setTimeout(() => {
								a.delete()
							}, timeout)
						} else null
					})

		return { message: msg }
		//EZ :V
	}
	async sendhook(
		msg,
		{
			remove = false,
			channel,
			embed = null,
			name = 'COMFI HOOK',
			avatar = this.user.displayAvatarURL()
		}
	) {
		if (!channel || typeof channel !== 'string')
			throw new SyntaxError('Invaild Channel')
		const channel_ = await this.resolveChannel(channel)
		let webhook = await channel_
			.fetchWebhooks()
			.then(x => x.find(x => x.name === name))
		if (!webhook) webhook = await channel_.createWebhook(name, { avatar })
		return await webhook.send(embed ? { embeds: embed } : msg).then(e => {
			remove ? webhook.delete() : e
		})
	}
	async emoji(name, option) {
		let emojis = this.emojis.cache.find(x => x.name === name)
		if (!emojis) return `:${name}:`
		if (option === 'id') {
			return emojis.id
		}
		if (option === 'name') {
			return emojis.name
		}
		if (emojis) {
			return name
				.split(new RegExp(name, 'g'))
				.join(emojis.toString())
				.split(' ')
				.join('_')
		}
	}

	async msToTime(duration) {
		const ms = Math.floor((duration % 1000) / 100),
			seconds = Math.floor((duration / 1000) % 60),
			minutes = Math.floor((duration / (1000 * 60)) % 60),
			hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

		const hour = hours < 10 ? '0' + hours : hours
		const minute = minutes < 10 ? '0' + minutes : minutes
		const second = seconds < 10 ? '0' + seconds : seconds

		return hour + ':' + minute + ':' + second + '.'
	}
}

module.exports = Comfi
