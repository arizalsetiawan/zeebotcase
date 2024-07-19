// MODULE
process.on('uncaughtException', console.error)
require('./lib/listmenu')
require('./setting')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageContent, generateWAMessage, downloadContentFromMessage, areJidsSameUser, getContentType } = global.baileys
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("@whiskeysockets/baileys")
const fs = require('fs')
const fetch = require('node-fetch')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const speed = require('performance-now')
const path = require('path')
const { fileURLToPath, URL } = require('url')
const axios = require('axios')
const fsx = require('fs-extra')
const ffmpeg = require('fluent-ffmpeg')
const mark = `0@s.whatsapp.net`
const dns = require('dns');
const FormData = require('form-data')
const gtts = require('node-gtts')
const ytdl2= require("ytdl-easy")
const ytdl = require("ytdl-core")
const cheerio = require('cheerio');
const ms = require("ms");
const crypto = require('crypto')
const https = require('https')
const yts = require("yt-search")
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const moment = require('moment-timezone')
const { exec, spawn, execSync } = require("child_process")
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
//const __dirname = dirname(fileURLToPath(import.meta.url))
// LIB FILE
const { color } = require('./lib/color')
const { userXp, userLeveling, } = require("./lib/user");
const _sewa = require('./lib/sewa')
const { msgFilter, addSpam, SpamExpired, cekSpam} = require('./lib/antispam')
const { addError,clearAllError, deleteError, checkError } = require("./lib/totalerror")
const Func = require('./lib/functions')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, formatp, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
 
const { TelegraPh, UploadFileUgu,webp2mp4File } = require('./lib/uploader.js')
const { toAudio, toPTT, toVideo } = require('./lib/converter')
const prem = require("./lib/premium");
//===============================================//
const VnEhanz = JSON.parse(fs.readFileSync('./json/vn.json'))
const StickerEhanz = JSON.parse(fs.readFileSync('./json/sticker.json'))
const ImageEhanz = JSON.parse(fs.readFileSync('./json/image.json'))
const VideoEhanz = JSON.parse(fs.readFileSync('./json/video.json'))
// STICKER REPLY

const { otw } = require('./temp/stickerPack.js')
const thumb = fs.readFileSync ('./media/thumb.jpg')
const docunye = JSON.parse(fs.readFileSync('./json/docs.json'))
const zipnye = JSON.parse(fs.readFileSync('./json/zip.json'))
const apknye = JSON.parse(fs.readFileSync('./json/apk.json'))
const pengguna = JSON.parse(fs.readFileSync('./database/database.json'))
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
const banned = JSON.parse(fs.readFileSync('./database/banned.json'))
//==================================================//
module.exports = conn = async (conn, m, chatUpdate, store) => {
    var ownerNumber = [`${nomerOwner}@s.whatsapp.net` ,`${nomerOwner2}@s.whatsapp.net`,`${conn.user.jid}`]
const Tnow = (new Date()/1000).toFixed(0)
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.msg.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

var budy = (typeof m.text == 'string' ? m.text : '')
const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
var public = true
//=================================================//

const Ehztext = (text, style = 1) => {
  var abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var ehz = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  abc.map((v, i) =>
    replacer.push({
      original: v,
      convert: ehz[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};

const pushname = m.pushName || "No Name"

    
function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}
//=================================================//
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''//Kalau mau Single prefix Lu ganti pake ini = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const from = m.key.remoteJid
const isGroup = from.endsWith('@g.us')
const botNumber = await conn.decodeJid(conn.user.id)
const isCreator = [botNumber, ...global.nomerOwner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const qmsg = (quoted.msg || quoted)   
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
     const isImage = (type == 'imageMessage')
  const isVideo = (type == 'videoMessage')
  const isAudio = (type == 'audioMessage')
  const isText = (type == 'textMessage')
  const isSticker = (type == 'stickerMessage')
  const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
const isAllMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const groupMetadata = m.isGroup ? await conn.groupMetadata(from).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupName = m.isGroup ? groupMetadata.subject : ''
const senderNumber = sender.split('@')[0]
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
//const isBan = banned.includes(m.sender)
    //anti media
const isHanMedia = m.mtype
const isPrem = isCreator ? true : prem.checkPremiumUser(m.sender, premium)
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
//const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var stime = Ehztext(`Good Night 🏙️`)
 }
 if(time2 < "19:00:00"){
var stime = Ehztext(`Good Evening 🌆`)
 }
 if(time2 < "18:00:00"){
var stime = Ehztext(`Good Evening 🌇`)
 }
 if(time2 < "15:00:00"){
var stime = Ehztext(`Good Afternoon 🌤️`)
 }
 if(time2 < "10:00:00"){
var stime = Ehztext(`Good Morning 🌄`)
 }
 if(time2 < "05:00:00"){
var stime = Ehztext(`Good Morning  🌆`)
 }
if(time2 < "03:00:00"){
var stime = Ehztext(`Selamat tengah Malam 🌃`)
}
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const tanggal2 = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
// TANGGAL ISLAMIC 
let dot = new Date(new Date() + 3600000);
const dateIslamic = Intl.DateTimeFormat("id" + "-TN-u-ca-islamic", {
day: "numeric",
month: "long",
year: "numeric",
}).format(dot);
const qtod = m.quoted? "true":"false"

// KEAMANAN
const gcount = prem ? gcounti.prem : gcounti.user
const chat = isGroup? global.db.data.chats[m.chat] : false 

//const kickon = global.db.data.kickon[m.chat]

//DATABASE
const DataId = db.data.data
const AntiSpam = db.data.antispam
const ban = db.data.banned
const hitnya = db.data.hittoday
const sewa = db.data.sewa
const listerror = db.data.listerror
 //USER
const user = global.db.data.users[m.sender]
const userLevel = user? db.data.users[m.sender].level : false
const userExp = user? db.data.users[m.sender].exp : false
const userId = user? db.data.users[m.sender].id : false
const amountExp = Math.floor(Math.random() * 10) + 50
const requiredExp = 10000 * userLevel
const userPersen = userExp/requiredExp*100
const userVerified = user? db.data.users[m.sender].date : false

// FUNCTION
const makeid = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}
try {
pplu = await conn.profilePictureUrl(anu.id, 'image')
} catch {
pplu = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

const ments = (teks) => {return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [sender]}

const fcall = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: body}}}
const Shun = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                "contactMessage": {
                    'displayName': `${pushname}`,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Shun,;;;\nFN: Shun Ai\nitem1.TEL;waid=${m.sender.split("@")[0]}:+${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    'jpegThumbnail': pplu,
                    thumbnail: pplu,
                    sendEphemeral: true
                }   
            }
        }
const Anjel = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: 'N I S A - M D',
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: botname
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "USD"
			}
		}
	}
}
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./media/thumb.jpg')}}}
const floc = {
			key: {
				participant : '0@s.whatsapp.net',
				...(m.chat ? { 
					remoteJid: `status@broadcast`
				} : {})
			},
			message: {
				locationMessage: {
					name: ` ${versions}`,
					thumbnailUrl: pplu
								 }
					 }
			}
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
const math = (teks) => {
return Math.floor(teks)
}  
//setReply By Ehanz
async function setReply(teks) {
let photo = pickRandom(global.fotoRandom)
 const ngel = {
contextInfo: {
  forwardingScore: 999,
isForwarded: true,
 mentionedJid: [m.sender],
  forwardedNewsletterMessageInfo: {
  newsletterJid,
  serverMessageId: 100,
  newsletterName
  },
 externalAdReply: {
 showAdAttribution: true,
  title: botname,
body: `Hai  ${stime} kak ${pushname}`,
mediaType: 1,
 thumbnailUrl: photo,
   sourceUrl: sig
      }
     },
    text: teks
     };
   return conn.sendMessage(m.chat, ngel, { quoted: m});
   };
const reply = async(teks) => {conn.sendMessage(from, {text: teks, mentions: await ments(teks)},{quoted:fcall})}
// AUTO SHOLAT 
conn.autoshalat = conn.autoshalat ? conn.autoshalat : {}
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.id : m.sender
	let id = m.chat 
    if(id in conn.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"  
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for(let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if(timeNow === waktu) {
    let caption = Ehztext(`Hai kak ${pushname},\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*${waktu}*\n_untuk wilayah Jakarta dan sekitarnya._`)
    conn.autoshalat[id] = [
    setReply(caption),
    setTimeout(async () => {
    delete conn.autoshalat[m.chat]
    }, 57000)
    ]
    }
    }
 
// TOTAL FITUR
const totalFitur = () =>{
            var mytext = fs.readFileSync("./ZeeBot.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
// LIST RESPON
let listRespon = global.db.data.respon[body]
if(listRespon) reply(listRespon.respon)
//STICKER
const sendWait = () => {
        let StikOtw = fs.readFileSync('./temp/sticker/oke tunggu bentar.webp')
        conn.sendMessage(from, { sticker: StikOtw}, { quoted: m })
        }
const sendHususAdmin = () => {
        let StikAdmin = fs.readFileSync('./temp/sticker/Hanya Admin.webp')
        conn.sendMessage(from, { sticker: StikAdmin}, { quoted: m })
        }
const sendTagOwner = () => {
        let StikOwn = fs.readFileSync('./temp/sticker/Tag Owner.webp')
        conn.sendMessage(from, { sticker: StikOwn}, { quoted: m })
        }
// DELCASE
async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan:', err);
            return;
        }

        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');

        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err);
                return;
            }

            console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
    });
}



const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await conn.sendMessage(from, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: fcall })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
}

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await conn.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: fcall })
fs.unlinkSync(mp3File)
})
} catch (err) {
reply(`${err}`)
}
}
 


              
              
//==================================================//
if (!conn.public) {
if (!m.key.fromMe) return
}

let rn = ['recording','composing']
let jd = rn[Math.floor(Math.random() * rn.length)];
     

//Presence Online
if (isCmd){
conn.sendPresenceUpdate(jd, from)
} else {
conn.sendPresenceUpdate(rn, from)
}
// CONSOLE LOG
if (!isGroup && !isCmd ) console.log(color("[PRIVATE]", "greenyellow"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && !isCmd ) console.log(color("[GRUP]", "gold"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))
if (!isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))




const sendAnti = (teks) => {

let contextInfo = {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
title: `${botname}`,
body: `${baileysVersion}`,
previewType:"PHOTO",
thumbnail: thumb,
sourceUrl: `${syt}`
}
}

conn.sendMessage(from, { contextInfo, text: `${teks}\n`+readmore+`\n⫹⫺ @${sender.split('@')[0]}\n⫹⫺ ${week} , ${calender}`}, { quoted: Anjel })
}

const onlyGroup = async() => {
let teks = `┈ ⋞ 〈 P R I V A T E - C H A T 〉 ⋟ ┈

Halo, 👋 @${sender.split('@')[0]}
> _*Fitur tersebut digunakan untuk group*_
> _*Fitur khusus private hanya diperbolehkan berikut ini*_
> ╭── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╮
> ├ .telesick
> ├ .ttpoto
> ├ .openai
> ├ .remini
> ╰── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╯
_© ZeeBot_

*Akses Lebih Hanya Di Group Bot*`
conn.relayMessage(m.chat,  {
      requestPaymentMessage: {
          noteMessage: {
              extendedTextMessage: {
                  text: teks }  }} }, {})}
//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: conn.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, conn.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
conn.ev.emit('messages.upsert', msg)
}
//=================================================//
if (budy.startsWith('!')) {
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
//==================================================//
try {
ppuser = await conn.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)

try {
    let isNumber = x => typeof x === 'number' && !isNaN(x)
   // let limitUser = isPrem ? 1000 : 100
   // let user = global.db.data.users[m.sender]
    
    if (typeof user !== 'object') global.db.data.users[m.sender] = {}
     //if(selectedText == "register"){
if(isCmd){
if (user) {
if (!('name' in user)) user.name = pushname
if (!('id' in user)) user.id = senderNumber
if (!isNumber(user.exp)) user.exp = 0
if (!isNumber(user.level)) user.level = 1
if (!isNumber(user.hit)) user.hit = 1
if (!isNumber(user.balance)) user.balance = 1000
if (!isNumber(user.limit)) user.limit = 30
if (!isNumber(user.glimit)) user.glimit = 30
if (!('serial' in user)) user.serial = makeid(4)
if (!isNumber(user.afk)) user.afk = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.lastclaim)) user.lastclaim = 0
if (!isNumber(user.pc)) user.pc = 0
if (!('autolevelup' in user)) user.autolevelup = false
if (!isNumber(user.pc)) user.pc = 0
if (!user.grade) user.grade = 'Newbie'

} else {
global.db.data.users[m.sender] = {
name: pushname,
id: senderNumber,
date: calender,
exp: 100,
level: 1,
hit: 0,
balance: 1000,
limit: 30,
glimit: 30,
serial: makeid(4).toUpperCase(),
lastclaim: 0,
afk: -1,
pc: 0,
grade: 'Newbie',
autolevelup: false 
}

  
let me = m.sender
let anu = "https://telegra.ph/file/33d58a3a7b931d3902642.jpg";

    let contextInfo = {
      externalAdReply: {
        showAdAttribution: false,
        title: "Saved to database",
        mediaType: 1,
        renderLargerThumbnail: true,
        thumbnailUrl: anu,
      },
    };
let teks =`*]───── REGISTERED ─────[*
 
👤 Nama: ${pushname}
☎️ Nomer: ${senderNumber}
📡 Serial: ${db.data.users[m.sender].serial}
📍 Verified: ${calender}
💸 Saldo: Rp 1000
⚜️ Grade: Newbie
🥇 Rank : 
🌀 Level : 1
 `
  /*await sleep(1000)
conn.sendMessage(m.chat,{contextInfo, text:teks},{quoted:m})*/
                                                                              }
}   
//---------- CHATS --------- //
if (isGroup && chat) {
if (!('name' in chat)) chat.name = groupNmae
//if (!isNumber(chat.add)) chat.add = 0
if (!('detect' in chat)) chat.detect = true

/*if (!('antimedia' in chat)) chat.media = false
if (!('antiimage' in chat)) chat.antiimage = false
if (!('antivideo' in chat)) chat.video = false
if (!('antiaudio' in chat)) chat.antiaudio = false
if (!('autostiker' in chat)) chat.autostiker = true */
if (!('antiLink' in chat)) chat.antiLink = true
//if (!isNumber(chat.expired)) chat.expired = 0
if (!('antiBadword' in chat)) chat.antiBadword = true
if (!('antispam' in chat)) chat.antispam = true
if (!('antitroli' in chat)) chat.antitroli = false
if (!('antivirtex' in chat)) chat.antivirtex = false
if (!('antiwame' in chat)) chat.antiwame = false
//if (!('antisticker' in chat)) chat.antisticker = false
if (!('viewonce' in chat)) chat.viewonce = true
if (!('antitoxic' in chat)) chat.antitoxic = false
if (!('clear' in chat)) chat.clear = false
//if (!isNumber(chat.cleartime)) chat.clearTime = 0
} else if (isGroup) global.db.data.chats[m.chat] = {
name: groupName,
add: 0,
detect: true,
//autostiker: false,
//antisticker: false,
//antiimage: false,
//antimedia: false,
//antivideo: false,
//antiaudio: false,
antilink: false,
antilinkgc: false,
antidelete: false,
antiasing: false,
banchat: false,
antitoxic: false,
expired: 0,
antispam: true,
antivirtex: false,
antiwame: false,
antihidetag: false,
viewonce: true,
clear: false,
clearTime: 0
}
    /*if (user) {
        if (!isNumber(user.afkTime)) user.afkTime = -1
        if (!('afkReason' in user)) user.afkReason = ''
        if (!isNumber(user.limit)) user.limit = limitUser
    } else global.db.data.users[m.sender] = {
        afkTime: -1,
        afkReason: '',
        limit: limitUser,
        }*/
    } catch (err) {
    console.log(err)} 
// AUTO BIO
let isNumber = x => typeof x === 'number' && !isNaN(x)
let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
                if (!isNumber(setting.status)) setting.status = 0
                if (autobio) {
        let _uptime = process.uptime() * 1000
		let uptime = clockString(_uptime)
		await conn.updateProfileStatus(`I am ${botname} 🤖 | ⏰ Runtime ${uptime} | 🌎 Mode : ${conn.public ? 'Public-Mode' : 'Self-Mode'} 🎨 Create By ${ownername}`).catch(_ => _)
        }

// AUTO READ
if (autoread) {
conn.readMessages([m.key])
        }
            } else global.db.data.settings[botNumber] = {
                status: 0,
                autobio: false,
                autoread: false
            }

function pickMoji(list) {
     return list[Math.floor(Math.random() * list.length)]
  }

 
/*/FITUR USER LIMIT
if(!isCreator && command == i ){
if(!isPrem && db.data.users[sender].limit < 1) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if(!isPrem) {
db.data.users[sender].limit -= 1
conn.sendMessage(from,{text:`Limit kamu tersisa ${db.data.users[sender].limit}`}, {quoted: fkontak})
}
  
}*/

     // FUNCTION AFK
function isBotTag(jid) {
// Cek apakah jid adalah Bot
return jid === '6285200808240@s.whatsapp.net';
}

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])];
for (let jid of mentionUser) {
    let user = db.data.users[jid];
    if (!user) continue;
    let afkTime = user.afkTime;
    if (!afkTime || afkTime < 0) continue;
    let reason = user.afkReason || '';
    if (!isBotTag(m.sender)) { // Jika yang ngetag bukan Bot
        let balik = Ehztext(`🚫 *Jangan tag dia!*
        ❏  *Dia sedang AFK* ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
        ❏  *Selama* ${clockString(new Date - afkTime)}
        `.trim()); 
        setReply(balik)
        return; 
        // Hentikan proses lebih lanjut karena yang ngetag bukan BotTag
    }
}

if (db.data.users[m.sender].afkTime > -1) {
    let user = db.data.users[m.sender];
    let kembali = Ehztext(`
    👻 ${pushname} Telah Kembali Dari Afk\n\n ❏ ${user.afkReason ? ' *Dengan Alasan* : ' + user.afkReason : ''}\n\n ❏  *Selama* : ${clockString(new Date - user.afkTime)}
    `.trim());
    user.afkTime = -1;
    user.afkReason = '';
conn.sendMessage(from, { 
    text: `${kembali}`,
    contextInfo:{
    "externalAdReply": {
    "showAdAttribution": true,
    "renderLargerThumbnail": true,
    "title": `${botname}`,
    "body": `${stime} kak ${pushname}`,
    "containsAutoReply": true,
    "mediaType": 1, 
    "thumbnailUrl": 'https://telegra.ph/file/f0667aebcaea930dec5f3.jpg' ,
    }
    }
    },{ 
    quoted: m })
}
 //MAKE Sticker

async function makeSticker(media,Sticker, StickerTypes){
let jancok = new Sticker(media, {
pack: global.packName, // The pack name
author: pushname, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botname}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: pplu,sourceUrl: `${sgc}`																												

}}, sticker: nah }, { quoted: m })   				

await fs.unlinkSync(stok)

}	

     /* ~~~~~~~~~ RESPON DATA MEDIA ~~~~~~~~~ */
     for (let Mwuhehe of VnEhanz) {
             if (budy === Mwuhehe) {
                 let audiobuffy = fs.readFileSync(`./media/audio/${Mwuhehe}.mp3`)
                 conn.sendMessage(m.chat, {
                     audio: audiobuffy,
                     mimetype: 'audio/mp4',
                     ptt: true
                 }, {
                     quoted: m
                 })
             }
         }
         for (let Mwuhehe of StickerEhanz) {
             if (budy === Mwuhehe) {
                 let stickerbuffy = fs.readFileSync(`./media/sticker/${Mwuhehe}.webp`)
                 conn.sendMessage(m.chat, {
                     sticker: stickerbuffy
                 }, {
                     quoted: m
                 })
             }
         }
         for (let Mwuhehe of ImageEhanz) {
             if (budy === Mwuhehe) {
                 let imagebuffy = fs.readFileSync(`./media/image/${Mwuhehe}.jpg`)
                 conn.sendMessage(m.chat, {
                     image: imagebuffy
                 }, {
                     quoted: m
                 })
             }
         }
         for (let Mwuhehe of VideoEhanz) {
             if (budy === Mwuhehe) {
                 let videobuffy = fs.readFileSync(`./media/video/${Mwuhehe}.mp4`)
                 conn.sendMessage(m.chat, {
                     video: videobuffy
                 }, {
                     quoted: m
                 })
             }
         }
 //autoreply
for (let BhosdikaLorenzo of VnEhanz) {
if (budy === BhosdikaLorenzo) {
let audiobuffy = fs.readFileSync(`./media/audio/${BhosdikaLorenzo}.mp3`)
conn.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaLorenzo of StickerEhanz){
if (budy === BhosdikaLorenzo){
let stickerbuffy = fs.readFileSync(`./mdia/sticker/${BhosdikaLorenzo}.webp`)
conn.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaLorenzo of ImageEhanz){
if (budy === BhosdikaLorenzo){
let imagebuffy = fs.readFileSync(`./media/image/${BhosdikaLorenzo}.jpg`)
conn.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaLorenzo of VideoEhanz){
if (budy === BhosdikaLorenzo){
let videobuffy = fs.readFileSync(`./media/video/${BhosdikaLorenzo}.mp4`)
conn.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}
//Jika ada yg cek bot akan merespon   
if (budy.startsWith('Bot') || budy.startsWith('bot')){
return setReply(`${global.botname} Aktif Kak`)
}
 
// KEAMANAN SETEMPAT:V PRETT
 //autosticker
  /*      if (db.data.settings[botNumber].autosticker) {
        	if (m.key.fromMe) return
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                conn.sendImageAsSticker(from, mediac, m, { packname: global.packName, author: global.authorName })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                conn.sendVideoAsSticker(from, mediac, m, { packname: global.packName, author: global.authorName })
            }
        }
 if (db.data.chats[m.chat].antimedia && isMedia) {
        if (isCreator || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Media Detected 」\`\`\`\n\nSorry, Saya Menghapusnya, Karna admin/owner Telah Mengaktifkan anti-media untuk GROUP`)
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
  }

 if (db.data.chats[m.chat].antiimage && isMedia) {
    if(isHanMedia === "imageMessage"){
        if (isCreator || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Image Detected 」\`\`\`\n\nSorry, Saya Menghapusnya, Karna admin/owner Telah Mengaktifkan anti-image untuk GROUP`)
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antivideo && isMedia) {
    if(isHanMedia === "videoMessage"){
        if (isCreator || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Video Detected 」\`\`\`\n\nSorry, Saya Menghapusnya, Karna admin/owner Telah Mengaktifkan anti-video untuk GROUP`)
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antisticker && isMedia) {
    if(isHanMedia === "stickerMessage"){
        if (isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Sticker Detected 」\`\`\`\n\nSorry, Saya Menghapusnya, Karna admin/owner Telah Mengaktifkan anti-sticker untuk GROUP`)
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antiaudio && isHanMedia) {    if(isMedia === "audioMessage"){
        if (isCreator || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Audio Detected 」\`\`\`\n\nSorry, Saya Menghapusnya, Karna admin/owner Telah Mengaktifkan anti-audio untuk GROUP`)
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }*/
// ANTI TOXIC
 const isAntiToxic = isGroup ? db.data.chats[from].antitoxic : false
// ANTI TOXIC
let sopansikit = Ehztext(`*heh @${pushname} \nKata Aneh Terdeteksi\nJangan Ulangi Lagi Hindari Admin Marah\nAtau Kamu Akan Di kick oleh Bot`)
if (isGroup && isAntiToxic) {
if (budy.match(`Anjing|Monyet|Setan|Goblog|Yatim|ngentot|Memek|Kontol|Asu|coli|sange|Bot goblog|ngewe|njing|nying|nyet`)) {
//if (isGroupAdmins) return setReply(`Alah sia admin grup mah bebas yekan :v`)
if (!isBotAdmins) {return}
setReply (sopansikit) 
conn.sendMessage(from, { delete: m.key })
 }
}
     // ANTI LENGKET LINK GRUP
const isAntilinkGc = isGroup ? db.data.chats[from].antilinkgc : false
let linkgcyah = Ehztext(` *「 LINK GROUP DETECTED 」*\nKamu mengirimkan link group, maaf saya hapus karena antilink grub aktif`)
if (isGroup && isAntilinkGc && budy.includes(`chat.whatsapp.com`) ){
if (isAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
if(!isBotAdmins) return m.reply ('Bot bukan admin jadi gbisa hapus pesan nya :(')
if(ownerNumber.includes(sender)) return setReply('Alah sia owner bot mah bebas yekan :v')
let linkgc = await conn.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return m.reply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
//if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
await setReply(linkgcyah)
await sleep(2000)
if(isBotAdmins) await
 conn.sendMessage(from, { delete: m.key })
 //conn.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
} 
     
// ANTI LINK ALL
let linkall = Ehztext(` *「 LINK DETECTED 」*\nKamu mengirimkan link, maaf kamu di kick dari grup :(`)
const isAntiLink = isGroup ? db.data.chats[from].antilink : false
if (isGroup && isAntiLink){
if (budy.includes(`https:`)) { 
if (isAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
if(ownerNumber.includes(sender)) return setReply('Alah sia owner bot mah bebas yekan :v')
let linkgc = await conn.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return setReply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
//if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
setReply(linkall)
setTimeout(() => {
if(isBotAdmins) conn.sendMessage(from, { delete: m.key })
//conn.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}, 2000)
}
}
// GAME FUNCTION 
//GAME Caklontong Function
conn.caklontong = conn.caklontong ? conn.caklontong : {}  
if(isGroup && from in conn.caklontong){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(conn.caklontong[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
 global.db.data.users[m.sender].exp += conn.caklontong[id][2]
// global.db.data.users[m.sender].tiketcoin += 1
 setReply(`*Benar!*\n+${conn.caklontong[id][2]} XP\n+1500 Money\n${json.deskripsi}`)
 clearTimeout(conn.caklontong[id][3])
 delete conn.caklontong[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi><*`)
// else setReply(`*Salah!*`)
 
}
       //GAME tebak gambar
     conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}  
     if(isGroup && from in conn.tebakgambar){
     if(!isGroup) {return} 
     const similarity = require('similarity')
     const threshold = 0.72
     let id = m.chat
      let json = JSON.parse(JSON.stringify(conn.tebakgambar[id][1]))
      if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
     user.balance += conn.tebakgambar[id][2]
      var teks = `*GAME TEBAK GAMBAR*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tebakgambar[id][2]} Money 💸`
        m.reply (teks)
      clearTimeout(conn.tebakgambar[id][3])
      delete conn.tebakgambar[id]
      } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
     }


     //Game Family 100
     conn.family = conn.family ? conn.family : {}
     if(isGroup && from in conn.family){
     if(!isGroup) {return} 
     let similarity = require('similarity')
     let threshold = 0.72 // semakin tinggi nilai, semakin mirip
     let id =  m.chat
     let room = conn.family[id]
     let text = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
     let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(budy)
     if (!isSurrender) {
     let index = room.jawaban.indexOf(text)

     if (index < 0) {
     if (Math.max(...room.jawaban.filter((_, index) => !room.terjawab[index]).map(jawaban => similarity(jawaban, text))) >= threshold) return setReply('Dikit lagi!')
      }
     if (!isCmd && room.terjawab[index]) {return} 
     user.balance += room.winScore
     room.terjawab[index] = m.sender
     }
     let isWin = room.terjawab.length === room.terjawab.filter(v => v).length

     let caption = `*GAME FAMILY100*

     *Soal:* ${room.soal}

     Terdapat ${room.jawaban.length} jawaban${room.jawaban.find(v => v.includes(' ')) ? `
     (beberapa jawaban terdapat spasi)
     `: ''}
     ${isWin ? `*SEMUA JAWABAN TERJAWAB ✅*` : isSurrender ? '*MENYERAH ❌*' : ''}
     ${Array.from(room.jawaban, (jawaban, index) => {
      return isSurrender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '✓ ' + room.terjawab[index].split('@')[0]  : ''}`.trim() : false
      }).filter(v => v).join('\n')}

     ${isSurrender ? '' : `+${room.winScore} Money tiap jawaban benar`}
          `.trim()

     conn.sendMessage(from, {text: `${caption}`, mentions: [room.terjawab + '@s.whatsapp.net']}, {quoted:fkontak}).then(msg => {
      conn.family[id].msg = msg
     }).catch(_ => _)
     if (isWin || isSurrender) delete conn.family[id] 
     //if (isWin || isSurrender) clearTimeout(200000)
     }
     //GAME tebak lirik Function
     conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik : {}  
     if(isGroup && from in conn.tebaklirik){
     if(!isGroup) {return} 
     const similarity = require('similarity')
     const threshold = 0.72
     let id = m.chat
     let json = JSON.parse(JSON.stringify(conn.tebaklirik[id][1]))

      if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
     user.balance += conn.tebaklirik[id][2]
      global.db.data.users[m.sender].exp += 10
        var teks = `*GAME TEBAK LIRIK*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tebaklirik[id][2]} Money 💸\n EXP: +10`
        m.reply (teks)
      clearTimeout(conn.tebaklirik[id][3])
      delete conn.tebaklirik[id]
      } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
     // else setReply(`*Salah!*`)
      }
       //GAME tebak kimia Function
     conn.tebakkimia = conn.tebakkimia ? conn.tebakkimia : {}  
     if(isGroup && from in conn.tebakkimia){
     if(!isGroup) {return} 
     const similarity = require('similarity')
     const threshold = 0.72
     let id = m.chat
      let json = JSON.parse(JSON.stringify(conn.tebakkimia[id][1]))
      let isSurender = /^((me)?nyerah|surr?ender)$/i.test(budy)

      if (budy.toLowerCase() == json.lambang.toLowerCase().trim()) {
     user.balance += conn.tebakkimia[id][2]
      global.db.data.users[m.sender].exp += 10
        var teks = `*GAME TEBAK KIMIA*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tebakkimia[id][2]} Money 💸`
        m.reply (teks)
      clearTimeout(conn.tebakkimia[id][3])
      delete conn.tebakkimia[id]
      } else if(similarity(budy.toLowerCase(), json.lambang.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi ><*`)
     // else setReply(`*Salah!*`)
      }
     //GAME MATH FUNCTION
     conn.math = conn.math ? conn.math : {}
     if(isGroup && from in conn.math){
     if(!isGroup) {return} 
     //console.log(conn.math)
     try{
     let id = from
     if (!(id in lconn.math) && /^apa hasil dari/i.test(budy)) return setReply('soal itu sudah berakhir')
     let math = JSON.parse(JSON.stringify(conn.math[id][1]))
     if (budy == math.result) {
     user.balance += math.bonus
     clearTimeout(conn.math[id][3])
     delete conn.math[id]
     await setReply(` benar\n\nSaldo: Rp${math.bonus}\n\nmath ${math.mode}`)
     } else { 

     }
     }catch(err){
     console.log(err)
     }
     }
     //GAME  teka teki Function
     conn.tekateki = conn.tekateki ? conn.tekateki : {}  
     if(isGroup && from in conn.tekateki){
     if(!isGroup) {return} 
     const similarity = require('similarity')
     const threshold = 0.72
     let id = m.chat
      let json = JSON.parse(JSON.stringify(conn.tekateki[id][1]))

      if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
     user.balance += conn.tekateki[id][2]
      var teks = `*GAME TEKATEKI*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tekateki[id][2]} Money 💸`
      setReply(teks)
      clearTimeout(conn.tekateki[id][3])
      delete conn.tekateki[id]
      } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
     }
      //GAME Susunkata Function
     conn.susunkata = conn.susunkata ? conn.susunkata : {}  
     if(isGroup && from in conn.susunkata){
     if(!isGroup) {return} 
     const similarity = require('similarity')
     const threshold = 0.72
     let id = m.chat
      let json = JSON.parse(JSON.stringify(conn.susunkata[id][1]))

      if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
     user.balance += conn.susunkata[id][2]
        var teks = `*GAME SUSUN KATA*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.susunkata[id][2]} Money 💸`
     m.reply(teks)
      clearTimeout(conn.susunkata[id][3])
      delete conn.susunkata[id]
      } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
     // else setReply(`*Salah!*`)

     }
     //GAME tebak kata Function
     conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}  
     if(isGroup && from in conn.tebakkata){
     const similarity = require('similarity')
     const threshold = 0.72
     let id = from

      let json = JSON.parse(JSON.stringify(conn.tebakkata[id][1]))
      if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
     user.balance += conn.tebakkata[id][2]
     setReply(`*TEBAK KATA*

     Jawaban Kamu Benar!
     Bonus Saldo : +${conn.tebakkata[id][2]}
     Exp : +999`)  
      clearTimeout(conn.tebakkata[id][3])
      delete conn.tebakkata[id]
      } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)

     }
     //GAME siapa aku Function
     conn.siapaaku = conn.siapaaku ? conn.siapaaku : {}  
     if(isGroup && from in conn.siapaaku){
     if(!isGroup) {return} 
     const similarity = require('similarity')
     const threshold = 0.72
     let id = m.chat
      let json = JSON.parse(JSON.stringify(conn.siapaaku[id][1]))

      if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
     user.balance += conn.siapaaku[id][2]
     var teks = `*GAME SIAPAKAH AKU*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.siapaaku[id][2]} Money 💸`
        m.reply (teks)
      clearTimeout(conn.siapaaku[id][3])
      delete conn.siapaaku[id]
      } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
     // else setReply(`*Salah!*`) 
     }
 //Game Suit PvP
	    conn.suit = conn.suit ? conn.suit : {}
	    let roof = Object.values(conn.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(budy) && isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(budy)) {
	    conn.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, dev)
	    delete conn.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    conn.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) conn.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) conn.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) conn.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    conn.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete conn.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = sender == roof.p
	    let jwb2 = sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(budy) && !roof.pilih && !isGroup) {
	    roof.pilih = reg.exec(budy.toLowerCase())[0]
	    roof.text = budy
	    setReply(`Kamu telah memilih ${budy} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) conn.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(budy) && !roof.pilih2 && !isGroup) {
	    roof.pilih2 = reg.exec(budy.toLowerCase())[0]
	    roof.text2 = budy
	    setReply(`Kamu telah memilih ${budy} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) conn.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    conn.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete conn.suit[roof.id]
	    }
        }
//BATAS
//==================================================//
switch(command) {

//—————「 MAIN MENU 」—————//
case 'help': case 'menu': {
if (!isGroup) return onlyGroup()
let owned = `${global.nomerOwner}`
let statususer = isCreator ? 'Owner 🎐' : isPrem ? 'Premium 💎' : 'User 🐱';
let limitz = db.data.users[m.sender].limit;

wek = Ehztext(` 
  *sᴛᴀᴛs :* 
» ʀᴜɴɴɪɴɢ ᴏɴ: ᴘᴀɴᴇʟ
» ғᴇᴀᴛᴜʀᴇs: ${totalFitur()}
» ᴜsᴇʀs: ${Object.keys(db.data.users).length}
» ᴘʀᴇᴍɪᴜᴍ: 𝟶
» ᴍᴏᴅᴇ ʙᴏᴛ : *${conn.public ? `ᴘᴜʙʟɪᴄ` : `sᴇʟғ`}*
  
 *ᴅᴀᴛᴇ & ᴛɪᴍᴇ :* 
» ${time}
» ${week}, ${calender}
» ${dateIslamic}`)

const caption = `${wek}\n\n\n${menushun(prefix)}`;
let sections = [
{
title: 'All Menu',
highlight_label: 'All Menu List🚨',
rows: [{
title: 'Menu All',
description: `すべてのメニューを表示`, 
id: `${prefix}menu all`
}]},
{
title: 'List Menu',
highlight_label: 'List Menu🚨',
rows: [{
title: 'Group',
description: `グループメニューを表示`, 
id: `${prefix}menu group`
},
{
title: 'Game',
description: `ゲームメニューを表示`, 
id: `${prefix}genu menu`
},
       {
title: 'Ai',
description: `Aiメニューを表示`, 
id: `${prefix}menu ai`
},
{
title: 'Download',
description: `ダウンロードメニューを表示`, 
id: `${prefix}menu download`
},
{
title: 'Tools',
description: `ツールメニューを表示`, 
id: `${prefix}menu tools`
},
{
title: 'Primbon',
description: `プリンボンメニューを表示`, 
id: `${prefix}menu primbon`
},
{
title: 'Sticker',
description: `ステッカーメニューを表示します`, 
id: `${prefix}menu sticker`
},
{
title: 'Fun', 
description: "楽しいメニューを表示", 
id: `${prefix}menu fun`
},
{
title: 'Convert', 
description: "変換メニューを表示します", 
id: `${prefix}menu convert`
},
{
title: 'Islamic', 
description: "イスラムメニューを表示します", 
id: `${prefix}menu islamic`
},
{
title: 'Anime', 
description: "アニメメニューを表示", 
id: `${prefix}menu anime`
},
{
title: 'Textpro', 
description: "テキストプロメニューを表示します", 
id: `${prefix}menu textpro`
},
{
title: 'Random', 
description: "ランダムメニューを表示します", 
id: `${prefix}menu random`
},
{
title: 'Settings', 
description: "設定メニューを表示します", 
id: `${prefix}menu settings`
},
{
title: 'Storage', 
description: "ストレージメニューを表示", 
id: `${prefix}menu storage`
},
{
title: 'Owner', 
description: "私のオーナーZeeBot WhatsApp ", 
id: `${prefix}menu owner`
}]
}]

let listMessage = {
    title: '「 List Menu 」', 
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid,
  serverMessageId: 100,
  newsletterName
  },
 businessMessageForwardInfo: { businessOwnerJid: conn.decodeJid(conn.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: caption
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: 'ɴɪsᴀ-ʙᴏᴛ ʙʏ : @ᴅᴀғғᴢᴏғғɪᴄɪᴀʟ'
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `Hai  ${stime} kak ${pushname}`,
 subtitle: "ZeeBot",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/b27340b89cd2c451934d7.jpg" } }, { upload: conn.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
  "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script ","id":"${prefix}script"}`
     },{
     "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"「 YouTube 」\",\"url\":\"https://youtube.com/@ZeeBot\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"「 Creator 」\",\"url\":\"https://wa.me/6285200808240\",\"merchant_url\":\"https://wa.me/6285200808240\"}"
 
  
 
 },
 ],
 })
 })
 }
 }
}, {})

if (!q) await conn.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
if (args[0] === "all") {
    
    let owned = `${global.owner}`
    let statususer = isCreator ? 'Owner 🎐' : isPrem ? 'Premium 💎' : 'User 🐱';
    let limitz = db.data.users[m.sender].limit;
let photo1 = pickRandom(global.fotoRandom)
    wek = `

${gris}┈ ⋞ 〈 ＩＮＦＯ-ＵＳＥＲ 〉 ⋟ ┈${gris}
Hai kak ${pushname}

▸ ɴᴀᴍᴇ : ${pushname}
▸ ɴᴜᴍʙᴇʀ : ${m.sender.split('@')[0]}
▸ sᴛᴀᴛᴜs : ${statususer}
▸ ʟɪᴍɪᴛ : ${limitz}`
 const caption = `${wek}\n\n${readmore}\n\n${menugrup(prefix)}\n\n\n${menugame(prefix)}\n\n\n${menuai(prefix)}\n\n\n${menudownload(prefix)}\n\n\n${menutools(prefix)}\n\n\n${menuprimbon(prefix)}\n\n\n${menusticker(prefix)}\n\n\n${menufun(prefix)}\n\n\n${menuconvert(prefix)}\n\n\n${menuislamic(prefix)}\n\n\n${menuanime(prefix)}\n\n\n${menutextpro(prefix)}\n\n\n${menurandom(prefix)}\n\n\n${menusettings(prefix)}\n\n\n${menustorage(prefix)}\n\n\n${menuowner(prefix)}`;
conn.sendMessage(m.chat, {
text: caption,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid,
serverMessageId: 100,
newsletterName },
externalAdReply: {  
title: botname, 
body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
thumbnailUrl:photo1,
sourceUrl: global.sig, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: Anjel})

 } else if (args[0] === 'group') {
await sleep(1000)
    
 const caption = `${menugrup(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botname, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: global.sig, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 } else if (args[0] === 'game') {
await sleep(1000)
    
 const caption = `${menugame(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botname, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom (fotoRandom),
    sourceUrl: global.syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 } else if (args[0] === 'ai') {
await sleep(1000)
    
 const caption = `${menuai(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botname, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom (fotoRandom),
    sourceUrl: syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 } else if (args[0] === 'download') {
await sleep(1000)
    
 const caption = `${menudownload(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botname, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 } else if (args[0] === 'tools') {
await sleep(1000)
    
 const caption = `${menutools(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botname, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: global.syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 } else if (args[0] === 'primbon') {
await sleep(1000)
    
 const caption = `${menuprimbon(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botname, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: global.syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 } else if (args[0] === 'sticker') {
await sleep(1000)
    
 const caption = `${menusticker(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: `${time}`, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: global.syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 } else if (args[0] === 'fun') {
await sleep(1000)
    
 const caption = `${menufun(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botname, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: global.syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 } else if (args[0] === 'convert') {
await sleep(1000)
    
 const caption = `${menuconvert(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botname, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: global.syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 } else if (args[0] === 'islamic') {
await sleep(1000)
    
 const caption = `${menuislamic(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botname, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 } else if (args[0] === 'anime') {
await sleep(1000)
    
 const caption = `${menuanime(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botname, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 } else if (args[0] === 'textpro') {
await sleep(1000)
    
 const caption = `${menutextpro(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botname, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
} else if (args[0] === 'random') {
await sleep(1000)
    
 const caption = `${menurandom(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botname, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
} else if (args[0] === 'settings') {
await sleep(1000)
    
 const caption = `${menusettings(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botname, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
} else if (args[0] === 'storage') {
await sleep(1000)
    
 const caption = `${menustorage(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botname, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 } else if (args[0] === 'owner') {
await sleep(1000)
    
 const caption = `${menuowner(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botname, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 }
}
break
//—————「 GROUP MENU 」—————//


  case 'delppgc':{
if (!m.isGroup) return onlyGroup()
if (!isAdmins && !isCreator) return sendHususAdmin()
if (!isBotAdmins) return setReply(mess.only.Badmin)
    await conn.removeProfilePicture(from)
    }
    break
case 'getppgc':
	if (!isGroup) return 
	setReply(mess.wait)
	try {
	var ppimg = await conn.profilePictureUrl(from, 'image')
	} catch (err) {
	console.log(err)
	var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	await conn.sendMessage(from, { image: { url: ppimg }}, { quoted: m })
	break
case 'setppgc':{
if (!isAdmins) return setReply(mess.only.admin)
if (!isBotAdmins) return setReply(mess.only.Badmin)
if (/image/.test(mime)){
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
await conn.updateProfilePicture(from, { url: media })
.then( res => {
setReply(`_*Sukses*_`)
fs.unlinkSync(media)
}).catch(() => setReply(mess.error.api))
} else {
setReply(`Kirim/balas gambar dengan caption ${command}`)
}
}
break
case 'setnamegc': {
if (!isGroup) return onlyGroup()
if (!isCreator && !isAdmins) return setReply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
if (!q) return setReply('`Text nya ?`')
await conn.groupUpdateSubject(from, q).then((res)).catch((err) => setReply(jsonformat(err)))
setReply(`_*Sukses Edit Subjek Grup✅*_`)
}
break
case 'setdesc':{
if (!isGroup) return onlyGroup()
if (!isCreator && !isAdmins) return setReply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
if (!q) return setReply('`Text Nya ?`')
await conn.groupUpdateDescription(from, q).then((res)).catch((err) => setReply(jsonformat(err)))
setReply(`_*Sukses Edit Deskripsi Grup✅*_`)
}
break
case 'infogc': {
if(!isGroup) return setReply("> `Hanya bisa di dalam group`")
let _meta = await conn.groupMetadata(from)
  console.log(_meta)
let _img = await conn.profilePictureUrl(_meta.id, 'image') 
let caption = `${_meta.subject} - Created on ${moment(_meta.creation * 1000).format('ll')}\n\n` +
`*${_meta.participants.length}* Total Members\n*${_meta.participants.filter(x => x.admin === 'admin').length}* Admin\n*${_meta.participants.filter(x => x.admin === null).length}* Not Admin\n\n` +
`Group ID : ${_meta.id}`
await conn.sendMessage(from,{
caption,
image: await getBuffer(_img)
},
{ quoted: m }
)
}
break
case 'closegroup': {
if (!isCreator && !isAdmins) return setReply(mess.only.admin)
let tutupgc = Ehztext(`_*Waktu Telah Tiba!\nGrup Ditutup Oleh Bot Dikarenakan Tidak Ada Yg Menjaga Grup🙏\nGrup Akan Dibuka Sesuai Waktu Yg Ditentukan Oleh Admin*_`)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
if (!args[0]) return setReply(`*Pilih Waktu:*\n-second\n-minute\n-hour\n-day\n\n*Contoh:*\n${prefix+command}10 second`)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
}
setReply(`_*Waktu dimulai dari sekarang*_`)
setTimeout(() => {
var nomor = m.participant
conn.groupSettingUpdate(from, 'announcement')
setReply(tutupgc)
}, timer)
}
break
case 'opengroup': {
if (!isGroup) return onlyGroup()
if (!isCreator && !isAdmins) return setReply(mess.only.admin)
let bukagc = Ehztext(`_*Tepat Waktu Group Sudah Di Buka Sekarang Semua Peserta Bisa Mengirim Pesan*_`)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
if (!args[0]) return setReply(`_*Pilih Waktu:*\n-second\n-minute\n-hour\n-day\n\n*Contoh:*\n${prefix+command}10 second_`)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
}
setReply(`_*Waktu dimulai dari sekarang*_`)
setTimeout(() => {
var nomor = m.participant
conn.groupSettingUpdate(from, 'not_announcement')
setReply(bukagc)
}, timer)
}
break
case 'promote': {
if (!isGroup) return onlyGroup()
if (!isCreator && !isAdmins) return setReply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+"@s.whatsapp.net"
await conn.groupParticipantsUpdate(from, [users], 'promote')
setReply(`_*@${users} Naik Jabatan Menjadi Admin Group😎*_`)
}
break
case 'demote': {
if (!isGroup) return onlyGroup()
if (!isCreator && !isAdmins) return setReply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+"@s.whatsapp.net"
await conn.groupParticipantsUpdate(from, [botNumber], 'demote')
setReply(`_*@${users} Turun Jabatan Menjadi Member Biasa🗿*_`)
}
break
case 'del': case 'delete': case 'd':{     if (!isGroup) return onlyGroup()
         if (!isCreator && isBotAdmins) return m.reply("ga maoo")
if (!isAdmins) return setReply(mess.admin)
conn.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.quoted.id,
participant: m.quoted.sender
}
})
}
break 
case  'intro': {
if (!isGroup) return onlyGroup()
let teks = Ehztext(`Member baru INTRO  :)\nNama lengkap:\nNama panggilan:\nHobi:\nUmur:\nGender:\nKelas:\nTinggi badan:\nBeratbadan :\nAgama:\nGolongan darah:\nStatus:\nNama pacar:\nJumlah mantan:\nNama mantan:\nNama bapak :\nNama ibu : \nNama kakak:\nKakak online:\nKakak kandung\tiri:\nJumlah kakak:\nNama adek:\nAdek online:\nAdek kandung\tiri:\nJumlah adek:\nNama kakek:\nKakek dari ayah :\nKakek dari ibu :\nNama nenek:\nNenek dari ayah :\nNenek dari ibu :\nNama bibi:\nBibi dari ayah :\nBibi dari ibu :\nNama paman:\nBibi dari ayah :\nBibi dari ibu :\nKTP:\nSIM:\nSTNK:\nBPKB:\nKK:\nAlamat rumah:\nRT:\nRW:\nKELURAHAN:\nKECAMATAN:\nKABUPATEN:\nKOTA:\nPROVINSI:\nPLANET:\nGALAXY:\nUNIVERSE:\nLANGIT:\nDARATAN:\nLAUTAN:\nKEPULAUAN:\nSAMUDRA:\nUKURAN SEPATU:\nUKURAN BAJU:\nUKURAN CELANA:\nLEBAR PINGGANG:\nPANJANG TANGAN:\nPANJANG KAKI:\nMAKANAN FAVORIT:\nMINUMAN FAVORIT:\nFILM FAVORIT:\nSINETRON FAVORIT:\nGAME FAVORIT:\nANIME FAVORIT:\nMANGA FAVORIT:\nMANHUA FAVORIT:\nMANHWA FAVORIT:\nCHANNEL YOUTUBE:\nINSTAGRAM:\nTWITTEER:\nFACEBOOK:\nMUSIC FAVORIT:\nSIFAT:\nSIKAP:\nZODIAK:\nTANGGAL LAHIR:\nMERK HP:\nMERK MOTOR:\nMERK MOBIL:\nTINGKAT RUMAH:\nALAMAT SEKOLAH:\nUkuran daleman:\nUkuran atasan :\nDiameter kepala :\nStatistik tubuh:\nDiameter perut :\nDiameter lengan :\nDiameter paha :\nDiameter lutut :\nDiameter betis:\nPanjang tangan :\nPanjang kaki :\nPanjang kepala :\nLebar hidung :\nCita cita :\nHobi :\nJenis hewanpeliharaan :\nNama hewan:\nDiameter rumah:\nWaifu:\nHusbu:\nLoli kesukaan :\nShota kesukaan :\nPunya brp teman :\nTeman online :\nTeman offline :\nTeman main game:\nTeman sekolah:\nTemen rumah:`)
setReply(teks)
}
break    
case 'me': case 'profil': {
if (!isGroup) return onlyGroup()
	let ppimg = await conn.profilePictureUrl(sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
	try{
	 let sol = await conn.fetchStatus(sender)
	var stst = sol.status == undefined ? '' : sol.status 
	} catch(err){
	var stst = ""
	  
	}
	let persenya =`${userPersen}`
	let nana =`${userExp}/${requiredExp}`
	
	let prmm = prem? isCreator? 'Premium' : user? user.premiumDate : '' : 'Not Premium'
	 //
	let teks = `*]──「 Profile User 」──[*
	
	🆔 Nama : ${pushname} 
	💳 Saldo  : Rp ${db.data.users[sender].balance.toLocaleString()}
	✅ Verified : ${userVerified}
	📇 Status : ${prem ? 'Premium':'Free'}
	🧬 Level : ${userLevel}
	🔰 Grade : ${userLeveling(`${db.data.users[sender].level}`)}
	⚡ Exp :  ${userXp(userPersen)} ${persenya.split(".")[0]}%
	♻️ Total Exp : ${nana}
	📟 User Hit : ${db.data.users[sender].hit}
	🤖 Status Bot : ${isCreator ? 'Owner':'User'}
	🕔 Expired : ${prmm}
	📉 Limit : ${prem ? 'Unlimited' : `${db.data.users[sender].limit}`}
	📈 Limit Game : ${prem ? 'Unlimited' : `${db.data.users[sender].glimit}/${gcounti.user}`}
	📲 No : wa.me/${sender.split("@")[0]}
	🧸 Bio : ${stst}`
	
	
	let its = await getBuffer (ppimg)
	
	const canvacord = require("canvacord");
	  let image3 = new canvacord.Rank()
	  .setAvatar(its)
	  .setCurrentXP(math(userExp))
	  .setRequiredXP(requiredExp)
	  .setStatus("online")
	  .setProgressBar("#FFFFFF", "COLOR")
	  .setBackground( "COLOR","#141414")
	  .setCustomStatusColor("#ff1a8c")  
	  .setUsername(`EXP: ${persenya.split(".")[0]}%,`)
	  .setLevel(userLevel)
	  .setRank(4)
	  .setOverlay("#3d3d3d")
	  .setDiscriminator("0007");
	  
	  let foto = await getRandom(".png")
	  image3.build()
	  .then(async data => {
	  await canvacord.write(data,foto);
	  let gambar = await fs.readFileSync(foto)
	conn.sendMessage(from, { caption: teks, image: gambar}, {quoted: fkontak})
	  await fs.unlinkSync(foto)
			  });
	
	}
	 
	break
case 'on':{
if (!isGroup) return onlyGroup()
if (!isBotAdmins) return sendHususAdmin()
let pilihan = Ehztext(`*[ Silakan di pilih ]*

> - antilink
> - antitoxic
> - antilinkgc

contoh : 
> _*.antilinkgc on untuk mengaktifkan*_
> _*antilinkgc off untuk menonaktifkan*_`)

let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: `Hai ${stime} ${pushname}`
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: wm
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: pilihan,
                    subtitle: "rorr",
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
                "buttonParamsJson": `{"display_text":"「 antilink 」","id":"${prefix}antilink"}`
     },{
"name": "quick_reply",
                "buttonParamsJson": `{"display_text":"「 antilinkgc 」","id":"${prefix}antilinkgc"}`
     },{
 "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"「 antitoxic 」","id":"${prefix}antitoxic"}`
     },
 ],
 })
 })
 }
 }
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case 'getcontact': case 'getcon': {
 if (!isGroup) return onlyGroup()
if (!isAdmins) return reply(mess.only.admin)
konstak = await conn.sendMessage(m.chat, {
    text: `Group : *${groupMetadata.subject}*\nMember : *${participants.length}*`
}, {quoted: m, ephemeralExpiration: 86400})
conn.sendContact(m.chat, participants.map(a => a.id), konstak)
}
break
case 'getidgc':
 if (!isGroup) return onlyGroup()
let ewe = `*ID* : ${m.chat}`
await setReply(ewe)
break
case 'linkgroup': case 'linkgc': {
if (!isCreator) return reply(mess.only.owner)
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.Badmin)
await setReply(mess.wait)
let response = await conn.groupInviteCode(from)
conn.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break

case 'resetlinkgc':
if (!isGroup) return onlyGroup()
if (!isBotAdmins) return reply(mess.only.Badmin)
if (!isAdmins) return reply(mess.only.admin)
conn.groupRevokeInvite(from)
break

case 'sendlinkgc': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.Badmin)
await setReply(mess.wait)
if (!args[0]) return setReply(`_*Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628123xxxxxx*_`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await conn.groupInviteCode(from)
conn.sendText(bnnd, `_*https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}*_`, m, { detectLink: true })

}
break
case 'kick': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.Badmin)
if (!isAdmins) return reply(mess.only.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(from, [users], 'remove')
setReply(mess.succes)
}
break
case 'add': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.Badmin)
if (!isAdmins) return reply(mess.only.admin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(from, [users], 'add')
setReply(mess.succes)
}
break
case 'promote': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.Badmin)
if (!isAdmins) return reply(mess.only.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(from, [users], 'promote')
reply(mess.succes)
}
break
case 'demote': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.Badmin)
if (!isAdmins) return reply(mess.only.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(from, [users], 'demote')
setReply(mess.succes)
}
break
case 'hidetag': 
case 'h': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins) return reply(mess.only.admin)
conn.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted: m})
}
break
break
case 'tagall': {
if (!isAdmins) return setReply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
let teks = ` ${gris}👥 Tag All${gris}
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `↪ @${mem.id.split('@')[0]}\n`
}
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:fcall })
}
break
case "listgc":{
if (!isCreator) return setReply(mess.only.ownerB)
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let hituet = 0
let teks = (`${gris}𖠿 LIST GROUP DI BAWAH${gris}\n\nTotal Group : ${anu.length} Group\n\n`)
for (let x of anu) {
let metadata2 = await conn.groupMetadata(x)
teks += `${gris}𖠿 Group Ke${gris} *${hituet+=1}*\n│≡ *NAMA :* ${metadata2.subject}\n│≡ *ID :* ${metadata2.id}\n│≡ *MEMBER :* ${metadata2.participants.length}\n╰────|\n\n`
}
reply(teks + `_*Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontakv1 id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu ID Group Nya Di Atas*_`)
}
break
 
    case 'cekmember': {
  if (!m.isGroup) return setReply(mess.only.group)
  
  const participants = await conn.groupMetadata(m.chat).then(metadata => metadata.participants);
  
  let countIndonesia = 0;
  let countMalaysia = 0;
  let countUSA = 0;
  let countOther = 0;
  
  participants.forEach(participant => {
    const phoneNumber = participant.id.split('@')[0];
    if (phoneNumber.startsWith("62")) {
      countIndonesia++;
    } else if (phoneNumber.startsWith("60")) {
      countMalaysia++;
    } else if (phoneNumber.startsWith("1")) {
      countUSA++;
    } else if (phoneNumber.startsWith("+1")) {
      countOther++;
    } else {
      countOther++;
    }
  });
  
  const replyMessage = Ehztext(`Jumlah Anggota Grup Berdasarkan Negara:\n\nAnggota Indonesia: ${countIndonesia} 🇮🇩\nAnggota Malaysia: ${countMalaysia} 🇲🇾\nAnggota USA + OTHER : ${countUSA} 🇺🇲\nAnggota Negara Lain: ${countOther} 🏳️`);
  setReply(replyMessage);
  break;
 }
case 'afk': {
if (!isGroup) return setReply(mess.only.group)
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = q
let afknya = Ehztext(`😓 Yahh, Kak *${pushname}*... Telah Afk\n\n ❏  *Alasan* ${q ? ': ' + q : ''}`)
conn.sendMessage(from, { 
text: `${afknya}`,
contextInfo:{
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `${botname}`,
"body": `${stime} kak ${pushname}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": 'https://telegra.ph/file/99956219d8ff974181fba.jpg' ,
}
}
},{ 
quoted: m })
}
break

//—————「 GAME MENU 」—————//
case 'caklontong':{
  if (!isPrem && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let timeout = 80000
	let poin = 3000
	let tiketcoin = 1500
	let id = m.chat
	if (id in conn.caklontong) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	${json.soal}
	
	Timeout *${(timeout / 1000).toFixed(2)} detik*
	Bonus: ${poin} XP
	Balance: +${tiketcoin} Money
	`.trim()
	conn.caklontong[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	user.balance -= 200
reply(`*GAME CAK LONTONG*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete conn.caklontong[id]
	 }, timeout)
	 ]
	}
    db.data.users[sender].glimit -= 1
	break
        case 'tebaklirik':{

            if (!isPrem && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
        if (!isGroup) return setReply(mess.only.group)
            let timeout = 80000
            let poin = 1000
            let id = m.chat
            if (id in conn.tebaklirik) return setReply('Masih ada soal belum terjawab di chat ini')
            let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')).json()
            let json = src[Math.floor(Math.random() * src.length)]
            let caption = `
            Soal: ${json.soal}


            Waktu: *${(timeout / 1000).toFixed(2)} detik*
            Hadiah: ${poin} Money
            `.trim()
            conn.tebaklirik[id] = [
            await setReply(caption),
            json, poin,
            setTimeout(() => {
            if (conn.tebaklirik[id]) 
        user.balance -= 200
        m.reply(`*GAME TEBAK LIRIK*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
            delete conn.tebaklirik[id]
             }, timeout)
             ]
            }
            db.data.users[sender].glimit -= 1
            break

        case 'siapaaku':{
          if (!isPrem && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
        if (!isGroup) return setReply(mess.only.group)
            let timeout = 80000
            let poin = 1000
            let id = m.chat
            if (id in conn.siapaaku) return setReply('Masih ada soal belum terjawab di chat ini')
            let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')).json()
            let json = src[Math.floor(Math.random() * src.length)]
            let caption = `
            Soal: ${json.soal}


            Waktu: *${(timeout / 1000).toFixed(2)} detik*
            Hadiah: ${poin} Money
            `.trim()
            conn.siapaaku[id] = [
            await setReply(caption),
            json, poin,
            setTimeout(() => {
            if (conn.siapaaku[id]) 
        user.balance -= 200
        reply(`*GAME SIAPAKAH AKU*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
            delete conn.siapaaku[id]
             }, timeout)
             ]
            }
            db.data.users[sender].glimit -= 1
            break
        case 'susunkata':{
              if (!isPrem && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
        if (!isGroup) return onlyGroup()
            let timeout = 80000
            let poin = 1000
            let id = m.chat
            if (id in conn.susunkata) return setReply('Masih ada soal belum terjawab di chat ini')
            let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')).json()
            let json = src[Math.floor(Math.random() * src.length)]
            let caption = `
            Soal: ${json.soal}
            Tipe: ${json.tipe}

            Waktu: *${(timeout / 1000).toFixed(2)} detik*
            Hadiah: ${poin} Money
            `.trim()
            conn.susunkata[id] = [
            await setReply(caption),
            json, poin,
            setTimeout(() => {
            user.balance -= 200
        reply(`*GAME SUSUN KATA*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
            delete conn.susunkata[id]
             }, timeout)
             ]
            }
            db.data.users[sender].glimit -= 1
            break
        case 'tekateki':{
          if (!isPrem && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
        if (!isGroup) return setReply(mess.only.group)
            let timeout = 80000
            let poin = 1000
            let id = m.chat
            if (id in conn.tekateki) return setReply('Masih ada soal belum terjawab di chat ini')
            let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')).json()
            let json = src[Math.floor(Math.random() * src.length)]
            let caption = `
            Soal: ${json.soal}


            Waktu: *${(timeout / 1000).toFixed(2)} detik*
            Hadiah: ${poin} Money 💸
            `.trim()
            conn.tekateki[id] = [
            await setReply(caption),
            json, poin,
            setTimeout(() => {
            if (conn.tekateki[id]) 
        user.balance -= 200
        setReply(`*GAME TEKA-TEKI*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
            delete conn.tekateki[id]
             }, timeout)
             ]
            }
        db.data.users[sender].glimit -= 1
            break
        case 'math': case 'match': case 'mtk': case 'matematika': {
                let modes = {
              noob: [-3, 3, -3, 3, '+-', 10000, 500],
              easy: [-10, 10, -10, 10, '*/+-', 15000, 600],
              medium: [-40, 40, -20, 20, '*/+-', 15000, 730],
              hard: [-100, 100, -70, 70, '*/+-', 20000, 850],
              extreme: [-999999, 999999, -999999, 999999, '*/', 20000, 1000],
              impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 2500],
              impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 35000, 3000]
            }


            let operators = {
              '+': '+',
              '-': '-',
              '*': '×',
              '/': '÷'
            }

            function genMath(mode) {
              let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
              let a = randomInt(a1, a2)
              let b = randomInt(b1, b2)
              let op = pickRandom([...ops])
              let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
              if (op == '/') [a, result] = [result, a]
              return {
                str: `${a} ${operators[op]} ${b}`,
                mode,
                time,
                bonus,
                result
              }
            }

            function randomInt(from, to) {
              if (from > to) [from, to] = [to, from]
              from = Math.floor(from)
              to = Math.floor(to)
              return Math.floor((to - from) * Math.random() + from)
            }
              if (!q) return setReply( `*MATEMATIKA*

        ┌─〔 Mode 〕
        ├ ${Object.keys(modes).join('\n├ ')}
        └────    
            contoh:
            ${prefix}math hard
            `)
              let mode = args[0].toLowerCase()
              if (!(mode in modes)) return setReply( `
        ┌─〔 Mode 〕
        ├ ${Object.keys(modes).join('\n├ ')}
        └────    
            contoh:
            ${prefix}math hard
            `)
              let id = from
              if (id in conn.math) return setReply('Masih ada soal belum terjawab di chat ini')
              let math2 = genMath(mode)
              conn.math[id] = [
                await setReply(`*MATEMATIKA*\n\nBerapa hasil dari *${math2.str}*?\n\nTimeout: ${(math2.time / 1000).toFixed(2)} detik\nBonus Jawaban Benar: Rp ${math2.bonus} `),
                math2, 4,
                setTimeout(async () => {
                    if (conn.math[id]) await setReply(`Waktu habis!\nJawabannya adalah ${math2.result}\n\n${math2.mode.toUpperCase()}\n\nmath ${math2.mode}`)
               delete conn.math[id]
                }, math2.time)
              ]
            }
            break 	

        case 'tebakkata':{
        if (!isGroup) return onlyGroup()
        if (!isPrem && global.db.data.users[sender].glimit < 1) return onlyGlimit()
        let poin = 1000
        let timeout = 120000
        let id = m.chat

        if (id in conn.tebakkata) return setReply('Masih ada soal belum terjawab di chat ini')
        let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')).json()
        let json = src[Math.floor(Math.random() * src.length)]
        let caption = `*Soal :* ${json.soal}

        Timeout *${(timeout / 1000).toFixed(2)} detik*
        Exp : +999
        Bonus : +${poin} Saldo`.trim()
        conn.tebakkata[id] = [
        await setReply(caption),
        json, poin,
        setTimeout(() => {
        if (conn.tebakkata[id]) 
        setReply(`Waktu game telah habis
        Jawabannya adalah : ${json.jawaban}`)
        delete conn.tebakkata[id]
         }, timeout)
         ]
        }
        db.data.users[sender].glimit -= 1
        break
         case 'tebakkimia':{
            if (!isPrem && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
        if (!isGroup) return onlyGroup()
            let timeout = 30000
            let poin = 1000
            let id = m.chat
            if (id in conn.tebakkimia) return setReply('Masih ada soal belum terjawab di chat ini')
            let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')).json()
            let json = src[Math.floor(Math.random() * src.length)]
            let caption = `*TEBAK KIMIA*
            Unsur: ${json.unsur}
            Soal: Singkatan atau lambang di atas adalah...

            Waktu: *${(timeout / 1000).toFixed(2)} detik*
            Hadiah: ${poin} Money
            `.trim()
            conn.tebakkimia[id] = [
            await setReply(caption),
            json, poin,
            setTimeout(() => {
            if (conn.tebakkimia[id]) 
        user.balance -= 200
        reply(`*GAME TEBAK KIMIA*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
            delete conn.tebakkimia[id]
             }, timeout)
             ]
            }
            db.data.users[sender].glimit -= 1
            break
          case 'tebakgambar':{
            if (!isPrem && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
            if (!isGroup) return setReply(mess.only.group)
            let timeout = 80000
            let poin = 2000
            let id = m.chat
            if (id in conn.tebakgambar) return setReply('Masih ada soal belum terjawab di chat ini')
          async function tebakgambar() {
          let random_level = Math.floor(Math.random() * 136)
          let random_eq = Math.floor(Math.random() * 20)
          return axios.get(`https://jawabantebakgambar.net/level-${random_level}/`).then((val) => {
            let url = "https://jawabantebakgambar.net"
            const $ = cheerio.load(val.data)
            let href = $("ul > * > a").eq(random_eq)
            let jwbn = href.find("span").text()
            let img = href.find("img").attr("data-src")
            let src = url + img
            let petunjuk = jwbn.replace(/[AIUEO|aiueo]/g, "_")
            return {
              img: src,
              jawaban: jwbn,
              petunjuk,
            }
          })
            }
          let tos = await tebakgambar ()
          console.log(tos)
            let caption = `*GAME TEBAK GAMBAR*

            Waktu: *${(timeout / 1000).toFixed(2)} detik*
            Hadiah: ${poin} Money
            `.trim()

            conn.tebakgambar[id] = [
            await conn.sendMessage(from, {caption: caption, image: {url: tos.img}}, {quoted: fkontak}),
            tos, poin,
            setTimeout(() => {
            if (conn.tebakgambar[id]) 
        user.balance -= 200
        reply(`*GAME TEBAK GAMBAR*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${tos.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
            delete conn.tebakgambar[id]
             }, timeout)
             ]
            }
            db.data.users[sender].glimit -= 1
            break
case 'suitpvp': case 'suit': {
      if (!isPrem && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
	if (!isGroup) return setReply (mess.only.group)
            conn.suit = conn.suit ? conn.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(conn.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(sender))) setReply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === sender) return setReply(`Tidak bisa bermain dengan diri sendiri !`)
	if (m.mentionedJid[0] === botNumber) return setReply (`Tidak bisa bermain dengan Bot !`)
            if (!m.mentionedJid[0]) return setReply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${nomerOwner}`, m.chat, { mentions: [nomerOwner + '@s.whatsapp.net'] })
            if (Object.values(conn.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return setReply ( `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*GAME SUIT PvP*_

@${sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            conn.suit[id] = {
            chat: await conn.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (conn.suit[id]) conn.sendText(m.chat, `_Waktu suit habis_`, m)
            delete conn.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            db.data.users[sender].glimit -= 1
            break  
        // cek limit
case 'limit':
	case 'ceklimit': 
	if(mentionByReply){
	let nomer = mentionByReply.split("@")[0]
	 setReply(`*${await conn.getName(mentionByReply)}*\n\nLimit : ${prem ? 'Unlimited' : `${db.data.users[mentionByReply].limit}/${limitCount}`}\nLimit Game : ${prem ? 'Unlimited' : `${db.data.users[mentionByReply].glimit}/${gcount}`}\nSaldo : Rp ${db.data.users[mentionByReply].balance.toLocaleString()}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit\nAtau ketik .buyprem untuk membeli unlimited limit`) 
	} else {   
	setReply(`*${pushname}*\n\nLimit : ${ prem ? 'Unlimited' : `${db.data.users[sender].limit}/${limitCount}`}\nLimit Game : ${prem ? 'Unlimited' : `${db.data.users[sender].glimit}/${gcount}`} \nSaldo : Rp ${db.data.users[sender].balance.toLocaleString()}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit\nAtau ketik .buyprem untuk membeli unlimited limit`)
	
	}
	break
 case 'buylimit':{
	if (!q) return setReply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = Rp1000`)
	if (q.includes('-')) return setReply(`Jangan menggunakan -`)
	if (isNaN(q)) return setReply(`Harus berupa angka`)
	let ane = Number(math(q) * 1000)
	if (db.data.users[sender].balance < ane) return setReply(`Saldo kamu tidak mencukupi untuk pembelian ini`)
	db.data.users[sender].balance -= ane
	db.data.users[sender].limit += math(q)
	setReply(`Pembeliaan limit sebanyak ${q} berhasil\n\nSisa Saldo : Rp ${db.data.users[sender].balance.toLocaleString()}\nSisa Limit : ${db.data.users[sender].limit}/${limitCount}`)
	}
	break
case 'buyglimit':{
	if (!q) return setReply(`Kirim perintah *${prefix}buyglimit* jumlah limit yang ingin dibeli\n\nHarga 1 game limit = Rp 700`)
	if (q.includes('-')) return setReply(`Jangan menggunakan -`)
	if (isNaN(q)) return setReply(`Harus berupa angka`)
	let ane = Number(math(q) * 700)
	if (db.data.users[sender].balance < ane) return setReply(`Saldo kamu tidak mencukupi untuk pembelian ini`)
	db.data.users[sender].balance -= ane
	db.data.users[sender].glimit += math(q)
	setReply(`Pembeliaan game limit sebanyak ${q} berhasil\n\nSisa Saldo : Rp ${db.data.users[sender].balance.toLocaleString()}\nSisa Limit : ${db.data.users[sender].glimit}/${limitCount}`)
	}
	break
 case 'claim':
	case 'daily':{
	const limi = ['2','4','1','5','9','3','8','7','6','10','11']
    const randomny = limi[Math.floor(Math.random() * limi.length)]
	const limitfree = randomny
	const free = 3000
	const prem = 10000
	const moneyfree = 3000
	const moneyprem = 10000
	const timeout = 86400000
	let time = global.db.data.users[m.sender].lastclaim + 86400000
	 if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) return setReply( `Anda sudah mengklaim, klaim harian hari ini\ntunggu selama ${conn.msToTime(time - new Date())} lagi`)
	 global.db.data.users[m.sender].exp += prem ? prem : free
     global.db.data.users[m.sender].limit += limitfree
	 global.db.data.users[m.sender].balance += prem ? moneyprem : moneyfree
	setReply(`Selamat kamu mendapatkan:\n\n+${limitfree} Limit\n+${prem? prem : free} Exp\n+${prem? moneyprem : moneyfree} Balance`)
	global.db.data.users[m.sender].lastclaim = new Date * 1
	} 
	break 
case  'topbalance': case 'topglobal' :{
if (!isGroup) return onlyGroup()
let uang = Object.values(db.data.users);
uang.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
let top = '*── 「 TOP BALANCE 」 ──*\n\n'
var arrTop = []
var total = 15
if (uang.length < 15) total = uang.length
for (let i = 0; i < total; i ++){
    top += `${i + 1}. wa.me/${uang[i].id.split("@")[0]}\n=> balance : $${uang[i].balance}\n\n`
    arrTop.push(uang[i].id)
}
   //conn.sendMessage(from, {text: top, mentions: arrTop}, {quoted: m})
 mentions(top, arrTop, true)
  }
break
  case 'shop':{
	let teks = Ehztext(`
	*]────「 SHOP」────[*
	
	Halo ${pushname} 
	Saldo : Rp ${db.data.users[sender].balance.toLocaleString()}
	
	• List Harga
	1 Limit : Rp 1000
	1 Limit Game : Rp 700
	
	NOTE :
	Untuk membeli Limit ketik ${prefix}buylimit jumlah limit
	Contoh : ${prefix}buylimit 10
	
	Untuk membeli Limit Game ketik ${prefix}buyglimit jumlah limit
	Contoh : ${prefix}buyglimit 10
 
Atau ketik .buyprem untuk membeli unlimited limit`)
	setReply(teks)
	}
	break 
   case 'tf':
	case 'transfer':{
    try{
	if(!q) return setReply(`Masukan angka\nContoh: .transfer 100`)
   if(!mentionByReply) return setReply("Reply targetnya")
         if(budy.includes('-') || budy.includes('+')) return setReply ("Harus angka blok")
	if (isNaN(q)) return setReply(`Masukan angka\nContoh: .transfer 100`)
	
	let ane = q
      if(100 > ane) return setReply('Minimal transaksi 100 rupiah')
	if (db.data.users[sender].balance < ane) return setReply(`Saldo kamu tidak mencukupi`)
    	db.data.users[mentionByReply].balance += parseInt(ane)
	db.data.users[sender].balance -= parseInt(ane)
	setReply(`Berhasil mentransfer saldo ke nomer ${mentionByReply.split("@")[0]} sebesar Rp.${Number(q).toLocaleString()}`)
	}catch(err){
      setReply ('User tersebut belum terdaftar di database bot, silahkan suruh ketik .menu terlebih dahulu')
  }
  }
	break
   case 'autosticker': case 'autostickergc':
if (!isCreator) return setReply(mess.only.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].autosticker = true
                    setReply(`Successfully Changed Auto Sticker To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autosticker = false
                    reply(`Successfully Changed Auto Sticker To ${q}`)
                }
            break
 case 'antilinkgc':{
    if (!isGroup) return onlyGroup()
    if (!isGroup) return setReply(mess.only.group)
	if (!isAdmins && !isCreator) return setReply(mess.only.admin)
	if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (isAntilinkGc) return setReply('Fitur sudah aktif kak')
	db.data.chats[from].antilinkgc = true
	let ih =`Fitur antilink group telah di aktifkan`
	setReply(ih)
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	if (!isAntilinkGc) return setReply('Udah mati')
	db.data.chats[from].antilinkgc = false
	let ih =`Fitur antilink group telah di matikan`
	setReply(ih)
	}else if (!q) {
		setReply ( `*MODE ANTI LINK GRUB*\n ${prefix+command} on/off`)
	 }
	 }
	break;  
   
 case 'antitoxic':{
if (!isGroup) return onlyGroup()
if (!isAdmins) return sendHususAdmin()
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isAntiLink) return setReply('Fitur sudah aktif kak')
db.data.chats[from].antitoxic = true
let ih =`Fitur ${command} telah di aktifkan`
setReply(ih)
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isAntiLink) return setReply(`Fitur ${command} sudah off`)
db.data.chats[from].antitoxic = false
let ih =`Fitur ${command} telah di matikan`
setReply(ih)
} else if (!q) {
setReply(`Mode ${command}\n• .${command} on \n• .${command} off`)
}
}
break
case 'antilink':{
    if (!isGroup) return setReply(mess.group)
	if (!isAdmins && !isCreator) return setReply(mess.only.admin)
		if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (isAntiLink) return setReply('Fitur sudah aktif kak')
	db.data.chats[from].antilink = true
	let ih =`Fitur antilink telah di aktifkan`
	setReply(ih)
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	if (!isAntiLink) return setReply('Fitur Anti link sudah off')
	db.data.chats[from].antilink = false
	let ih =`Fitur antilink telah di matikan`
	setReply(ih)
	} else if (!q) {
		setReply ( `*MODE ANTI LINK*\n ${prefix+command} on/off`)
	}
	}
	break;     
    /*case 'antiimage':{
            	if (!isGroup) return setReply(mess.group)
	if (!isAdmins && !isCreator) return setReply(mess.only.admin)
               if (args.length < 1) return reply('pilih on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antiimage = true
                  reply(`${command} berhasi di aktifkan`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiimage = false
                  reply(`${command} berhasil di nonaktifkan`)
               }
               }
            break
 case 'antiaudio':{
            	if (!isGroup) return setReply(mess.group)
	if (!isAdmins && !isCreator) return setReply(mess.only.admin)
               if (args.length < 1) return reply('pilih on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antiaudio = true
                  reply(`${command} Berhasil Di Aktifkan`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiaudio = false
                  reply(`${command} Berhasil Di Nonaktifkan`)
               }
               }
            break
 case 'antimedia':{
		        if (!isGroup) return setReply(mess.group)
	if (!isAdmins && !isCreator) return setReply(mess.only.admin)
               if (args.length < 1) return reply('pilih on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antimedia = true
                  reply(`${command} Berhasil Di Aktifkan`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antimedia = false
                  reply(`${command} Berhasil Di Nonaktifkan`)
               }
               }
            break
            case 'antivideo':{
            	if (!isGroup) return setReply(mess.group)
	if (!isAdmins && !isCreator) return setReply(mess.only.admin)
               if (args.length < 1) return reply('pilih on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antivideo = true
                  reply(`${command} Berhasil Di Aktifkan`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antivideo = false
                  reply(`${command} Berhasil Di Nonaktifkan`)
               }
               }
            break
  case 'antisticker':{
            	if (!isGroup) return setReply(mess.group)
	if (!isAdmins && !isCreator) return setReply(mess.only.admin)
    if (args.length < 1) return reply('pilih on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antisticker = true
                  reply(`${command} Berhasil Di Aktifkan`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antisticker = false
                  reply(`${command} Berhasil Di Nonaktifkan`)
               }
               }
            break*/
//—————「 AI MENU 」—————//
case 'simichat':{
if (args[0] === "enable") {
if (chats.simichat) return reply(`activated`)
chats.simichat = true
reply('Successfully Activate Auto Simi')
} else if (args[0] === "disable") {
if (!chats.simichat) return reply(`it's deactivated`)
chats.simichat = false
reply('Successfully Disabling Auto Simi')
} else {
reply(`${prefix+command} enable -- _mengaktifkan_\n${prefix+command} disable -- _Menonaktifkan_`)
}}
break        
//—————「 DOWNLOAD MENU 」—————//
case 'play': {
if (!isGroup) return onlyGroup()
 if (!q) return reply(`Example : ${prefix + command} Drunk Text`)
sendWait()
                let search = await yts(q)
                let linknya = search.all[0].url
                let bodytextnya = `ᴛɪᴛʟᴇ : *${search.all[0].title}*\nᴠɪᴇᴡs : *${search.all[0].views}*\nᴅᴜʀᴀᴛɪᴏɴ : *${search.all[0].timestamp}*\nᴜᴘʟᴏᴀᴅᴇᴅ : *${search.all[0].ago}*\nᴜʀʟ : *${linknya}*`
            
                
            let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: bodytextnya
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: wm
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : { url : search.all[0].thumbnail }}, { upload: conn.waUploadToServer})), 
                  title: botname,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Video 🎦","id":"${prefix}ytmp4 ${linknya}"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Audio 🎵","id":"${prefix}ytmp3 ${linknya}"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid,
                        serverMessageId: 100,
                        newsletterName
                }
                }
        })
    }
  }
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
            }
            break
case 'ytmp3': case 'youtubemp3': {
if (!isGroup) return onlyGroup()
if (!q) return setReply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27128kbps`)
await setReply(mess.search)
downloadMp3(q)
}
break
case 'ytreels': case 'ytmp4':{
if (!isGroup) return onlyGroup()
if (!q) return setReply(mess.query)
await setReply(mess.search)
downloadMp4(q)
}
break
case 'ttpoto':{
      if (!q) return reply (`Example : ${prefix + command} https://vt.tiktok.com/ZSNhbmwU1/`)
      let url = `https://dlpanda.com/id?url=${q}&token=G7eRpMaa`

      let response = await axios.get(url)
          const html = response.data;
          const $ = cheerio.load(html);

          let asd = []
          let imgSrc = []
          let creator = 'Jikarinka'

      $('div.col-md-12 > img').each((index, element) => {
            imgSrc.push($(element).attr('src'));
          });

          asd.push({ creator, imgSrc })
        let fix = imgSrc.map((e,i) => {
        return {img: e, creator: creator[i] } 
        })

      setReply(mess.pc)
      for (let i of asd[0].imgSrc) {
           let lol = m.mentionedJid[0] || m.sender || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || ''
           conn.sendFile(lol, i, '', null, m)
           }
      }

      break
case 'tt':
case 'tiktok':
 if (!q) return setReply('link nya mana:b')
 sendWait()
 let e = await fetchJson(`https://api.junn4.my.id/download/tiktok?url=${q}`)
 let ee = `${gris}DOWNLOADER TIKTOK${gris}\n ketik .ttaudio jika ingin mengunduh audio nya`
 await conn.sendMessage(m.chat, {video: { url: e.result.Medium.url }, caption: ee }, { quoted: m })
 break
         case 'ttmp3': 
case 'tiktokaudio':
            case 'ttaudio': {
if (!isGroup) return onlyGroup()
                if (!q) return setReply('where is the link')
setReply(mess.wait)
                let i = await fetchJson(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${api.Lol}&url=${q}`)
                conn.sendMessage(m.chat, { audio: { url: i.result }, mimetype: 'audio/mp4' }, { quoted: fkontak })
            }
            break
case 'ig': case 'instagram' :{
                if (!q) return setReply("Link?")
    sendWait()
                let ag = await fetchJson(`https://api.junn4.my.id/download/instagram?url=${q}`)
                    await conn.sendMessage(m.chat, { video: { url: ag.result.media}, caption: `${gris}DOWNLOADER INSTAGRAM${gris}`}, {quoted: m})
            }
            break
//—————「 TOOLS MENU 」—————//
case 'remini':
 case 'hd': {			
         if (!isMedia) return setReply("Where The A Image")
sendWait()
                const { remini } = require('./lib/remini')
                let media = await conn.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                let proses = await remini(media, "enhance")
                conn.sendMessage(m.chat, { image: proses, caption: "nih kak >\<" }, { quoted: m })}
            break


case 'tomp4': 
	        case 'tovideo': {
if (!isGroup) return onlyGroup()
                if (!/webp/.test(mime)) return setReply(`Reply stiker dengan caption *${prefix + command}*`)
                setReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
                
            }
            break
 case 'toimage': 
            case 'toimg': {
if (!isGroup) return onlyGroup()
                if (!/webp/.test(mime)) return setReply(`Reply sticker dengan caption *${prefix + command}*`)
                setReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    conn.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
                
            }
            break
    case 'tomp3': 
            case 'toaudio': {
if (!isGroup) return onlyGroup()
            if (!/video/.test(mime) && !/audio/.test(mime)) return setReply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
            sendSticker(stikot)
            let media = await conn.downloadMediaMessage(qmsg)
            let audio = await toAudio(media, 'mp4')
        conn.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            
            }
            break
 case 'tts':
	const gtts = require( 'node-gtts')
	function tts(text, lang = 'id') {
	// console.log(lang, text)
	return new Promise((resolve, reject) => {
	try {
	let tts = gtts(lang)
	let filePath =  (1 * new Date) + '.mp3'
	tts.save(filePath, text, () => {
	resolve(fs.readFileSync(filePath))
	fs.unlinkSync(filePath)
	})
	} catch (e) { reject(e) }
	})
	}
	
	const defaultLang = 'id'
	
	
	let lang = args[0]
	let text = args.slice(1).join(' ')
	if ((args[0] || '').length !== 2) {
	lang = defaultLang
	text = args.join(' ')
	}
	if (!text && m.quoted?.text) text = m.quoted.text
	
	let ras
	try { ras = await tts(text, lang) }
	catch (e) {
	m.reply(e + '')
	text = args.join(' ')
	if (!text) setReply( `Use example ${prefix}${command} en hello world ketik .kodebahasa untuk list bahasa`)
	ras = await tts(text, defaultLang)
	} finally {
	if (ras) conn.sendMedia(from, ras, m, {caption: "Nih"})
	//conn.sendFile(m.chat, res, 'tts.opus', null, m, true)
	}
	
	break
 case 'tr':
case 'translate':{
if (!isGroup) return onlyGroup()
let translate = require('translate-google-api')
let defaultLang = 'en'
let tld = 'cn'
let toks = `
Contoh:
${prefix + command} <lang> [text]
${prefix + command} id your messages
Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages
`.trim()

let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')
}
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
let result
try {
result = await translate(`${text}`, {to: lang})
} catch (e) {
result = await translate(`${text}`, {to: defaultLang,})
setReply(toks)
} finally {
setReply(result[0])
}
}
break
case 'terbalik':{
if (!isGroup) return onlyGroup()
	if (/audio/.test(mime)){ 
	setReply(mess.wait)
	let media3 = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let rname = getRandom('.mp3')
	exec(`ffmpeg -i ${media3} -filter_complex "areverse" ${rname}`, async (err, stderr, stdout) => {
	if (err) return setReply('Error!')
	let jadie = fs.readFileSync(rname)
	await conn.sendMessage(from, {audio: jadie, mimetype: 'audio/mp4' }, {quoted: m})
	fs.unlinkSync(rname)
	fs.unlinkSync(media3)
	}
	)
	} else {
	setReply('Reply audio!')
	}
	}
	break
 case 'tovn': 
            case 'toptt': {
if (!isGroup) return onlyGroup()
            if (!/video/.test(mime) && !/audio/.test(mime)) return setReply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
            setReply(mess.wait)
            let media = await conn.downloadMediaMessage(qmsg)
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            conn.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            
            }
            break
 case 'togif': {
if (!isGroup) return onlyGroup()
                if (!/webp/.test(mime)) return setReply(`Reply stiker dengan caption *${prefix + command}*`)
                setReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
                
            }
            break
case 'tourl': case 'telegraph':{
                setReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    setReply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    setReply(util.format(anu))
                }
                await fs.unlinkSync(media)
                
            }
            break
case 'pinterest': case 'pin': {
  if (!q) return setReply(mess.query);
  //try {
  await setReply(mess.wait);

  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: conn.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${q}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${q}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res); // Mengacak array
  let ult = res.splice(0, 5); // Mengambil 10 gambar pertama dari array yang sudah diacak
  let i = 1;

  for (let pus of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Image ke - ${i++}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: wm
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: 'Hasil.',
        hasMediaAttachment: true,
        imageMessage: await createImage(pus)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            name: "cta_url",
            buttonParamsJson: `{"display_text":"url","Klik disini":"${pus}","merchant_url":"${pus}"}`
          }
        ]
      })
    });
  }

  const msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hai\nDibawah ini Adalah hasil dari Pencarian Kamu'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: global.botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await conn.relayMessage(m.chat, msg.message, {
    messageId: msg.key.id
  });
  
}
break
//—————「 PRIMBON MENU 」—————//
 case 'cekmemek':
			
				 if (!isGroup) return onlyGroup()
if (!q) return m.reply('tag temanmu!')
				const persengayy = body.slice(0)
          const gay = ["*Udah Ga Perawan:v*\n• Warna Item🙈\n• Bulu Lebat\n• Katanya Polos Ko Lima Jari Lolos Chuackk","*Masih Perawan*\n• Warna Pink🤤\n• Tidak Berbulu\n• Wah Yang ini Buat Owner Ku Aja😋","*Bjir Bau 😵‍💫*\n\n• Kang Colmek\n• Sangat Lebat:v\n• Ishh Sarang Jin Itu😵","*Masih Perawan*\n• Warna Putih Mati\n• Masih Polos\n• Sepertinya Anda Butuh Kehangatan Dari Owner ku🥸 ","*Meki nya Semu Coklat*\n • Korban Pemerkosaan 😑\n• Lu Sih Main Ma Kumpulan Cowo Sengklek\n• Sebaiknya Jan Terlalu Gegabah 🤧","*Normal Seperti Biasanya*\n• Wuanjay Ko Bulu Nya Pada Kriput🙈\n• Ternyata Oh Ternyata Kamu Suka Lesby🫤","*Bahaya Noh Gan*\n• Udah Kena Virus\n• Kalo wik wik Ntar Ke Patil Cowoknya\n😶‍🌫️Takut BerNanah Kelamin Ku ntarr😬","*Lah Ireng Amat bjirr*\n• Hati² Sama Ni Orang Beneran Dah\n• Jangankan Pria Hewan Pun Dia Layani🫣","*74%*\n*Astagfirullah Kabur Gan🏃🌬️*"]
				const kl = gay[Math.floor(Math.random() * gay.length)]
    conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${stime} ⌟`,previewType:"PHOTO",thumbnail: thumb,sourceUrl: `https://www.instagram.com/ehanzdhoanx`,}
}, text :'Hasil Dari: *'+persengayy+'*\n\nJawaban : '+kl}, { quoted: fkontak })
				break  
case 'cekkontol':
				if (!isGroup) return onlyGroup()
if (!q) return setReply('*CEKKONTOL* Izmi begitu!')
	const persenbucin = body.slice (0)
    const bucin =
          ["Hadehh🤦\n[ Dah Item Bauk Lagi ishh🤮 ]","9%\n\nMasih Kecil Ini Mah Ketutup Ama bulu komt nya🗿 Ae","Nakk Masih Kecil","28%\n\nYoalahh hmm","34%\n\nMayan Lah","48%\n\nGatau","59%\n\nBiasa Kang Coli Mah Tityd nya Item🗿","apacoba\nKasian Mana Masih Muda","itu tityd apa terong"," Ya Ampun"]
				const ehan = bucin[Math.floor(Math.random() * bucin.length)]
    conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${stime} ⌟`,previewType:"PHOTO",thumbnail: thumb,sourceUrl: `https://www.instagram.com/ehanzdhoanx`,}
}, 
text : 'cekkomtlo🗿: *'+persenbucin+'*\n\nJawaban : '+ ehan}, { quoted: fkontak })
				break 
  case 'artinama': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz Dhoanx`)
let anu = await primbon.arti_nama(q)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
∘ *Nama :* ${anu.message.nama}
∘ *Arti :* ${anu.message.arti}
∘ *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break	
case 'artimimpi': case 'tafsirmimpi': {
if (!q) return setReply( `Example : ${prefix + command} belanja`)
let anu = await primbon.tafsir_mimpi(q)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Mimpi :* ${anu.message.mimpi}
• *Arti :* ${anu.message.arti}
• *Solusi :* ${anu.message.solusi}`)
setReply(teks)
}
break
 case 'pasangan': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz|Angel`)
let [nama1, nama2] = q.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Nama Anda :* ${anu.message.nama_anda}
• *Nama Pasangan :* ${anu.message.nama_pasangan}
• *Sisi Positif :* ${anu.message.sisi_positif}
• *Sisi Negatif :* ${anu.message.sisi_negatif}`)
setReply(teks)
}
break   
case 'ramalancinta': case 'ramalcinta': {
if (!q) return setReply( `Example : ${prefix + command} ehanz, 28, 6, 2004, angel, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Nama Anda :* ${anu.message.nama_anda.nama}
• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}
• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}
• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}
• *Sisi Positif :* ${anu.message.sisi_positif}
• *Sisi Negatif :* ${anu.message.sisi_negatif}
• *Catatan :*
${anu.message.catatan}`)
setReply(teks)
}
break   
case 'kecocokannama': 
case 'cocoknama': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Life Path :* ${anu.message.life_path}
• *Destiny :* ${anu.message.destiny}
• *Destiny Desire :* ${anu.message.destiny_desire}
• *Personality :* ${anu.message.personality}
• *Persentase :* ${anu.message.persentase_kecocokan}`)
setReply(teks)
}
break 
    case 'kecocokanpasangan':
case 'cocokpasangan':
case 'pasangan': {
if (!q) return setReply( `Example : ${prefix + command} Dika|Novia`)
let [nama1, nama2] = q.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Nama Anda :* ${anu.message.nama_anda}
• *Nama Pasangan :* ${anu.message.nama_pasangan}
• *Sisi Positif :* ${anu.message.sisi_positif}
• *Sisi Negatif :* ${anu.message.sisi_negatif}`)
setReply(teks)
}
break
case 'jadiannikah': {
if (!q) return setReply( `Example : ${prefix + command} 6, 12, 2020`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Tanggal Pernikahan :* ${anu.message.tanggal}
• *karakteristik :* ${anu.message.karakteristik}`)
setReply(teks)
}
break
case 'sifatusaha': {
if (!q) return setReply( `Example : ${prefix + command} 28, 12, 2021`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Lahir :* ${anu.message.hari_lahir}
• *Usaha :* ${anu.message.usaha}`)
setReply(teks)
}
break
    case 'rejeki': 
case 'rezeki': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Lahir :* ${anu.message.hari_lahir}
• *Rezeki :* ${anu.message.rejeki}
• *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
case 'pekerjaan':  {
if (!q) return setReply( `Example : ${prefix + command}  7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Lahir :* ${anu.message.hari_lahir}
• *Pekerjaan :* ${anu.message.pekerjaan}
• *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
case 'ramalnasib': 
case 'nasib': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Analisa :* ${anu.message.analisa}
• *Angka Akar :* ${anu.message.angka_akar}
• *Sifat :* ${anu.message.sifat}
• *Elemen :* ${anu.message.elemen}
• *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`)
setReply(teks)
}
break 
case 'penyakit': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Analisa :* ${anu.message.analisa}
• *Sektor :* ${anu.message.sektor}
• *Elemen :* ${anu.message.elemesektorn}
• *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
case 'artitarot': 
case 'tarot': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Lahir :* ${anu.message.tgl_lahir}
• *Simbol Tarot :* ${anu.message.simbol_tarot}
• *Arti :* ${anu.message.arti}
• *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
case 'fengshui': {
if (!q) return setReply( `Example : ${prefix + command} Rangel, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
let [nama, gender, tahun] = q.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Nama :* ${anu.message.nama} 
• *Lahir :* ${anu.message.tahun_lahir}
• *Gender :* ${anu.message.jenis_kelamin}
• *Angka Kua :* ${anu.message.angka_kua}
• *Kelompok :* ${anu.message.kelompok}
• *Karakter :* ${anu.message.karakter}
• *Sektor Baik :* ${anu.message.sektor_baik}
• *Sektor Buruk :* ${anu.message.sektor_buruk}`)
setReply(teks)
}
break
case 'haribaik': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Lahir :* ${anu.message.tgl_lahir}
•™*Kala Tinantang :* ${anu.message.kala_tinantang}
• *Info :* ${anu.message.info}
• *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
case 'harisangar': 
case 'taliwangke': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Lahir :* ${anu.message.tgl_lahir}
• *Hasil :* ${anu.message.result}
• *Info :* ${anu.message.info}
• *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
case 'harisial': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Hari Lahir :* ${anu.message.hari_lahir}
• *Tanggal Lahir :* ${anu.message.tgl_lahir}
• *Hari Naas :* ${anu.message.hari_naas}
• *Info :* ${anu.message.catatan}
• *Catatan :* ${anu.message.info}`)
setReply(teks)
}
break
case 'harinaga': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Hari Lahir :* ${anu.message.hari_lahir}
• *Tanggal Lahir :* ${anu.message.tgl_lahir}
• *Arah Naga Hari :* ${anu.message.arah_naga_hari}
• *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
case 'arahrejeki': 
case 'arahrezeki': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Hari Lahir :* ${anu.message.hari_lahir}
• *tanggal Lahir :* ${anu.message.tgl_lahir}
• *Arah Rezeki :* ${anu.message.arah_rejeki}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'peruntungan': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz, 28, 6, 2004, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
let [nama, tgl, bln, thn, untuk] = q.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}
• *Hasil :* ${anu.message.result}
• *Catatan :* ${anu.message.catatan}`)
}
break
case 'weton': 
case 'wetonjawa': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Tanggal :* ${anu.message.tanggal}
• *Jumlah Neptu :* ${anu.message.jumlah_neptu}
• *Watak Hari :* ${anu.message.watak_hari}
• *Naga Hari :* ${anu.message.naga_hari}
• *Jam Baik :* ${anu.message.jam_baik}
• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`)
setReply(teks)
}
break
case 'karakter': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Garis Hidup :* ${anu.message.garis_hidup}`)
setReply(teks)
}
break
case 'keberuntungan': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Hasil :* ${anu.message.result}`)
setReply(teks)
}
break
case 'masasubur': {
if (!q) return setReply( `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
let [tgl, bln, thn, siklus] = q.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
•  *Hasil :* ${anu.message.result}
•  *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
  case 'zodiak': 
case 'zodiac': {
if (!q) return setReply( `Example : ${prefix + command} 7 7 2005`)
let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
].reverse()
function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(q)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
let zodiac = await getZodiac(birth[1], birth[2])
let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
∘ *Zodiak :* ${anu.message.zodiak}
∘ *Nomor :* ${anu.message.nomor_keberuntungan}
∘ *Aroma :* ${anu.message.aroma_keberuntungan}
∘ *Planet :* ${anu.message.planet_yang_mengitari}
∘ *Bunga :* ${anu.message.bunga_keberuntungan}
∘ *Warna :* ${anu.message.warna_keberuntungan} 
∘ *Batu :* ${anu.message.batu_keberuntungan}
∘ *Elemen :* ${anu.message.elemen_keberuntungan}
∘ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}
∘ *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
//—————「 STICKER MENU 」—————//
case 'patrick':
case 'petrik':
case 'stikpatrick': {
if (!isGroup) return onlyGroup()
if (!isPrem && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
conn.sendImageAsSticker(from, pjr, m)
}).catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'dogestick': 
case 'doge': 
case 'domge':
case 'dogesticker': {
if (!isGroup) return onlyGroup()
if (!isPrem && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
conn.sendImageAsSticker(from, pjr, m)
}).catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'lovestick' :
case 'slove':
case 'lovesticker': {
if (!isGroup) return onlyGroup()
if (!isPrem && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
conn.sendImageAsSticker(from, pjr, m)
}).catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'gura': 
case 'gurastick': {
if (!isGroup) return onlyGroup()
if (!isPrem && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
conn.sendImageAsSticker(from, pjr, m)
}).catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'paimon': {
if (!isGroup) return onlyGroup()
if (!isPrem && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/Paimon')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
conn.sendImageAsSticker(from, pjr, m)
})
db.data.users[sender].limit -= 1
}
break
case 'mukelu': 

case 'mukestik': {
if (!isGroup) return onlyGroup()
if (!isPrem && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/mukelu')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
conn.sendImageAsSticker(from, pjr, m)
}).catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk': case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': case 'handhold':
if (!isGroup) return onlyGroup()
setReply(mess.wait)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!isGroup) return onlyGroup()
 if (!quoted) return setReply(` reply Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await conn.sendImageAsSticker(from, media, m, { packname: global.packName, author: global.authorName })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return setReply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await conn.sendVideoAsSticker(from, media, m, { packname: global.packName, author: global.author })
await fs.unlinkSync(encmedia)
} else {
setReply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
case 'smeme': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) return setReply(respond)
            if (!q) return setReply(respond)
	        setReply(mess.wait)
            let atas = q.split('|')[0] ? q.split('|')[0] : '-'
            let bawah = q.split('|')[1] ? q.split('|')[1] : '-'
	        let dwnld = await conn.downloadAndSaveMediaMessage(qmsg)
	        let fatGans = await TelegraPh(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans}`
	        let FaTiH = await conn.sendImageAsSticker(m.chat, smeme, m, { packname: global.packName, author: global.authorName })
	        await fs.unlinkSync(FaTiH)
            }
	        break
 case 'emojimix': {
                let [emoji1, emoji2] = q.split`+`
                if (!emoji1) return setReply(`Contoh : ${prefix + command} 😅+🤔`)
                if (!emoji2) return setReply(`Contoh : ${prefix + command} 😅+🤔`)
                setReply(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await conn.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packName,
                        author: global.authorName,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
                
            }
            break
//—————「 FUN MENU 」—————//
case 'tiktokghea':
setReply(mess.wait)
var gheayubi = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
conn.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'cosplayangel':
setReply(mess.wait)
var gheayubi = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/cosplayangel.json'))
var hasil = pickRandom(gheayubi)
conn.sendMessage(m.chat, { caption: 'nih bang ehanz\ningat jangan Gamon yak\nAng3l udah pergi;)', video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokbocil':
setReply(mess.wait)
var bocil = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
conn.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'videosad':
setReply(mess.wait)
var ukhty = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/videosad.json'))
var hasil = pickRandom(ukhty)
conn.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'wibuvid':
setReply(mess.wait)
var santuy = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/wibuvid.json'))
var hasil = pickRandom(santuy)
conn.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokkayes':
setReply(mess.wait)
var kayes = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
conn.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokpanrika':
setReply(mess.wait)
var rikagusriani = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
conn.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'videogalau':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/galau.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break   
 // ============================ //
case 'chinese':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'hijab':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'indo':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'japanese':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'korean':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'malay':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomgirl':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomboy':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'thai':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'vietnamese':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break       
//—————「 CONVERT MENU 」—————//

 case 'kodebahasa':{
	let LANGUAGES = Ehztext(`
	*╭─❲ KODE BAHASA ❳*
	*│*
	*│▸* af: Afrikaans 
	*│▸* sq: Albanian
	*│▸* ar: Arabic
	*│▸* hy: Armenian
	*│▸* ca: Catalan 
	*│▸* zh: Chinese 
	*│▸* zh-cn: Chinese (Mandarin/China)
	*│▸* zh-tw: Chinese (Mandarin/Taiwan)
	*│▸* zh-yue: Chinese (Cantonese)
	*│▸* hr: Croatian
	*│▸* cs: Czech
	*│▸* da: Danish
	*│▸* nl: Dutch
	*│▸* en: English    
	*│▸* en-au: English (Australia)
	*│▸* en-uk: English (United Kingdom)
	*│▸* en-us: English (United States) 
	*│▸* eo: Esperanto 
	*│▸* fi: Finnish 
	*│▸* fr: French
	*│▸* de: German
	*│▸* el: Greek 
	*│▸* ht: Haitian Creole 
	*│▸* hi: Hindi 
	*│▸* hu: Hungarian 
	*│▸* is: Icelandic 
	*│▸* id: Indonesian 
	*│▸* it: Italian
	*│▸* ja: Japanese
	*│▸* ko: Korean
	*│▸* la: Latin
	*│▸* lv: Latvian
	*│▸* mk: Macedonian
	*│▸* no: Norwegian
	*│▸* pl: Polish
	*│▸* pt: Portuguese
	*│▸* pt-br: Portuguese (Brazil)
	*│▸* ro: Romanian
	*│▸* ru: Russian
	*│▸* sr: Serbian
	*│▸* sk: Slovak
	*│▸* es: Spanish 
	*│▸* es-es: Spanish (Spain)
	*│▸* es-us: Spanish (United States)
	*│▸* sw: Swahili
	*│▸* sv: Swedish
	*│▸* ta: Tamil
	*│▸* th: Thai
	*│▸* tr: Turkish
	*│▸* vi: Vietnamese 
	*│▸* cy: Welsh
	*│*
	*╰────────────⦁*`)
	setReply(LANGUAGES)
	}
	break
case'toptv':{
try {
  if (!isGroup) return onlyGroup()
if (m.message.extendedTextMessage) 
{ var dataVideo = { ptvMessage: m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage }
    conn.relayMessage(m.chat, dataVideo, {})} } 
catch (error) { m.reply(error); } } 
break
 case 'bass': 
            case 'blown': 
            case 'deep': 
            case 'earrape': 
            case 'fast': 
            case 'fat': 
            case 'nightcore': 
            case 'reverse': 
            case 'robot': 
            case 'slow': 
            case 'smooth': 
            case 'tupai': {
if (!isGroup) return onlyGroup()
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                setReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return setReply(err)
                let buff = fs.readFileSync(ran)
                conn.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else setReply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                setReply(e)
                }
                }
            break
  case "get":
case "fetch":
  if (!q) {
    return setReply(`Contoh:\n${prefix + command} https://telegra.ph/file/f2ee9d853331af107b70e.jpg'`);
  }
  if (!/^https?:\/\//.test(q)) {
    return m.reply("URL is Invalid!");
  }
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  if (body.match(/(mp4)/gi)) {
    fetch(`${q}`, requestOptions)
      .then((res) => conn.sendMessage(from, { video: { url: `${q}` }, mimetype: "video/mp4", caption: "Success" }, { quoted: m }))
      .catch((error) => m.reply("Error", error));
  } else if (body.match(/(mp3)/gi)) {
    fetch(`${q}`, requestOptions)
      .then((res) => conn.sendMessage(from, { audio: { url: `${q}` }, mimetype: "audio/mp4", fileName: "Audio" }, { quoted: m }))
      .catch((error) => m.reply("Error", error));
  } else if (body.match(/(png|jpg|jpeg)/gi)) {
    fetch(`${q}`, requestOptions)
      .then((res) => conn.sendMessage(from, { image: { url: `${q}` }, caption: "Success" }, { quoted: m }))
      .catch((error) => m.reply("Error", error));
  } else {
    fetch(`${q}`, requestOptions)
      .then((response) => response.text())
      .then((result) => m.reply(result))
      .catch((error) => m.reply("Error", error));
  }
  break;
 case 'removebg':
  case 'nobg': {
 if (!isGroup) return onlyGroup()
 if (!isMedia) return setReply("Where The A Image")
                setReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                conn.sendMessage(m.chat, {
                    image: { url: `https://api.lolhuman.xyz/api/removebg?apikey=${api.Lol}&img=${anu}` },caption: "nih kak>\<" }, { quoted: m}) }
            break
//—————「 ISLAMIC MENU 」—————//
case 'alkitab':{
    if (!q) return setReply (`uhm.. teksnya mana?\n\ncontoh:\nAlkitab kejadian`)
    setReply('Patience, O Earthlings')
    let res = await axios.get(`https://alkitab.me/search?q=${encodeURIComponent(q)}`, { headers: { "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36" } })
    const cheerio = require('cheerio');
    let $ = cheerio.load(res.data)
    let result = []
    $('div.vw').each(function (a, b) {
        let teks = $(b).find('p').text().trim()
        let link = $(b).find('a').attr('href')
        let title = $(b).find('a').text().trim()
        result.push({ teks, link, title })
    })

    let caption = result.map(v => Ehztext(`${v.title}\n${v.teks}`)).join('\n────────\n')
    setReply(caption)
}
break
case 'kisahnabi':
 if (!isGroup) return onlyGroup()
			if (args.length == 0) return setReply(`Example: ${prefix + command} Muhammad`)
			setReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/kisahnabi/${q}?apikey=${api.Lol}`)
				.then(({ data }) => {
					var nabi = Ehztext(`*Name : ${data.result.name}*\n`)
					nabi += Ehztext(`*Lahir : ${data.result.thn_kelahiran}*\n`)
					nabi += Ehztext(`*Umur : ${data.result.age}*\n`)
					nabi += Ehztext(`*Tempat : ${data.result.place}*\n`)
					nabi += Ehztext(`Story : \n${data.result.story}`)
					setReply(nabi)
				})
				.catch(console.error)
			break
 case 'alquran':
if (!isGroup) return onlyGroup()
			if (args.length < 1) return setReply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
			setReply(mess.wait)
			axios
				.get(`https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${api.Lol}`)
				.then(({ data }) => {
					var ayat = data.result.ayat
					var text = `QS. ${data.result.surah} : 1-${ayat.length}\n\n`
					for (var x of ayat) {
						text += Ehztext(`${x.arab}\n${x.ayat}. ${x.latin}\n${x.indonesia}\n\n`)
					}
					text = text.replace(/<u>/g, '_').replace(/<\/u>/g, '_')
					text = text.replace(/<strong>/g, '*').replace(/<\/strong>/g, '*')
					setReply(text)
				})
				.catch(console.error)
            break
 case 'islamic': 
case 'randomislam': {
if (!isGroup) return onlyGroup()
if (!isPrem && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
let g = await fetch(`https://raw.githubusercontent.com/inirey/RESTAPI/master/data/Islamic.json`)
let f = await g.json()
let a = f[Math.floor(Math.random() * f.length)]
//let buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️ ɴᴇxᴛ ᴘʜᴏᴛᴏ`},type:1}]                            
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `N I S A - M D`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: 'https://telegra.ph/file/b27340b89cd2c451934d7.jpg',sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url: a}, caption: `${mess.success}` ,footer: `Hasil pencarian dari ${command}`}, { quoted: m })
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
//—————「 ANIME MENU 」—————//
case 'animerandom':
case 'randomanime':
if (!isGroup) return onlyGroup()
setReply(`
Silakan pilih salah satu

akira || akiyama || anna || asuna || ayuzawa ||| boruto || chitanda || chitoge ||| deidara || elaina || emilia || asuna || erza || gremory || hestia || hinata || inori || itachi || isuzu || itori || kaga  || kakasih || kaori || kaneki || kosaki || kotori || kuriyama || kuroha || kurumi || madara || mikasa || miku || minato || naruto || natsukawa || nekohime || nezuko || nishimiya || onepiece || rem || rize || sagiri || sakura || sasuke || shina || shinka || shizuka || shota || tomori || toukachan || tsunade || yatogami || yuki

Contoh : .shina`)
break
case 'akira': case 'akiyama': case 'anna': case 'asuna': case 'ayuzawa': case 'boruto': case 'chitanda': case 'chitoge': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'asuna': case 'erza': case 'gremory': case 'hestia': case 'hinata': case 'inori': case 'itachi': case 'isuzu': case 'itori': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'kaneki': case 'kosaki': case 'kotori': case 'kuriyama': case 'kuroha': case 'kurumi': case 'madara': case 'mikasa': case 'miku': case 'minato': case 'naruto': case 'natsukawa': case 'nekohime': case 'nezuko': case 'nishimiya': case 'onepiece': case 'pokemon': case 'rem': case 'rize': case 'sagiri': case 'sakura': case 'sasuke': case 'shina': case 'shinka': case 'shizuka': case 'shota': case 'tomori': case 'toukachan': case 'tsunade': case 'yatogami': case 'yuki':{
if (!isGroup) return onlyGroup()
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/${command}.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'image.jpg', `_${command}_`, m)

}
break
case 'loli':
  case 'cosplay': 
  case 'husbu':
  case 'milf':
case 'wallml':{
if (!isGroup) return onlyGroup()
if (!isPrem && global.db.data.users[sender].limit < 1) return setReply(mess.limit)
	
setReply(mess.wait)
//let data = global.db.data.others['runtime']
//let time = (new Date - data.runtime) || "Tidak terdeteksi" 
let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
let kentir = await getBuffer(wipi)                             
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: wm, mediaType: 3,  renderLargerThumbnail : true,thumbnail:thumb,sourceUrl: `https://wa.me/${nomerOwner}`																										
}}, image: kentir, caption: `_${command}_` ,footer: `Hasil pencarian dari ${command}`}, { quoted: m })
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1 
}
break
//—————「 TEXTPRO MENU 」—————//
case 'flaming1':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPrem && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&script=fluffy-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${ini_txt}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: wm, mediaType: 3,  renderLargerThumbnail : true,thumbnail:thumb,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
 case 'flaming2':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPrem && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${ini_txt}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: wm, mediaType: 3,  renderLargerThumbnail : true,thumbnail: thumb,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'flaming3':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPrem && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=${ini_txt}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botname}`, mediaType: 3,  renderLargerThumbnail : true,thumbnail: thumb,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'flaming4':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPrem && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=${ini_txt}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botname}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl:'https://telegra.ph/file/33d58a3a7b931d3902642.jpg',sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'flaming5':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPrem && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${ini_txt}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botname}`, mediaType: 3,  renderLargerThumbnail : true,thumbnail: thumb,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'bucinsertifikat':
		    case 'sertifikatbucin':
			case 'bucinserti':
				if (args.length == 0) return setReply(`Example: ${prefix + command} ehanz & angel\n bjir lah love you`)
				setReply(mess.wait)
				let kueri = args.join(" ")
                conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/bucinserti?apikey=${api.Lol}&name=${kueri}`}, caption: 'Sertifikatnya kack'}, {quoted: m})
            break
case 'tololserti':
			case 'tololcert':
			case 'tololsertifikat':
			if (args.length == 0) return setReply(`Contoh: ${prefix + command} izmi Kontol`)
			setReply(mess.wait)
			let ytta = args.join(" ")
            conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/toloserti?apikey=${api.Lol}&name=${ytta}`}, caption: 'Sertifikatnya kack'}, {quoted: m})
            break
case 'pacarsertifikat':
			case 'pacarserti':
            if (args.length == 0) return setReply(`Usage: ${prefix + command} nama1|nama2`)
            setReply(mess.wait)
              let  get_args = args.join(" ").split("|")
              let  nik = get_args[0]
              let  prov = get_args[1]
			  let  titidnya = `Selamat yaa ${nik} ❤️ ${prov}`
            conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/pacarserti?apikey=${api.Lol}&name1=${nik}&name2=${prov}`}, caption: titidnya}, {quoted: m})
            break
//=========================== //
case 'flaming6':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPrem && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23101820&text=${ini_txt}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botname}`, mediaType: 4,  renderLargerThumbnail : true,thumbnail: fs.readFileSync('./media/thumb.jpg'),sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
//—————「 RANDOM MENU 」—————//
case 'ppcp': case 'couple': case ' ppcouople': {
if (!isGroup) return onlyGroup()
                setReply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                conn.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                conn.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break	    
case 'jadian': {
if (!isGroup) return onlyGroup()
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = Ehztext(`Ciee yang jadian ❤️ Jangan lupa pajak jadiannya yee

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`)
let menst = [orang, jodoh]
conn.sendMessage(from, { text: jawab, mentions: menst },{quoted: fcall}) 
}
break
case 'jodohku':{
if (!isGroup) return onlyGroup()
let member = participants.map(u => u.id)
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = Ehztext(`Jodoh kamu adalah @${jodoh.split('@')[0]}`)
let menst = [jodoh]
conn.sendMessage(from, { text: jawab, mentions: menst }, { quoted: m })
}
break
case 'caridoi':
    case 'cariteman':{
   if (!isGroup) return onlyGroup()
    let userny = Object.values(db.data.users);
    let teman = pickRandom(userny)
    let namTemen = teman.name
    let nomerTemen = teman.id
    setTimeout(() => {
    setReply('Sedang mencari....')
    }, 1000)
    setTimeout(() => {
    setReply('Berhasil mendapatkan satu org')
    }, 5000)
    setTimeout(() => {
    conn.sendContAngel(from, nomerTemen, namTemen, m)
    }, 9000)
    }
    break
case 'daffz': case '@6285200808240': case '6285200808240':

/*let oah = Ehztext(`Ada Apa kak itu nomor ayang ku mmmm><`)
setReply(oah)*/
await sendTagOwner()
break
case 'joincall':{
if (!isGroup) return onlyGroup()
conn.relayMessage(m.chat, {
		scheduledCallCreationMessage: {
		callType: "VIDEO",		
		scheduledTimestampMs: 12000,
		title: `${stime} dari ${botname}`,		
		inviteCode: 'yandex.com',
		}
	}, {})
	}
	break
/*case 'script' :
    setReply(`_Tunggu Sebentar Sedang Mengirim File_`)
   await conn.sendMessage(from, { document: fs.readFileSync('./temp/Nisa-Multidevice.zip'),fileName: 'Nisa-Multidevice.zip', mimetype: 'application/zip'  },{ quoted: m})
await sleep(2000)
conn.sendMessage(m.chat, { image: { url:"https://telegra.ph/file/f0667aebcaea930dec5f3.jpg"}, caption: '_Kalian Bisa pake apk uptimerobot Biar Bot Bisa On 24 Jam_'}, { quoted: m})
break
*/
//—————「 SETTINGS MENU 」—————//


case 'readchange':
if (!isCreator) return reply(mess.only.owner)
if (args.length < 1) return reply(`Contoh ${prefix + command} enable/disable`)
if (q === 'enable') {
autoread = true
reply(`Berhasil mengubah autoread ke ${q}`)
} else if (q === 'disable') {
autoread = false
reply(`Berhasil mengubah autoread ke ${q}`)
}
break

case 'autoread': {
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: wm
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: Ehztext(` Tekan BUTTON\n\n*ENABLE* Untuk Aktifkan\n*DISABLE* Untuk Nonaktifkan`),
                    subtitle: "rorr",
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"「 Enable 」\",\"id\":\".readchange enable\"}"
},
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"「 Disable 」\",\"id\":\".readchange disable\"}"
},
 ],
 })
 })
 }
 }
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case 'biochange':
                if (!isCreator) return reply(mess.only.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'enable') {
                    autobio = true
                    reply(`Berhasil Mengubah AutoBio Ke ${q}`)
                } else if (q == 'disable') {
                    autobio = false
                    reply(`Berhasil Mengubah AutoBio Ke ${q}`)
                }
                break   
                
case 'autobio': {
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: wm
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: Ehztext(`Tekan button\n\n*Enable* Untuk Aktifkan\n*Disable* Untuk Nonaktifkan`),
                    subtitle: "rorr",
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"「 Enable 」\",\"id\":\".biochange enable\"}"
},
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"「 Disable 」\",\"id\":\".biochange disable\"}"
},
 ],
 })
 })
 }
 }
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case 'ping':
            case 'runtime':
            case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, {
                    length
                }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = Ehztext(`
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim())
                await conn.sendMessage(m.chat, {
                    text: respon,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: Ehztext('STATUS SERVER'),
                            body: `${latensi.toFixed(4)} Second`,
                            thumbnailUrl: 'https://telegra.ph/file/22bd670d897326e53f341.jpg',
                            sourceUrl: '-',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
case 'adderror':
	{
	if (!q) return setReply(`Yang error apa bro ?\nContoh: ${prefix}adderror nosinya|menu`)
	//if (!m.key.fromMe && !isCreator) return reply (mess.only.ownerB)
	let oke = q.split("|")[0]
	let oka = q.split("|")[1]
	addError(oke, oka, listerror)
	await setReply(`Sukses Menambahkan ${q} ke daftar error`)
	}
	break
case 'listerror': {
	let errornye = `*List Error*\nJumlah : ${db.data.listerror.length}\n\n`
	for (let i of db.data.listerror){          
	errornye += `_*Command*_ : ${i.cmd}\n_*System Error*_ : ${i.error}\n\n*]─────────────────[*\n\n`             
	} 
	errornye += `© ${botname}`
	setReply(errornye)
	}
	break
case 'delsampah':{
 if (!isCreator) return reply(mess.owner);
 let directoryPath = './'; // Ganti dengan path yang sesuai di dalam kontainer
 fs.readdir(directoryPath, async function (err, files) {
 if (err) {
 return reply('Tidak dapat memindai direktori: ' + err);
 } 
 let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3") || item.endsWith("mp4") || item.endsWith("jpg") || item.endsWith("jpeg") || item.endsWith("webp") || item.endsWith("webm")|| item.endsWith("zip")|| item.endsWith("tar.gz"));
 var teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`;
 if (filteredArray.length == 0) return reply(teks);
 for (let i = 0; i < filteredArray.length; i++) {
 console.log("Nama file:", filteredArray[i]); // Tambahkan log untuk memeriksa nama file
 let stats = fs.statSync(path.join(directoryPath, filteredArray[i]));
 console.log("Stats:", stats); // Tambahkan log untuk memeriksa informasi stats
 let fileSizeInBytes = stats.size;
 let fileSize;
 if (fileSizeInBytes < 1024) {
 fileSize = `${fileSizeInBytes} Bytes`;
 } else if (fileSizeInBytes < 1024 * 1024) {
 fileSize = `${(fileSizeInBytes / 1024).toFixed(2)} KB`;
 } else if (fileSizeInBytes < 1024 * 1024 * 1024) {
 fileSize = `${(fileSizeInBytes / (1024 * 1024)).toFixed(2)} MB`;
 } else {
 fileSize = `${(fileSizeInBytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
 }
 teks += `${i+1}. ${filteredArray[i]} - ${fileSize}\n`;
 }
 setReply(teks);
 await sleep(2000);
 setReply("Menghapus file sampah...");
 await Promise.all(filteredArray.map(async function (file) {
 try {
 await fs.unlinkSync(path.join(directoryPath, file));
 } catch (err) {
 console.error(err);
 }
 }));
 await sleep(2000);
 setReply("Berhasil menghapus semua sampah");
 });
}
break
case 'clearsesi':{
if (!isCreator) return setReply(mess.only.owner)
fs.readdir("./session/session", async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return setReply('Unable to scan directory: ' + err);
} 
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-")
   )
console.log(filteredArray.length); 
let teks =`Terdeteksi ${filteredArray.length} file kenangan\n\n`
if(filteredArray.length == 0) return setReply(teks)     
setReply(teks) 
await sleep(2000)
setReply("Menghapus file kenangan...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./session/session/${file}`)
});
await sleep(2000)
setReply("Berhasil menghapus semua kenangan di folder session")     
});

}
break
case 'getsession':
                if (!isCreator) return setReply(mess.only.owner)
                reply('Wait a moment, currently retrieving your session file')
                let sesi = fs.readFileSync('./session')
                conn.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/zip',
                    fileName: 'session.zip'
                }, {
                    quoted: m
                })
            break
case 'totalfitur': {
let adek = Ehztext(`Fitur Saat Ini ${totalFitur()} Features`)
sendAnti (adek)
}
break


//—————「 STORAGE MENU 」—————//
case 'addvn': {
                if (!isPrem) return setReply(mess.prem)
                if (args.length < 1) return setReply('Masukan Namanya?')
                if (VnEhanz.includes(q)) return setReply("Nama Telah Di Pakai")
                let delb = await conn.downloadAndSaveMediaMessage(quoted)
                VnEhanz.push(q)
                await fsx.copy(delb, `./media/audio/${q}.mp3`)
                fs.writeFileSync('./json/vn.json', JSON.stringify(VnEhanz))
                fs.unlinkSync(delb)
                setReply(`Sukses Menambahkan Audio\nUntuk Mengecek Ketik ${prefix}listvn`)
            }
            break
case 'delvn': {
                if (!isPrem) return setReply(mess.prem)
                if (args.length < 1) return setReply('Masukan Namanya')
                if (!VnEhanz.includes(q)) return setReply("Nama Tidak Terdaftar Di Database")
                let wanu = VnEhanz.indexOf(q)
                VnEhanz.splice(wanu, 1)
                fs.writeFileSync('./json/vn.json', JSON.stringify(VnEhanz))
                fs.unlinkSync(`./media/audio/${q}.mp3`)
                setReply(`Sukses Menghapus Audio ${q}`)
            }
            break
case 'listvn': {
                let teks = '┌──⭓「 *List Vn* 」\n│\n'
                for (let x of VnEhanz) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VnEhanz.length}*`
                setReply(teks)
            }
            break
case 'addimage': {
                if (!isPrem) return setReply(mess.prem)
                if (args.length < 1) return setReply('Nama Imagenya?')
                if (ImageEhanz.includes(q)) return setReply("Nama Yang Kamu Masukan Sudah Terdaftar Di Dalam Database")
                let delb = await conn.downloadAndSaveMediaMessage(quoted)
                ImageEhanz.push(q)
                await fsx.copy(delb, `./media/image/${q}.jpg`)
                fs.writeFileSync('./json/image.json', JSON.stringify(ImageEhanz))
                fs.unlinkSync(delb)
                setReply(`Sukses Menambahkan Image\nUntuk Cek Ketik ${prefix}listimage`)
            }
            break
case 'delimage': {
                if (!isPrem) return setReply(mess.prem)
                if (args.length < 1) return setReply('Masukan Nama Imagenya')
                if (!ImageEhanz.includes(q)) return setReply("Nama Image Yang Kamu Masukan Tidak Terdaftar")
                let wanu = ImageEhanz.indexOf(q)
                ImageEhanz.splice(wanu, 1)
                fs.writeFileSync('./json/image.json', JSON.stringify(ImageEhanz))
                fs.unlinkSync(`./media/image/${q}.jpg`)
                setReply(`Suksed Menghapus Image ${q}`)
            }
        break
case 'listimage': {
                let teks = '┌──⭓「 *List Image* 」\n│\n'
                for (let x of ImageEhanz) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${ImageEhanz.length}*`
                setReply(teks)
            }
            break
        case 'addvideo': {
                if (!isPrem) return setReply(mess.prem)
                if (args.length < 1) return setReply('Nama Videonya?')
                if (VideoEhanz.includes(q)) return setReply("Nama Yang Kamu Masukan Sudah Ada")
                let delb = await conn.downloadAndSaveMediaMessage(quoted)
                VideoEhanz.push(q)
                await fsx.copy(delb, `./media/video/${q}.mp4`)
                fs.writeFileSync('./json/video.json', JSON.stringify(VideoEhanz))
                fs.unlinkSync(delb)
                setReply(`Success Menambahkan Video\nUntuk Melihat Ketik ${prefix}listvideo`)
            }
            break
case 'delvideo': {
                if (!isPrem) return setReply(mess.prem)
                if (args.length < 1) return setReply('Masukan Nama Video')
                if (!VideoEhanz.includes(q)) return setReply("Nama Tidak Ada Di Dalam Database")
                let wanu = VideoEhanz.indexOf(q)
                VideoEhanz.splice(wanu, 1)
                fs.writeFileSync('./json/video.json', JSON.stringify(VideoEhanz))
                fs.unlinkSync(`./media/video/${q}.mp4`)
                setReply(`Success Sukses Menghapus Video ${q}`)
            }
            break
case 'listvideo': {
                let teks = '┌──⭓「 *List Video* 」\n│\n'
                for (let x of VideoEhanz) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VideoEhanz.length}*`
                setReply(teks)
            }
            break
        case 'addsticker': {
                if (!isPrem) return setReply(mess.prem)
                if (args.length < 1) return setReply('Masukan Nama Stickernya?')
                if (StickerEhanz.includes(q)) return setReply("Nama Telah Di Pakai")
                let delb = await conn.downloadAndSaveMediaMessage(quoted)
                StickerEhanz.push(q)
                await fsx.copy(delb, `./media/sticker/${q}.webp`)
                fs.writeFileSync('./json/sticker.json', JSON.stringify(StickerEhanz))
                fs.unlinkSync(delb)
                setReply(`Sukses Menambahkan Sticker\nUntuk Mengecek Ketik ${prefix}liststicker`)
            }
            break
 case 'delsticker': {
                if (!isPrem) return setReply(mess.prem)
                if (args.length < 1) return setReply('Masukan Nama Stickernya')
                if (!StickerEhanz.includes(q)) return setReply("Nama Tidak Terdaftar Di Database")
                let wanu = StickerEhanz.indexOf(q)
                StickerEhanz.splice(wanu, 1)
               fs.writeFileSync('./json/sticker.json', JSON.stringify(StickerEhanz))
                fs.unlinkSync(`./media/sticker/${q}.webp`)
                setReply(`Sukses Menghapus Sticker ${q}`)
            }
            break
case 'liststicker': {
                let text = '┌──⭓「 *List Sticker* 」\n│\n'
                for (let x of StickerEhanz) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${StickerEhanz.length}*`
                setReply(text)
            }
            break
case 'addrespon':{
  if(!q) return setReply(`Contoh ${prefix+command} lala|lulu`)
  if(q.length > 100) return setReply("Teks pertama tidak boleh panjang, max 100 huruf")
  let data = q.split("|")[0]
  let respon = q.split("|")[1]

  let listData = global.db.data.respon[data] 	
  if(listData){
    return setReply(`List ${data} sudah ada di database`)
    } else global.db.data.respon[data] = {
    id:senderNumber,
    respon:respon			
    } 
  setReply(`Berhasil menambahkan list ${data}`)
  }
  break
case 'delrespon':{
      if(!q) return setReply(`Contoh ${prefix+command} lala|lulu`)
      let listData = global.db.data.respon[q]
if(!listData) return setReply(`List ${q} tidak ada di database`)	
if(listData) delete global.db.data.respon[q]
setReply(`Berhasil menghapus respon ${q}`)
    }
    break
case  'listrespon':{
if (!isCreator) return setReply(mess.only.owner)
let teks = 'List Respon :\n\n'
for (let bjir of Object.keys(db.data.respon)) {
teks += `- ${bjir}\n`
}
teks += `\nTotal ada : ${Object.keys(db.data.respon).length}`
teks += `\n\nUntuk mengambil Respon silakan ketik nama Respon`
setReply(teks)
}
break
//—————「 OWNER MENU 」—————//
case 'owner': case 'creator':{
  const p = `${global.nomerOwner}`;
  let pp = await conn.profilePictureUrl(`${p}@s.whatsapp.net`, 'image').catch((_) => "https://telegra.ph/file/22bd670d897326e53f341.jpg");
  let owner = `wa.me/${p}`;
  let vcard = `
BEGIN:VCARD
VERSION:3.0
N:WhatsApp; ZeeBot
ORG: ${global.ownername}
TITLE:soft
item1.TEL;waid=${global.nomerOwner}:${global.nomerOwner}
item1.X-ABLabel:Contact Owner
item2.TEL;waid=${global.nomorbot}:${global.nomorbot}
item2.X-ABLabel:Contact Bot
item3.URL:https://ZeeBot.my.id
item3.X-ABLabel:💬 More
item4.EMAIL;type=INTERNET:${global.ownermail}
item4.X-ABLabel:Email
item5.ADR:;;🇯🇵 japan;;;;
item5.X-ABADR:💬 More
END:VCARD`;
  const sentMsg = await conn.sendMessage(m.chat, {
    contacts: {
      displayName: ownername,
      contacts: [{ vcard }]
    },
    contextInfo: {
      externalAdReply: {
        title: `${botname}`,
        body: `hai ${stime}kak${pushname}`,
        thumbnailUrl: pp,
        sourceUrl: null,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m });

conn.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, Nih Owner Ku.. Kalo Ada Sesuatu Bilang Aja Sama Dia :3`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: sentMsg })
}
break
case 'delcase': {
if (!isCreator) return setReply(mess.only.ownerB)
if (!q) return setReply('*Masukan nama case yang akan di hapus*')

dellCase('./ZeeBot.js', q)
setReply('*Dellcase Successfully*')
}
break

case 'addcase': {
 if (!isCreator) return setReply(mess.only.ownerB)
 if (!q) return setReply('Mana case nya');
    const fs = require('fs');
const namaFile = 'ZeeBot.js';
const caseBaru = `${q}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                setReply('Case baru berhasil ditambahkan.');
            }
        });
    } else {
        reply('Tidak dapat menambahkan case dalam file.');
    }
});

}
break
case 'listcase': {
let { listCase } = require('./lib/scrapelistCase.js')
setReply(listCase())
}
break
case 'getcase': {
const getCase = (cases) => {
return "case "+`'${cases}'`+fs.readFileSync("./ZeeBot.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break" }
  try{
  if (!isCreator) return setReply(mess.only.owner)
  if (!q) return setReply(`contoh : ${prefix + command} antilink`)
  let nana = await getCase(q)
 setReply(nana)
  } catch(err){
 console.log(err)
 reply(`Case ${q} tidak di temukan`)
   } }
break 
case 'public': {
if (!isCreator) return setReply(mess.only.owner) 
conn.public = true
setReply(`${gris}Sukse Change To Public${gris}`)
}
break

case 'self': {
if (!isCreator) return setRply(mess.only.owner) 
conn.public = false
setReply(`${gris}Sukses Change To Self${gris}`)
}
break
        
case 'addprem':{
if (!isCreator) return setReply(mess.only.owner)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (!pcknm) return setReply(`Penggunaan :\n*${prefix}addprem* @tag|waktu\n*${prefix}addprem* nomor|waktu\n\nContoh : ${prefix+command} @tag|30d`)
if (!atnm) return reply(`Mau yang berapa hari?`)
let users = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
reply('Sukses')
} else {
var cekap = await conn.onWhatsApp(pcknm+"@s.whatsapp.net")
if (cekap.length == 0) return setReply(`> _*Masukkan nomer yang valid/terdaftar di WhatsApp*_`)
prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
reply('Sukses')
}}
break

case 'delprem': {
if (!isCreator) return setEeply(mess.only.owner)
if (!args[0]) return setReply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
premium.splice(prem.getPremiumPosition(users, premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
reply('Sukses!')
} else {
var cekpr = await conn.onWhatsApp(args[0]+"@s.whatsapp.net")
if (cekpr.length == 0) return reply(`> _*Masukkan nomer yang valid/terdaftar di WhatsApp*_`)
premium.splice(prem.getPremiumPosition(args[0] + '@s.whatsapp.net', premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
setReply('Sukses!')
}}
break

case 'listpremium': case 'listprem': {
if (!isCreator) return setReply(mess.only.owner)
let txt = `${gris}LIST PREMIUM USER${gris}\nJumlah : ${premium.length}\n\n`
let men = [];
for (let i of premium) {
men.push(i.id)
txt += `*ID :* @${i.id.split("@")[0]}\n`
if (i.expired === 'PERMANENT') {
let cekvip = 'PERMANENT'
txt += `*Expire :* PERMANENT\n\n`
} else {
let cekvip = Func.readTime(i.expired - Date.now())
txt += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
}
}
conn.sendTextWithMentions(m.chat, txt, m)
}
break
case 'backup': {
if (!isCreator) return reply(mess.owner)
 await setReply("Sabar Mas Lagi Backup!!!");
 const { execSync } = require("child_process");
 const ls = (await execSync("ls"))
 .toString()
 .split("\n")
 .filter( (pe) =>
 pe != "node_modules" &&
 pe != "package-lock.json" &&
 pe != "yarn.lock" &&
 pe != ""  );
  const exec = await execSync(`zip -r Rangel.zip ${ls.join(" ")}`);
 await conn.sendMessage(m.chat, { document: await fs.readFileSync("./RangelButton.zip"),mimetype: "application/zip",
  fileName: "RangelBeton.zip", }, { quoted: fcall } );
 await execSync("rm -rf Ehanz.zip"); }
break
 
/*case 'bcgc':{
if (!isCreator) return setReply(mess.only.owner)
if (!q) return setReply('Teksnya?')
let getGroups = await conn.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anus = groupss.map(v => v.id)
if(isQuotedImage || isImage || isQuotedAudio || isVideo || isQuotedVideo) {
var alala = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
}
setReply(`Mengirim Broadcast Ke ${anus.length} Chat, Waktu Selesai ${anus.length * 0.5 } detik`)

for (let i of anus) {
let text = `
*_Broadcast Group_*

––––––『 *MESSAGE* 』––––––

${q}

`

await sleep(1000)
let contextInfo = {
forwardingScore: 50,
isForwarded: true,
externalAdReply:{
showAdAttribution: true,
title: botname,
body: versions,
previewType:"PHOTO",
thumbnailUrl: 'https://telegra.ph/file/33d58a3a7b931d3902642.jpg'
}
}
if(isQuotedImage || isImage){
conn.sendMessage(i,{contextInfo,image:fs.readFileSync(alala),caption:text})
} else if(isQuotedVideo || isVideo){
conn.sendMessage(i,{contextInfo,video:fs.readFileSync(alala),caption:text})
} else if(isQuotedAudio){
conn.sendMessage(i,{contextInfo,Audio:fs.readFileSync(alala)})
} else conn.sendMessage(i,{contextInfo,text})
}
setReply(`Sukses Mengirim Broadcast Ke ${anus.length} Group`)
}
break*/
case 'bcgc': case 'bcgroup': {
if (!isCreator) return reply(mess.owner)

if (!q) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
conn.sendMessage(i, {text: `${q}`}, {quoted:m})
    }
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
 case 'clearuser':
	if (!isCreator) return setReply(mess.only.owner)
	setReply("Sukses clear all User")
	db.data.users = {}
break 
 case 'restart':
	if (!isCreator) return setReply(mess.only.owner)
	await setReply(`_Restarting ${botname}_`)
	await conn.sendMessage(from, {text: "_Succes_"})
	await sleep(3000)
	process.exit('reset') 
	break






//=================================================//
default:
//ketika ada yang invite/kirim link grup di chat pribadi
//Di kasih ama Alyul
if ((type === 'groupInviteMessage' || budy.includes('https://chat') || budy.includes('Buka tautan ini')) && !m.isBaileys && !isGroup && !isCreator) {
let teks = ('ngapain Ksk Kirim Ljnk Group,Jika Ingin Masukin Bot Ke Group Kaka Chat Owner Ku Terlebih Dahulu Ya Kak')      
m.reply (teks)
}
//Jika ada yg kirim pesan "Asalamualaikun" botz akan respon✓

if (budy.startsWith('=>')) {
if (!isCreator) return false
function Return(sul) {
let sat = JSON.stringify(sul, null, 2)
let bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return reply(bang)}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return false
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))}}
if (budy.startsWith('$')) {
if(!isCreator) return false
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)})}


//=================================================//
                if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
conn.copyNForward(m.chat, msgs[budy.toLowerCase()], true, {quoted: m})
}
            }
    } catch (err) {
        console.log("Eror Di Bagian ZeeBot.js"+util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
 

