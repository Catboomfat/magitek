const ms = require("ms");
const pms = require("pretty-ms");
const { db } = require('../../Database.js');
const simplydjs = require("simply-djs")
const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "welcome",
    description: "Sets the welcome system",
    ownerOnly: false,
    options: [
          {
           type: 'SUB_COMMAND',
           description: 'Sets the greet toggle true/false',
           name: 'wel-toggle',
           options: [
            {
            type: 'STRING',
            description: 'Toggle greet',
            name: 'option',
            required: true,
            choices: [
            {
            name: 'true/on',
            value: 'true'  
            },
            {
            name: 'false/off',
            value: 'false'
            }
            ],
            },
           ],
          },
           {
           type: 'SUB_COMMAND',
           description: 'Sets the greet embed toggle true/false',
           name: 'embed-toggle',
           options: [
            {
            type: 'STRING',
            description: 'Toggle greet embed',
            name: 'option',
            required: true,
            choices: [
            {
            name: 'true/on',
            value: 'true'  
            },
            {
            name: 'false/off',
            value: 'false'
            }
            ],
            },
           ],
          },
          {
            type: 'SUB_COMMAND',
            description: 'Sets the channel for welcome',
            name: 'channel',            
            options : [
          {
            type: 'CHANNEL',
            description: 'Channel for Chatbot',
            name: 'name',
            required: true,
        },
              ],
        },
        {
            type: 'SUB_COMMAND',
            description: 'Sets the greet embed',
            name: 'embed',
        },
        {
          type: 'SUB_COMMAND',
          description: 'Helps you with welcome settings',
          name: 'help',
        },
        {
            type: 'SUB_COMMAND',
            description: 'Sets the greet embed image/banner',
            name: 'image',
            options: [
        {
            type: 'STRING',
            name: 'link',
            description: 'Image Url',
            required:  true,
        }
    ]
        },
    ],
    userperm: ["MANAGE_CHANNELS"],
    botperm: ["MANAGE_CHANNELS"],
    /**
     *
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (bot, interaction, args, message) => {

let [ option ] = args
      
if (option === 'toggle') {

const toggle = interaction.options.getString('option')
				await db.set(`Weltog_${interaction.guild.id}`, toggle);
				return interaction.editReply(
					`The Welcome Toggle for **${
						interaction.guild.name
					}** has been set to: **${toggle}**`
				);
  
}

if (option === 'help') {
  const hembed = new MessageEmbed()
    .setTitle("Error")
    .setDescription(":x: You are not authorized to use this command :(")
    .setColor("#FF0000")
    .setTimestamp();
    
    if(!interaction.member.permissions.has("PERMISSIONS.FLAGS_ADMINISTRATOR")) {
      return message.channel.send({ embeds: [ hembed ]});
    }

  const prefix = '/';

  const embed = new MessageEmbed()
    .setTitle("Greetings Setup")
    .setAuthor(interaction.member.displayName)
    .setColor("RANDOM")
    .setTimestamp()
    .setDescription(`**Welcome to the setup.**\nHere are the parameters available which you can set for the greeting message, background image and will it be a embed or not.\n\n`)
    .addField("Parameters you can use in message of Welcome/leave -", "```{user}``` - Mentions the joining or leaving member\n```{user_name}``` - Just gives the username of the join/leave member\n```{user_tag}``` - Shows the user tag. Ex - User#1234\n```{user_id}``` - Shows the user id\n```{server_name}``` - Shows the server name\n```{server_id}``` - Shows the server id\n```{membercount}``` - Shows the member count of the server\n```{user_createdAt}``` - Shows member account creation date\n```{user_createdAgo}``` - Shows the member creation time ago")
    .setFooter(`Requested by ${interaction.member.displayName}`);

  interaction.followUp({ embeds: [embed] });
}

if (option === 'embed-toggle') {

const emtoggle = interaction.options.getString('option')
				await db.set(`Welemtog_${interaction.guild.id}`, emtoggle);
				return interaction.editReply(
					`The Welcome Embed Toggle for **${
						interaction.guild.name
					}** has been set to: **${emtoggle}**`
				);
  
}

if (option === 'channel') {

const channel = interaction.options.getChannel('name');
				if (!channel)
					return interaction.editReply(':x: | **Specify the channel**');
				await db.set(`chatbt_${interaction.guild.id}`, channel.id);
				return interaction.editReply(
					'**The chatbot channel has been set to** ' + channel.toString()
				);
  
}

if (option === 'embed') {

simplydjs.embedCreate(interaction, {   
slash: true,   
}).then((emb) => {
console.log(emb)
})
}

if (option === 'image') {

let url = interaction.options.getString('link')
  
let embed1 = new MessageEmbed()
            .setTitle("Success!!")
            .setColor("#F4B3CA")
            .setDescription(`I have successfully seted the welcome image in this server.\n\nPlease make sure to **not** delete your Image from the Channel! \n\nThis is Only Applicable when __**Embedtoggle**__ is **false**`)
            .setFooter(`Requested by ${interaction.user.username}`, interaction.user.avatarURL({
              dynamic: true
            }))
            interaction.editReply({embeds: [ embed1 ]})
            await db.set(`WelIm_${interaction.guild.id}`, url);

      }
    }}
  