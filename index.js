require('./setting')
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, getAggregateVotesInPollMessage, proto } = require("@whiskeysockets/baileys")
const fs = require('fs')
const pino = require('pino')
const { color } = require('./lib/color')
const chalk = require('chalk')
const path = require('path')
const axios = require('axios')
const FileType = require('file-type')
const readline = require("readline");
const yargs = require('yargs/yargs')
const moment = require('moment-timezone')
const { HttpsProxyAgent } = require("https-proxy-agent");
const agent = new HttpsProxyAgent("http://proxy:clph123@103.123.63.106:3128");
const _ = require('lodash')
const { Boom } = require('@hapi/boom')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, imageToWebp3, videoToWebp, writeExifImg, writeExifImgAV, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getRandom,getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')
const question = (text) => {
  const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};
//=================================================//
var low
try {
low = require('lowdb')
} catch (e) {
low = require('./lib/lowdb')}
//=================================================//
const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')
//=================================================//
//=================================================//
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
//=================================================//
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
/https?:\/\//.test(opts['db'] || '') ?
new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
new mongoDB(opts['db']) :
new JSONFile(`./database/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
allcommand: [],
users: {},
chats: {},
data: {},
claim: {},
hittoday: {},
database: {},
settings: {},
setting: {},
listerror: {},
blockcmd: {}, 
others: {},
sticker: {},
respon: {},
...(global.db.data || {})}
  global.db.chain = _.chain(global.db.data)}
loadDatabase()
//=================================================//
//=================================================//
async function connectToWhatsApp() {
const { state, saveCreds } = await useMultiFileAuthState(`session/${global.sessionName}`)
const conn = makeWASocket({
logger: pino({ level: "silent" }),
printQRInTerminal: !usePairingCode,
auth: state,
browser: ["Ubuntu", "Chrome", "20.0.04"],
});
if(usePairingCode && !conn.authState.creds.registered) {
        await clearConsole();
		console.log(`The process of connecting to ${nomorbot}`)
		setTimeout(async () => {
          code = await conn.requestPairingCode(nomorbot)
          code = code?.match(/.{1,4}/g)?.join("-") || code
          console.log(`Pairing code: ${code.toUpperCase()}`);
        }, 3000)

	}
async function clearConsole() {
    const isWindows = process.platform === 'win32';
    const isLinuxOrMac = process.platform === 'linux' || process.platform === 'darwin';

    return new Promise((resolve, reject) => {
        const command = isWindows ? 'cls' : (isLinuxOrMac ? 'clear' : '');
        if (command) {
            require('child_process').exec(command, (error, stdout, stderr) => {
                if (error) {
                    console.error(error);
                    reject(error);
                } else {
                    console.log(stdout);
                    resolve();
                }
            });
        } else {
            console.log('Platform not supported for clearing console.');
            resolve();
        }
    });
}
//=================================================//
conn.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}
//=================================================//
conn.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!conn.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(conn, mek, store)
require("./ZeeBot.js")(conn, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})

conn.ev.on('call', async (celled) => {
let botNumber = await conn.decodeJid(conn.user.id)
let koloi = global.anticall
if (!koloi) return
console.log(celled)
for (let kopel of celled) {
if (kopel.isGroup == false) {
if (kopel.status == "offer") {
let nomer = await conn.sendTextWithMentions(kopel.from, `*${conn.user.name}* tidak bisa menerima panggilan ${kopel.isVideo ? `video` : `suara`}. Maaf @${kopel.from.split('@')[0]} kamu akan diblokir. Silahkan hubungi Owner membuka blok !`)
conn.sendContact(kopel.from, owner.map( i => i.split("@")[0]), nomer)
await sleep(8000)
await conn.updateBlockStatus(kopel.from, "block")
}
}
}
})
// welcome nya 
conn.ev.on("groups.update", async (json) => {
console.log(json)
const res = json[0];
    try {
ppgroup = await conn.profilePictureUrl(anu.id, 'image')
  } catch {
  ppgroup = 'https://tinyurl.com/yx93l6da'
                }
			if (res.announce == true) {
				await sleep(2000)
let a = `「 Group Settings Change 」\n\nGroup has been closed by admin, Now only admin can send messages !`
conn.sendMessage(res.id, {
text: a, 
contextInfo: {
externalAdReply: {
title: `${botname}`,
body: `${ownername}`,
thumbnailUrl: ppgroup,
sourceUrl: `${yt}`,
mediaType: 1,
renderLargerThumbnail: true
                        }
                    }
                }
            );
			} else if (res.announce == false) {
				await sleep(2000)
let a = `「 Group Settings Change 」\n\nGroup has been opened by admin, Now participants can send messages !`
conn.sendMessage(res.id, {
text: a, 
contextInfo: {
externalAdReply: {
title: `${botmame}`,
body: `${ownername}`,
thumbnailUrl: ppgroup,
sourceUrl: `${syt}`,
mediaType: 1,
renderLargerThumbnail: true
                        }
                    }
                }
            );
			} else if (res.restrict == true) {
				await sleep(2000)
let a = `「 Group Settings Change 」\n\nGroup info has been restricted, Now only admin can edit group info !`
conn.sendMessage(res.id, {
text: a, 
contextInfo: {
externalAdReply: {
title: `${botname}`,
body: `${ownername}`,
thumbnailUrl: ppgroup,
sourceUrl: `${syt}`,
mediaType: 2,
renderLargerThumbnail: true
                        }
                    }
                }
            );
			} else if (res.restrict == false) {
				await sleep(2000)
let anu = `「Group Settings Change 」\n\nGroup info has been opened, Now participant can edit group info !`
conn.sendMessage(res.id, {
text: anu, 
contextInfo: {
externalAdReply: {
title: `${botname}`,
body: `${ownername}`,
thumbnailUrl: ppgroup,
sourceUrl: `${syt}`,
mediaType: 1,
renderLargerThumbnail: true
                        }
                    }
                }
            );
			} else if(!res.desc == ''){
				await sleep(2000)
let a = `「Group Settings Change 」\n\n*Group desk has been changed to*\n\n${res.desc}`
conn.sendMessage(res.id, {
text: a, 
contextInfo: {
externalAdReply: {
title: `${botname}`,
body: `${ownername}`,
thumbnailUrl: ppgroup,
sourceUrl: `${syt}`,
mediaType: 1,
renderLargerThumbnail: true }}} );
  } else { 
await sleep(2000)
let a = `「Group Settings Change 」\n\n*Group Subject has been changed to*\n\n*${res.subject}*`
conn.sendMessage(res.id, {
text: a, 
contextInfo: {
externalAdReply: {
title: `${botname}`,
body: `${ownername}`,
thumbnailUrl: ppgroup,
sourceUrl: `${syt}`,
mediaType: 1,
renderLargerThumbnail: true 
} } });
	}
        });
	 
        conn.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        try {
            let metadata = await conn.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                // Get Profile Picture User
                try {
                    ppuser = await conn.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://tinyurl.com/yx93l6da'
                }

                // Get Profile Picture Group
                try {
                    ppgroup = await conn.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://tinyurl.com/yx93l6da'
                }
               if (anu.action == 'add') {
            const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const joinMembers = metadata.participants.length
let joinnya = `
       *「 WELCOME 」*
> ≡ Hallo ${num.split("@")[0]}👋
> ≡ Group :  ${metadata.subject}
> ≡ Member ke :${joinMembers}
> ≡ Bergabung Pada : Jam ${xtime} Tagl ${xdate}
`


conn.relayMessage(anu.id,  {
      requestPaymentMessage: {
          noteMessage: {
              extendedTextMessage: {
                  text: joinnya

}  }} }, {})

} else if (anu.action == 'remove') {

const Dtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
	                const leftDate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                	
                    const leftMembers = metadata.participants.length

 let leftnya =`
       *「 GOOD BYEE 」*
> ≡ Byee ${num.split("@")[0]}👋
> ≡ Group :  ${metadata.subject}
> ≡ Member ke :${leftMembers}
> ≡ Keluar Pada : Jam ${Dtime} Tgl ${leftDate}
`


conn.relayMessage(anu.id,  {
      requestPaymentMessage: {
          noteMessage: {
              extendedTextMessage: {
                  text: leftnya

}  }} }, {})

} else if (anu.action == 'promote') {
                    let a = `Ciee @${num.split("@")[0]}, Jadi Admin Nih ekhemm ${metadata.subject} 🎉`
conn.sendMessage(anu.id, {
text: a, 
contextInfo: {
externalAdReply: {
title: `${botname}`,
body: `${ownername}`,
thumbnailUrl: ppuser,
sourceUrl: `${syt}`,
mediaType: 1,
renderLargerThumbnail: true
    }}})
} else if (anu.action == 'demote') {
let a = `Yhahahhaaaa @${num.split("@")[0]}, kena demote awokawok `
conn.sendMessage(anu.id, {
text: a, 
contextInfo: {
externalAdReply: {
title: `${botname}`,
body: `${ownername}`,
thumbnailUrl: ppuser,
sourceUrl: `${syt}`,
mediaType: 1,
renderLargerThumbnail: true
    }}})
              }
            }
        } catch (err) {
            console.log("Eror Di Bagian Welcome Group "+err)
        }
    })
//=================================================//
/*autostatus view
        conn.ev.on('messages.upsert', async chatUpdate => {
        	if (global.antiswview){
            mek = chatUpdate.messages[0]
            if (mek.key && mek.key.remoteJid === 'status@broadcast') {
            	await conn.readMessages([mek.key]) }
            }
    })*/
conn.ev.on('contacts.update', update => {
for (let contact of update) {
let id = conn.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }}})
//=================================================//
conn.getName = (jid, withoutContact  = false) => {
id = conn.decodeJid(jid)
withoutContact = conn.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = conn.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === conn.decodeJid(conn.user.id) ?
conn.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')}
//=================================================//
conn.sendContAngel = async (jid, number, name, quoted, options) => {
let njid = number.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
let vcard = `
BEGIN:VCARD
VERSION:3.0
FN:${name.replace(/\n/g, '\\n')}
TEL;type=CELL;type=VOICE;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}
END:VCARD
`
return await conn.sendMessage(jid, {
contacts: {
displayName: `${name}`,
contacts: [{ vcard }],
...options
}
},
{
quoted,
...options
})
}
conn.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await conn.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await conn.getName(i + '@s.whatsapp.net')}\nFN:${await conn.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:daffzofficial@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://whatsapp.com/channel/0029VajqqWI8fewuPYf2zT1U\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`})}
//=================================================//

conn.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })}
//=================================================//
//Kalau Mau Self Lu Buat Jadi false
conn.public = true
//=================================================//
//=================================================//
conn.ev.on('creds.update', saveCreds)
 //=================================================//
 conn.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
return buffer} 
 //=================================================//
 conn.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await conn.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })}
//=================================================//
conn.sendText = (jid, text, quoted = '', options) => conn.sendMessage(jid, { text: text, ...options }, { quoted })
//=================================================//
conn.sendTextWithMentions = async (jid, text, quoted, options = {}) => conn.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })
 //=================================================//
    conn.sendImageAsSticker = async (jid, media, m, options = {}) => {
        let { Sticker, StickerTypes } = require('wa-sticker-formatter')
        let jancok = new Sticker(media, {
            pack:"ZeeBot - MD", // The pack name
            author:"Created By Arzee",// The author name
            type: StickerTypes.FULL, // The sticker type
            categories: ['🤩', '🎉'], // The sticker category
            id: '12345', // The sticker id
            quality: 50, // The quality of the output file
            background: '#FFFFFF00' // The sticker background color (only for full stickers)
        })
        let stok = getRandom(".webp")
        let nono = await jancok.toFile(stok)
        let nah = fs.readFileSync(nono)
       await conn.sendMessage(jid, { contextInfo: { externalAdReply: { showAdAttribution: true,
      title:"Arzee",body: `© ZeeBot`,previewType:"PHOTO",thumbnail: fs.readFileSync('./media/thumb.jpg'),
      sourceUrl:syt																										
      }}, sticker: nah }, { quoted:m})   				
      return await fs.unlinkSync(stok)
      }

conn.sendImageAsStickerAV = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImgAV(buff, options)
} else {
buffer = await imageToWebp2(buff)}
await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}

conn.sendImageAsStickerAvatar = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp3(buff)}
await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}
 //=================================================//
conn.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)}
await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}
 //=================================================//
 conn.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName}
//=================================================
 conn.cMod = (jid, copy, text = '', sender = conn.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === conn.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }
// SEND FILE
conn.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
 let type = await conn.getFile(path, true)
 let { res, data: file, filename: pathFile } = type
 if (res && res.status !== 200 || file.length <= 65536) {
 try { throw { json: JSON.parse(file.toString()) } }
 catch (e) { if (e.json) throw e.json }
 }
let opt = { filename }
if (quoted) opt.quoted = quoted
if (!type) if (options.asDocument) options.asDocument = true
let mtype = '', mimetype = type.mime
if (/webp/.test(type.mime)) mtype = 'sticker'
else if (/image/.test(type.mime)) mtype = 'image'
else if (/video/.test(type.mime)) mtype = 'video'
else if (/audio/.test(type.mime)) (
//convert = await (ptt ? toPTT : toAudio)(file, type.ext),
//file = convert.data,
//pathFile = convert.filename,
mtype = 'audio',
mimetype = 'audio/ogg; codecs=opus'
 )
else mtype = 'document'
 await conn.sendMessage(jid, {
...options,
caption,
ptt,
[mtype]: { url: pathFile },
mimetype
}, {
...opt,
...options
})
return fs.unlinkSync(pathFile)
}
/*conn.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
let types = await conn.getFile(PATH, true)
let { filename, size, ext, mime, data } = types
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./lib/sticker.js')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: global.packName, author: global.authorName, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await conn.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}
conn.parseMention = async(text) => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}*/
//=================================================//
conn.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message}}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo}} : {})} : {})
await conn.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage}
//=================================================//
conn.sendReact = async (jid, emoticon, keys = {}) => {
let reactionMessage = {
react: {
text: emoticon,
key: keys
}
}
return await conn.sendMessage(jid, reactionMessage)
}
//=================================================//
conn.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
//if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
	size: await getSizeMedia(data),
...type,
data
}
}
    let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
const calender = d.toLocaleDateString("id", {
day: 'numeric',
month: 'long',
year: 'numeric'
})
conn.serializeM = (m) => smsg(conn, m, store)
conn.ev.on("connection.update", async (update) => {
const { connection, lastDisconnect } = update;
if (connection === "close") {
  let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
  if (reason === DisconnectReason.badSession) {
console.log(`Bad Session File, Please Delete Session and Scan Again`);
process.exit();
  } else if (reason === DisconnectReason.connectionClosed) {
console.log("Connection closed, reconnecting....");
connectToWhatsApp();
  } else if (reason === DisconnectReason.connectionLost) {
console.log("Connection Lost from Server, reconnecting...");
connectToWhatsApp();
  } else if (reason === DisconnectReason.connectionReplaced) {
console.log("Connection Replaced, Another New Session Opened, Please Restart Bot");
process.exit();
  } else if (reason === DisconnectReason.loggedOut) {
console.log(`Device Logged Out, Please Delete Folder Session yusril and Scan Again.`);
process.exit();
  } else if (reason === DisconnectReason.restartRequired) {
console.log("Restart Required, Restarting...");
connectToWhatsApp();
  } else if (reason === DisconnectReason.timedOut) {
console.log("Connection TimedOut, Reconnecting...");
connectToWhatsApp();
  } else {
console.log(`Unknown DisconnectReason: ${reason}|${connection}`);
connectToWhatsApp();
  }
} else if (connection === "open") {
  await clearConsole();
 
console.log(color(`ZeeBot
`,'greenyellow'))
console.log(color(` ♂️ REAL OWNER : 6285200808240`,'orange'))
console.log(color(` 🤖 ZeeBot-MD V1`,'magenta'))
conn.sendMessage(`6285200808240@s.whatsapp.net`, {
      text: `${gris}Tersambung Kembali${gris}`,
      contextInfo: {
      externalAdReply: {
      title: "ZeeBot notifikasi online ",
        body:`${wm}`,
      thumbnailUrl: "https://telegra.ph/file/f0667aebcaea930dec5f3.jpg",
      mediaType: 1,
      renderLargerThumbnail: true
      }}});
}});

global.week = week
global.calender = calender 
return conn
}
connectToWhatsApp()
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
