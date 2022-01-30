const guilds = require('../models/guild')
const { permissions}
 = require("discord.js")
  
module.exports = async (bot) => {

 const DarkDashboard = require('dbd-dark-dashboard');
  const prefix = "/"
  const web = process.env["web"]
  const webp = process.env["webp"]
  
  let DBD = require('discord-dashboard');
  await DBD.useLicense('6968082f-cc27-4659-9c92-6ec40f28908c');
  DBD.Dashboard = DBD.UpdatedClass();
  
let fun = []
  
bot.slashCommands.filter((cmd) => cmd.directory == 'fun')
.map(command =>
  fun.push({
    commandName: `/${command.name}`,
    commandUsage: command.usage							? `${prefix}${command.name} ${command.usage}`							
    : `${prefix}${command.name}`,
    commandDescription: command.description							
      ? command.description							
      : 'No description for this command.',
    commandAlias: command.aliases ?
          `${command.aliases.join(", ")}` :
          "No aliases.",
  })
)
  
let info = []
  
bot.slashCommands.filter((cmd) => cmd.directory == 'info')
.map(command =>
  info.push({
    commandName: `/${command.name}`,
    commandUsage: command.usage							? `${prefix}${command.name} ${command.usage}`							
    : `${prefix}${command.name}`,
    commandDescription: command.description							
      ? command.description							
      : 'No description for this command.',
    commandAlias: command.aliases ?
          `${command.aliases.join(", ")}` :
          "No aliases.",
  })
)

let level = []
  
bot.slashCommands.filter((cmd) => cmd.directory == 'level')
.map(command =>
  level.push({
    commandName: `/${command.name}`,
    commandUsage: command.usage							? `${prefix}${command.name} ${command.usage}`							
    : `${prefix}${command.name}`,
    commandDescription: command.description							
      ? command.description							
      : 'No description for this command.',
    commandAlias: command.aliases ?
          `${command.aliases.join(", ")}` :
          "No aliases.",
  })
)

let mod = []
  
bot.slashCommands.filter((cmd) => cmd.directory == 'mod')
.map(command =>
  mod.push({
    commandName: `/${command.name}`,
    commandUsage: command.usage							? `${prefix}${command.name} ${command.usage}`						
    : `${prefix}${command.name}`,
    commandDescription: command.description							
      ? command.description							
      : 'No description for this command.',
    commandAlias: command.aliases ?
          `${command.aliases.join(", ")}` :
          "No aliases.",
  })
)

let role = []
  
bot.slashCommands.filter((cmd) => cmd.directory == 'role')
.map(command =>
  role.push({
    commandName: `/${command.name}`,
    commandUsage: command.usage							? `${prefix}${command.name} ${command.usage}`							
    : `${prefix}${command.name}`,
    commandDescription: command.description							
      ? command.description							
      : 'No description for this command.',
    commandAlias: command.aliases ?
          `${command.aliases.join(", ")}` :
          "No aliases.",
  })
)

let setup = []
  
bot.slashCommands.filter((cmd) => cmd.directory == 'setting')
.map(command =>
  setup.push({
    commandName: `/${command.name}`,
    commandUsage: command.usage							? `${prefix}${command.name} ${command.usage}`							
    : `${prefix}${command.name}`,
    commandDescription: command.description							
      ? command.description							
      : 'No description for this command.',
    commandAlias: command.aliases ?
          `${command.aliases.join(", ")}` :
          "No aliases.",
  })
)

let utility = []
  
bot.slashCommands.filter((cmd) => cmd.directory == 'utility')
.map(command =>
  utility.push({
    commandName: `/${command.name}`,
    commandUsage: command.usage							? `${prefix}${command.name} ${command.usage}`							
    : `${prefix}${command.name}`,
    commandDescription: command.description							
      ? command.description							
      : 'No description for this command.',
    commandAlias: command.aliases ?
          `${command.aliases.join(", ")}` :
          "No aliases.",
  })
)

  const Dashboard = new DBD.Dashboard({
    port: 8080,
    client: {
      id: process.env["clientID"],
      secret: process.env["Secret"]
    },
    redirectUri: `${webp}discord/callback`,
    domain: `${web}`,
    bot: bot,
    theme: DarkDashboard({
      information: {
        createdBy: "Xx-Mohit-xX",
        websiteTitle: "Comfi™",
        websiteName: "Comfi™",
        websiteUrl: `${web}`,
        supportServer: "https://discord.gg/HNfhvCeR6d",
        imageFavicon: "https://i.imgur.com/At2XO1M.png",
        iconURL: "https://i.imgur.com/At2XO1M.png",
        pageBackGround: "linear-gradient(#F21262, #FAB3CA)",
        mainColor: "#F21262",
        subColor: "#FAB3CA",
      },
      invite: {
        clientId: bot.user.id,
        scopes: ["bot", "applications.commands"],
        permissions: "8",
      },
      guildAfterAuthorization: { 
        use: true, 
        guildId: "881789379553656872" 
      },
      support: {
        slash: '/support',
        inviteURl: "https://discord.gg/HNfhvCeR6d"
      },
      index: {
        card: {
          category: "Comfi - The Aesthetic Multipurpose Bot",
          image: "https://cdn.discordapp.com/attachments/804978370050916362/936146613242576916/IMG_0359.jpg",
          footer: '↠ Made with love by ꒰⚘݄꒱₊_❝ moonbow ᵕ̈ 🌸#5817',
        },
        feeds: {
          description: "↠ Thanks for Checking My Dashboard",
          footer: "<a href='https://ko-fi.com/E1E057WWV' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi3.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>"
        },
        information: { 
          category: "Note", 
          title: "Information", 
          description: `This bot and panel is currently a work in progress so contact support if you find any issues on discord.`, 
          footer: `<a href="https://discord.gg/HNfhvCeR6d"> ↠ Click here to join my Support Server</a>`
        },
      },
      guilds: {
        cardTitle: "Guilds", cardDescription: "Here are all the guilds you currenly have permissions for:",
      }, 
      guildSettings: {
        cardTitle: "Guild Settings",
        cardDescription: "Here you can manage all the settings for your guild:",
      },
      
      commands: [
      {
        category: `Fun`,
        subTitle: `Fun Commands`,
        aliasesDisabled: true,
        list: fun,
      },
      {
        category: `Info`,
        subTitle: `Info Commands`,
        aliasesDisabled: true,
        list: info,
      },
      {
        category: `Levels`,
        subTitle: `Levelings Commands`,
        aliasesDisabled: true,
        list: level,
      },
     {
        category: `Mod`,
        subTitle: `Moderation Commands`,
        aliasesDisabled: true,
        list: mod,
      },
    {
        category: `Roles`,
        subTitle:  `Role Commands`,
        aliasesDisabled: true,
        list: role,
      },
    {
        category: `Setup`,
        subTitle: `Setup Commands`,
        aliasesDisabled: true,
        list: setup,
      },
    {
        category: `Utility`,
        subTitle: `Utility Commands`,
        aliasesDisabled: true,
        list: utility,
      },
],
          
    }),
                               
    settings: [
      {
        categoryId: 'gen',
        categoryName: "General",
        categoryDescription: "Setup your bot with default settings!",
        categoryOptionsList: [
          {
            optionId: 'nick',
            optionName: "Nickname",
            optionDescription: "Change Comfi's nickname for your guild",
            optionType: DBD.formTypes.input(bot.user.username, 1, 20, false, false),
            getActualSet: async ({ guild }) => {
              return bot.guilds.cache.get(guild.id).me.displayName;
            },
            setNew: async ({ guild, newData }) => {
          await bot.guilds.cache.get(guild.id).me.setNickname(newData)
              return;
            },
          },
        ]
      },
      {
        categoryId: "auto",
        categoryName: "AutoMod",
        categoryDescription: "Setup Comfi's Auto Mod system",
        categoryOptionsList: [
{
            optionId: 'logtoggle',
            optionName: "General Logs Toggle",
            optionDescription: "Toggle Comfi's General Logging System",
            optionType: DBD.formTypes.select({"True": true, "False": false}, false),
            getActualSet: async ({ guild }) => {       
      const wel
= await guilds.findOne({guildId: guild.id})
        return wel.logging;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  logging: newData
                } 
              )
              return;
            }
          },          
          {
            optionId: 'logchannel',
            optionName: "General Logs Channel",
            optionDescription: "Setup Comfi's General Logs",
            optionType: DBD.formTypes.channelsSelect(false, channelTypes = ["GUILD_TEXT"]),
            getActualSet: async ({ guild }) => {       
      const wel
= await guilds.findOne({guildId: guild.id})
        return wel.logging_channel;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                logging_channel: newData
                } 
              )
              return;
            }
          },          
          {
            optionId: 'modtoggle',
            optionName: "Mod Toggle",
            optionDescription: "Toggle Comfi's Modlogs System",
            optionType: DBD.formTypes.select({"True": true, "False": false}, false),
            getActualSet: async ({ guild }) => {       
      const wel
= await guilds.findOne({guildId: guild.id})
        return wel.welcome;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  modlog: newData
                } 
              )
              return;
            }
          },          
          {           
            optionId: 'modchannel',
            optionName: "ModLogs Channel",
            optionDescription: "Setup Channel for Mod Logs",
            optionType: DBD.formTypes.channelsSelect(false, channelTypes = ["GUILD_TEXT"]),
            getActualSet: async ({ guild }) => {       
      const wel
= await guilds.findOne({guildId: guild.id})
        return wel.mod_channel;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  mod_channel: newData
                } 
              )
              return;
            }
          },
          {
            optionId: 'antitoggle',
            optionName: "AntiScam Toggle",
            optionDescription: "Toggle Comfi's AntiScam System",
            optionType: DBD.formTypes.select({"True": true, "False": false}, false),
            getActualSet: async ({ guild }) => {       
      const wel
= await guilds.findOne({guildId: guild.id})
        return wel.anti_scam;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  anti_scam: newData
                } 
              )
              return;
            }
          },
          {
            optionId: 'antiduration',
            optionName: "AntiScam Timeout Duration",
            optionDescription: "Setup AntiScam System's Timeout Duration",
            optionType: DBD.formTypes.input("12h", 1, 10, false, false),
            getActualSet: async ({ guild }) => {       
      const wel
= await guilds.findOne({guildId: guild.id})
        return bot.ms(wel.anti_scam_time);
            },
            setNew: async ({ guild, newData }) => {

const Time = bot.ms(newData) 
if (!Time) return await {error: `Provide a valid time in d, h, m, s, ms format`} 
if (Time <= 10000) return {error: `Time cant be lesser than 10 seconds`} 
if (Time > 2332800000) return {error: `Time can't be greater than 27 days !!`}
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
              anti_scam_time: newData
                } 
              )
              return;
            }
          },
        ],
      },
      {
        categoryId: 'wel',
        categoryName: "Welcome",
        categoryDescription: "Setup Comfi's Welcome System!",
        categoryOptionsList: [
          {
            optionId: 'weltoggle',
            optionName: "Toggle",
            optionDescription: "Toggle Comfi's Welcome System",
            optionType: DBD.formTypes.select({"True": true, "False": false}, false),
            getActualSet: async ({ guild }) => {       
      const wel
= await guilds.findOne({guildId: guild.id})
        return wel.welcome;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  welcome: newData
                } 
              )
              return;
            }
          },
          {
            optionId: 'welemtoggle',
            optionName: "Embed-Toggle",
            optionDescription: "Embed Toggle Comfi's Welcome System",
            optionType: DBD.formTypes.select({"True": true, "False": false}, false),
            getActualSet: async ({ guild }) => {       
      const wel
= await guilds.findOne({guildId: guild.id})
        return wel.welcome_embedtgl;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  welcome_embedtgl: newData
                } 
              )
              return;
            }
          },
          {
            optionId: 'weldmtoggle',
            optionName: "Dm-Toggle",
            optionDescription: "Dm Toggle Comfi's Welcome System",
            optionType: DBD.formTypes.select({"True": true, "False": false}, false),
            getActualSet: async ({ guild }) => {       
      const wel
= await guilds.findOne({guildId: guild.id})
        return wel.welcome_dmuser;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  welcome_dmuser: newData
                } 
              )
              return;
            }
          },
          {
            optionId: 'welchannel',
            optionName: "Channel",
            optionDescription: "Channel for Comfi's Welcome System",
            optionType: DBD.formTypes.channelsSelect(false, channelTypes = ["GUILD_TEXT"]),
            getActualSet: async ({ guild }) => {       
      const wel
= await guilds.findOne({guildId: guild.id})
        return wel.welcome_channel;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  welcome_channel: newData
                } 
              )
              return;
            }
          },
          {
            optionId: 'welmessage',
            optionName: "Message",
            optionDescription: "Message for Comfi's Welcome System",
            optionType: DBD.formTypes.input("", 1, 3999, false, false),
            getActualSet: async ({ guild }) => {       
      const wel
= await guilds.findOne({guildId: guild.id})
        return wel.welcome_message;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  welcome_message: newData
                } 
              )
              return;
            },
            allowedCheck: async ({guild, user}) => {
    const wel = await guilds.findOne({guildId: guild.id})

if (wel.welcome_embedtgl) return {allowed: false, errorMessage: "Welcome Embed Toggle is enabled,  turn it off to send non - embed message"}
              
return {allowed: true, errorMessage:  null}
              
            }
          },
                    {
            optionId: 'welembed',
            optionName: "Embed",
            optionDescription: `Embed for Comfi's Welcome System`, 
            optionType: DBD.formTypes.embedBuilder({username: bot.user.username, avatarURL: bot.user.displayAvatarURL({dynamic:true})}),
            getActualSet: async ({ guild, user }) => {       
      const wel
= await guilds.findOne({guildId: guild.id})

              
        return wel.welcome_embed[0];
            },
            setNew: async ({ guild, newData }) => {
          
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  welcome_embed: newData
                } 
              )
              
              return;
            },
            allowedCheck: async ({guild, user}) => {
    const wel = await guilds.findOne({guildId: guild.id})

if (!wel.welcome_embedtgl) return {allowed: false, errorMessage: "Welcome Embed Toggle is disabled,  turn it on to send an embed"}
              
return {allowed: true, errorMessage:  null}
          }
          },
                    {
            optionId: 'welimage',
            optionName: "Image",
            optionDescription: "Image for Comfi's Welcome System",
            optionType: DBD.formTypes.input("", 1, 100, false, false),
            getActualSet: async ({ guild }) => {       
      const wel
= await guilds.findOne({guildId: guild.id})
        return wel.welcome_image;
            },
            setNew: async ({ guild, newData }) => {

const reg = ("^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)($|\?.*$)")     

if (!reg.match(newData)) return {error: "Submit a Valid Image Url"}
              
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  welcome_image: newData
                } 
              )
              return;
            }
          },
          { 
            optionType: 'spacer', 
            title: "Variables", 
            description: `<span style="color: #F21262; background: #101112;">{{user#mention}}</span> - mentions the user<br><span style="color: #F21262; background: #101112;">{{user#tag}}</span> - the users tag<br><span style="color: #F21262; background: #101112;">{{user#avatar}}</span> - the users avatar url<br><span style="color: #F21262; background: #101112;">{{user#id}}</span> - the users id<br><span style="color: #F21262; background: #101112;">{{server#membercount}}</span> - the servers membercount<br><span style="color: #F21262; background: #101112;">{{server#humancount}}</span> - humans/non-bot members count of the server<br><span style="color: #F21262; background: #101112;">{{server#name}}</span> - the servers name<br><span style="color: #F21262; background: #101112;">{server#id}}</span> - the servers id<br><span style="color: #F21262; background: #101112;">{{server#icon}}</span> - the server icon url<br><span style="color: #F21262; background: #101112;">{{join#position}}</span> - the users join position` 
          },          
          {
            optionId: 'weljoin',
            optionName: "JoinRole",
            optionDescription: "JoinRole for Comfi's Welcome System",
            optionType: DBD.formTypes.rolesMultiSelect( false, false ),
            getActualSet: async ({ guild }) => {       
      const wel
= await guilds.findOne({guildId: guild.id})
        return wel.welcome_joinrole || [];
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  welcome_joinrole: newData                 } 
              )
              return;
            }
          },   
          {
            optionId: 'welnick',
            optionName: "AutoNick",
            optionDescription: "AutoNick for Comfi's Welcome System",
            optionType: DBD.formTypes.input("", 1, 32, false, false),
            getActualSet: async ({ guild }) => {       
      const wel
= await guilds.findOne({guildId: guild.id})
        return wel.welcome_auto_nick;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  welcome_auto_nick: newData                 } 
              )
              return;
            },
}           
        ]
      },
       {
        categoryId: 'leave',
        categoryName: "Leave",
        categoryDescription: "Setup Comfi's Leave System!",
        categoryOptionsList: [
          {
            optionId: 'levtoggle',
            optionName: "Toggle",
            optionDescription: "Toggle Comfi's Leave System",
            optionType: DBD.formTypes.select({"True": true, "False": false}, false),
            getActualSet: async ({ guild }) => {       
      const leave
= await guilds.findOne({guildId: guild.id})
        return leave.leave;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  leave: newData
                } 
              )
              return;
            }
          },
          {
            optionId: 'levemtoggle',
            optionName: "Embed-Toggle",
            optionDescription: "Embed Toggle Comfi's Leave System",
            optionType: DBD.formTypes.select({"True": true, "False": false}, false),
            getActualSet: async ({ guild }) => {       
      const leave
= await guilds.findOne({guildId: guild.id})
        return leave.leave_embedtgl;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  leave_embedtgl: newData
                } 
              )
              return;
            }
          },
          {
            optionId: 'levdmtoggle',
            optionName: "Dm-Toggle",
            optionDescription: "Dm Toggle Comfi's Leave System",
            optionType: DBD.formTypes.select({"True": true, "False": false}, false),
            getActualSet: async ({ guild }) => {       
      const leave
= await guilds.findOne({guildId: guild.id})
        return leave.leave_dmuser;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  welcome_dmuser: newData
                } 
              )
              return;
            }
          },
          {
            optionId: 'levchannel',
            optionName: "Channel",
            optionDescription: "Channel for Comfi's Leave System",
            optionType: DBD.formTypes.channelsSelect(false, channelTypes = ["GUILD_TEXT"]),
            getActualSet: async ({ guild }) => {       
      const leave
= await guilds.findOne({guildId: guild.id})
        return leave.leave_channel;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  leave_channel: newData
                } 
              )
              return;
            }
          },
          {
            optionId: 'levmessage',
            optionName: "Message",
            optionDescription: "Message for Comfi's Leave System",
            optionType: DBD.formTypes.input("", 1, 3999, false, false),
            getActualSet: async ({ guild }) => {       
      const leave
= await guilds.findOne({guildId: guild.id})
        return leave.leave_message;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  leave_message: newData
                } 
              )
              return;
            },
            allowedCheck: async ({guild, user}) => {
    const leave = await guilds.findOne({guildId: guild.id})

if (leave.leave_embedtgl) return {allowed: false, errorMessage: "Leave Embed Toggle is enabled,  turn it off to send non - embed message"}
              
return {allowed: true, errorMessage:  null}
              
            }
          },
                    {
            optionId: 'levembed',
            optionName: "Embed",
            optionDescription: `Embed for Comfi's Leave System`, 
            optionType: DBD.formTypes.embedBuilder({username: bot.user.username, avatarURL: bot.user.displayAvatarURL({dynamic:true})}),
            getActualSet: async ({ guild, user }) => {       
      const leave
= await guilds.findOne({guildId: guild.id})

        return leave.leave_embed[0];
            },
            setNew: async ({ guild, newData }) => {
          
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  leave_embed: newData
                } 
              )
              
              return;
            },
            allowedCheck: async ({guild, user}) => {
    const leave = await guilds.findOne({guildId: guild.id})

if (!leave.leave_embedtgl) return {allowed: false, errorMessage: "Leave Embed Toggle is disabled,  turn it on to send an embed"}
              
return {allowed: true, errorMessage:  null}
          }
          },
                    {
            optionId: 'levimage',
            optionName: "Image",
            optionDescription: "Image for Comfi's Leave System",
            optionType: DBD.formTypes.input("", 1, 100, false, false),
            getActualSet: async ({ guild }) => {       
      const leave
= await guilds.findOne({guildId: guild.id})
        return leave.leave_image;
            },
            setNew: async ({ guild, newData }) => {

const reg = ("^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)($|\?.*$)")     

if (!reg.match(newData)) return {error: "Submit a Valid Image Url"}
              
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  leave_image: newData
                } 
              )
              return;
            }
          },
          { 
            optionType: 'spacer', 
            title: "Variables", 
            description: `<span style="color: #F21262; background: #101112;">{{user#mention}}</span> - mentions the user<br><span style="color: #F21262; background: #101112;">{{user#tag}}</span> - the users tag<br><span style="color: #F21262; background: #101112;">{{user#avatar}}</span> - the users avatar url<br><span style="color: #F21262; background: #101112;">{{user#id}}</span> - the users id<br><span style="color: #F21262; background: #101112;">{{server#membercount}}</span> - the servers membercount<br><span style="color: #F21262; background: #101112;">{{server#humancount}}</span> - humans/non-bot members count of the server<br><span style="color: #F21262; background: #101112;">{{server#name}}</span> - the servers name<br><span style="color: #F21262; background: #101112;">{server#id}}</span> - the servers id<br><span style="color: #F21262; background: #101112;">{{server#icon}}</span> - the server icon url` 
          },       
        ]
      },     
       {
        categoryId: 'bst',
        categoryName: "Boost",
        categoryDescription: "Setup Comfi's Boost System!",
        categoryOptionsList: [
          {
            optionId: 'bsttoggle',
            optionName: "Toggle",
            optionDescription: "Toggle Comfi's Boost System",
            optionType: DBD.formTypes.select({"True": true, "False": false}, false),
            getActualSet: async ({ guild }) => {       
      const bst
= await guilds.findOne({guildId: guild.id})
        return bst.bst;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  boost: newData
                } 
              )
              return;
            }
          },
          {
            optionId: 'bstemtoggle',
            optionName: "Embed-Toggle",
            optionDescription: "Embed Toggle Comfi's Boost System",
            optionType: DBD.formTypes.select({"True": true, "False": false}, false),
            getActualSet: async ({ guild }) => {       
      const bst
= await guilds.findOne({guildId: guild.id})
        return bst.boost_embedtgl;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  boost_embedtgl: newData
                } 
              )
              return;
            }
          },
          {
            optionId: 'bstchannel',
            optionName: "Channel",
            optionDescription: "Channel for Comfi's Boost System",
            optionType: DBD.formTypes.channelsSelect(false, channelTypes = ["GUILD_TEXT"]),
            getActualSet: async ({ guild }) => {       
      const bst
= await guilds.findOne({guildId: guild.id})
        return bst.boost_channel;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  boost_channel: newData
                } 
              )
              return;
            }
          },
          {
            optionId: 'bstmessage',
            optionName: "Message",
            optionDescription: "Message for Comfi's Boost System",
            optionType: DBD.formTypes.input("", 1, 3999, false, false),
            getActualSet: async ({ guild }) => {       
      const bst
= await guilds.findOne({guildId: guild.id})
        return bst.boost_message;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  boost_message: newData
                } 
              )
              return;
            },
            allowedCheck: async ({guild, user}) => {
    const bst = await guilds.findOne({guildId: guild.id})

if (bst.boost_embedtgl) return {allowed: false, errorMessage: "Boost Embed Toggle is enabled,  turn it off to send non - embed message"}
              
return {allowed: true, errorMessage: null}
              
            }
          },
                    {
            optionId: 'bstembed',
            optionName: "Embed",
            optionDescription: `Embed for Comfi's Boost System`, 
            optionType: DBD.formTypes.embedBuilder({username: bot.user.username, avatarURL: bot.user.displayAvatarURL({dynamic:true})}),
            getActualSet: async ({ guild, user }) => {       
      const bst
= await guilds.findOne({guildId: guild.id})

        return bst.boost_embed[0];
            },
            setNew: async ({ guild, newData }) => {
          
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  boost_embed: newData
                } 
              )
              
              return;
            },
            allowedCheck: async ({guild, user}) => {
    const bst = await guilds.findOne({guildId: guild.id})

if (!bst.boost_embedtgl) return {allowed: false, errorMessage: "Boost Embed Toggle is disabled,  turn it on to send an embed"}
              
return {allowed: true, errorMessage:  null}
          }
          },
                    {
            optionId: 'bstimage',
            optionName: "Image",
            optionDescription: "Image for Comfi's Boost System",
            optionType: DBD.formTypes.input("", 1, 100, false, false),
            getActualSet: async ({ guild }) => {       
      const bst
= await guilds.findOne({guildId: guild.id})
        return bst.boost_image;
            },
            setNew: async ({ guild, newData }) => {

const reg = ("^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)($|\?.*$)")     

if (!reg.match(newData)) return {error: "Submit a Valid Image Url"}
              
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  boost_image: newData
                } 
              )
              return;
            }
          },
          { 
            optionType: 'spacer', 
            title: "Variables", 
            description: `<span style="color: #F21262; background: #101112;">{{user#mention}}</span> - mentions the user<br><span style="color: #F21262; background: #101112;">{{user#tag}}</span> - the users tag<br><span style="color: #F21262; background: #101112;">{{user#avatar}}</span> - the users avatar url<br><span style="color: #F21262; background: #101112;">{{server#icon}}</span> - the server icon url<br><span style="color: #F21262; background: #101112;">{{server#name}}</span> - the servers name<br><span style="color: #F21262; background: #101112;">{boost#count}}</span> - the servers boost count` 
          },       
        ]
      },     
      {
        categoryId: 'lvl',
        categoryName: "Leveling",
        categoryDescription: "Setup Comfi's Leveling System!",
        categoryOptionsList: [
          {
            optionId: 'lvltoggle',
            optionName: "Toggle",
            optionDescription: "Toggle Comfi's Leveling System",
            optionType: DBD.formTypes.select({"True": true, "False": false}, false),
            getActualSet: async ({ guild }) => {       
      const lvl
= await guilds.findOne({guildId: guild.id})
        return lvl.leveling;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  leveling: newData
                } 
              )
              return;
            }
          },
          {
            optionId: 'lvlemtoggle',
            optionName: "Embed-Toggle",
            optionDescription: "Embed Toggle Comfi's Leveling System",
            optionType: DBD.formTypes.select({"True": true, "False": false}, false),
            getActualSet: async ({ guild }) => {       
      const lvl
= await guilds.findOne({guildId: guild.id})
        return lvl.leveling_embedtgl;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  leveling_embedtgl: newData
                } 
              )
              return;
            }
          },
          {
            optionId: 'lvlcoleave',
            optionName: "Co-Leave",
            optionDescription: "Co-Leave Toggle for Comfi's Leveling System",
            optionType: DBD.formTypes.select({"True": true, "False": false}, false),
            getActualSet: async ({ guild }) => {       
      const lvl
= await guilds.findOne({guildId: guild.id})
        return lvl.leveling_coleave;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  leveling_coleave: newData
                } 
              )
              return;
            }
          },          
          {
            optionId: 'lvlchannel',
            optionName: "Channel",
            optionDescription: "Channel for Comfi's Leveling System",
            optionType: DBD.formTypes.channelsSelect(false, channelTypes = ["GUILD_TEXT"]),
            getActualSet: async ({ guild }) => {       
      const lvl
= await guilds.findOne({guildId: guild.id})
        return lvl.leveling_channel;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  leveling_channel: newData
                } 
              )
              return;
            }
          },
          {
            optionId: 'lvlmessage',
            optionName: "Message",
            optionDescription: "Message for Comfi's Leveling System",
            optionType: DBD.formTypes.input("", 1, 3999, false, false),
            getActualSet: async ({ guild }) => {       
      const lvl
= await guilds.findOne({guildId: guild.id})
        return lvl.leveling_message;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  leveling_message: newData
                } 
              )
              return;
            },
            allowedCheck: async ({guild, user}) => {
    const lvl = await guilds.findOne({guildId: guild.id})

if (lvl.leveling_embedtgl) return {allowed: false, errorMessage: "Leveling Embed Toggle is enabled,  turn it off to send non - embed message"}
              
return {allowed: true, errorMessage: null}
              
            }
          },
                    {
            optionId: 'lvlembed',
            optionName: "Embed",
            optionDescription: `Embed for Comfi's Leveling System`, 
            optionType: DBD.formTypes.embedBuilder({username: bot.user.username, avatarURL: bot.user.displayAvatarURL({dynamic:true})}),
            getActualSet: async ({ guild, user }) => {       
      const lvl
= await guilds.findOne({guildId: guild.id})

        return lvl.leveling_embed[0];
            },
            setNew: async ({ guild, newData }) => {
          
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  leveling_embed: newData
                } 
              )
              
              return;
            },
            allowedCheck: async ({guild, user}) => {
    const lvl = await guilds.findOne({guildId: guild.id})

if (!lvl.leveling_embedtgl) return {allowed: false, errorMessage: "Leveling Embed Toggle is disabled,  turn it on to send an embed"}
              
return {allowed: true, errorMessage:  null}
            }
          },
          { 
            optionType: 'spacer', 
            title: "Variables", 
            description: `<span style="color: #F21262; background: #101112;">{{user#mention}}</span> - mentions the user<br><span style="color: #F21262; background: #101112;">{{user#tag}}</span> - the users tag<br><span style="color: #F21262; background: #101112;">{{user#avatar}}</span> - the users avatar url<br><span style="color: #F21262; background: #101112;">{{level}}</span> - the users new level<br><span style="color: #F21262; background: #101112;">{{xp}}</span> - the usersxp<br><span style="color: #F21262; background: #101112;">{requiredxp}}</span> - the new required xp count` 
          }, 
                    {
            optionId: 'lvlimage',
            optionName: "Image",
            optionDescription: "Image for Comfi's Leveling System",
            optionType: DBD.formTypes.input("", 1, 100, false, false),
            getActualSet: async ({ guild }) => {       
      const lvl
= await guilds.findOne({guildId: guild.id})
        return lvl.leveling_image;
            },
            setNew: async ({ guild, newData }) => {

const reg = ("^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)($|\?.*$)")     

if (!reg.match(newData)) return {error: "Submit a Valid Image Url"}
              
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  leveling_image: newData
                } 
              )
              return;
            }
          },          
        ]
      },   
      {
        categoryId: 'tkt',
        categoryName: "Ticket",
        categoryDescription: "Setup Comfi's Ticket System!",
        categoryOptionsList: [
          {
            optionId: 'tkttoggle',
            optionName: "Toggle",
            optionDescription: "Toggle Comfi's Ticket System",
            optionType: DBD.formTypes.select({"True": true, "False": false}, false),
            getActualSet: async ({ guild }) => {       
      const tkt
= await guilds.findOne({guildId: guild.id})
        return tkt.ticket;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  ticket: newData
                } 
              )
              return;
            }
          },      
          {
            optionId: 'tktchannel',
            optionName: "Channel",
            optionDescription: "Channel for Comfi's Ticket System",
            optionType: DBD.formTypes.channelsSelect(false, channelTypes = ["GUILD_CATEGORY"]),
            getActualSet: async ({ guild }) => {       
      const tkt
= await guilds.findOne({guildId: guild.id})
        return tkt.ticket_channel;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  ticket_channel: newData
                } 
              )
              return;
            }
          },
          {
            optionId: 'tktrole',
            optionName: "Support",
            optionDescription: "Support for Comfi's Ticket System",
            optionType: DBD.formTypes.rolesSelect(false),
            getActualSet: async ({ guild }) => {       
      const tkt
= await guilds.findOne({guildId: guild.id})
        return tkt.ticket_role;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  ticket_role: newData
                } 
              )
              return;
            }
          },
        ]
      },          
      {
        categoryId: "misc",
        categoryName: "Misc",
        categoryDescription: "Setup Comfi's Misc System",
        categoryOptionsList: [
{
            optionId: 'chattoggle',
            optionName: "Chatbot Toggle",
            optionDescription: "Toggle Comfi's Chatbot System",
            optionType: DBD.formTypes.select({"True": true, "False": false}, false),
            getActualSet: async ({ guild }) => {       
      const wel
= await guilds.findOne({guildId: guild.id})
        return wel.chatbot;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  chatbot: newData
                } 
              )
              return;
            }
          },          
          {
            optionId: 'chatchannel',
            optionName: "Chatbot Channel",
            optionDescription: "Setup Comfi's Chatbot Channel",
            optionType: DBD.formTypes.channelsSelect(false, channelTypes = ["GUILD_TEXT"]),
            getActualSet: async ({ guild }) => {       
      const wel
= await guilds.findOne({guildId: guild.id})
        return wel.chat_channel;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                chat_channel: newData
                } 
              )
              return;
            }
          },          
          {
            optionId: 'conftoggle',
            optionName: "Confession Toggle",
            optionDescription: "Toggle Comfi's Anonymous Confession",
            optionType: DBD.formTypes.select({"True": true, "False": false}, false),
            getActualSet: async ({ guild }) => {       
      const wel
= await guilds.findOne({guildId: guild.id})
        return wel.confession;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  confession: newData
                } 
              )
              return;
            }
          },          
          {           
            optionId: 'confchannel',
            optionName: "Confession Channel",
            optionDescription: "Setup Channel for Anonymous Confession",
            optionType: DBD.formTypes.channelsSelect(false, channelTypes = ["GUILD_TEXT"]),
            getActualSet: async ({ guild }) => {       
      const wel
= await guilds.findOne({guildId: guild.id})
        return wel.confess_channel;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  confess_channel: newData
                } 
              )
              return;
            }
          },
          {
            optionId: 'nqntoggle',
            optionName: "NQN Toggle",
            optionDescription: "Toggle Comfi's NQN",
            optionType: DBD.formTypes.select({"True": true, "False": false}, false),
            getActualSet: async ({ guild }) => {       
      const wel
= await guilds.findOne({guildId: guild.id})
        return wel.nqn;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  nqn: newData
                } 
              )
              return;
            }
          },
          {
            optionId: 'sugtoggle',
            optionName: "Suggestion Toggle",
            optionDescription: "Toggle Comfi's Suggestion System",
            optionType: DBD.formTypes.select({"True": true, "False": false}, false),
            getActualSet: async ({ guild }) => {       
      const wel
= await guilds.findOne({guildId: guild.id})
        return wel.suggestions;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  suggestions: newData
                } 
              )
              return;
            }
          },          
          {           
            optionId: 'sugchannel',
            optionName: "Suggestion Channel",
            optionDescription: "Setup Channel for Suggestion System",
            optionType: DBD.formTypes.channelsSelect(false, channelTypes = ["GUILD_TEXT"]),
            getActualSet: async ({ guild }) => {       
      const wel
= await guilds.findOne({guildId: guild.id})
        return wel.suggestions_channel;
            },
            setNew: async ({ guild, newData }) => {
              await guilds.findOneAndUpdate( 
                { guildId: guild.id 
                }, 
                { 
                  suggestions_channel: newData
                } 
              )
              return;
            }
          },          
        ],
      },
                                          ],
    minimizedConsoleLogs: true,
    assistantsSecureStrorageKey: "Comfi",
    acceptPrivacyPolicy: true,
    reportError: (where, what) => {
      bot.logger.log(`Discord Dashboard Error - ${where}: ${what} `)
}
  });

  Dashboard.init();
};

 