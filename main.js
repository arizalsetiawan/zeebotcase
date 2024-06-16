require('./settings')
const makeWASocket = require("@whiskeysockets/baileys").default
const { uncache, nocache } = require('./lib/loader')
const { color } = require('./lib/color')
const NodeCache = require("node-cache")
const readline = require("readline")
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const { Low, JSONFile } = require('./lib/lowdb')
const { runtime } = require('./lib/myfunc')
const yargs = require('yargs/yargs')
const fs = require('fs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const axios = require('axios')
const _ = require('lodash')
const moment = require('moment-timezone')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetch, await, sleep, reSize } = require('./lib/myfunc')
const { default: ZeeBotConnect, getAggregateVotesInPollMessage, delay, PHONENUMBER_MCC, makeCacheableSignalKeyStore, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@whiskeysockets/baileys")

const store = makeInMemoryStore({
    logger: pino().child({
        level: 'silent',
        stream: 'store'
    })
})
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(new JSONFile(`src/database.json`))

global.DATABASE = global.db
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    database: {},
    chats: {},
    game: {},
    settings: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()

if (global.db) setInterval(async () => {
   if (global.db.data) await global.db.write()
}, 30 * 1000)

require('./ZeeBot.js')
nocache('../ZeeBot.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'))
require('./main.js')
nocache('../main.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'))

//------------------------------------------------------
let phoneNumber = "6289526100017"
let owner = JSON.parse(fs.readFileSync('./src/data/role/owner.json'))

const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

async function startZeeBot() {
const waktuSholat = {
  subuh: '04:28',
  dzuhur: '11:52',
  ashar: '15:10',
  maghrib: '18:04',
  isya: '19:17'
}
//=================================================//
setInterval(() => {
try {
  const saatIni = moment().tz('Asia/Jakarta').format('HH:mm')
  
  for (const [sholat, waktu] of Object.entries(waktuSholat)) {
    if (saatIni === waktu) {
    if (sholat == 'subuh') {
        let wkt = fs.readFileSync('./src/subuh.webp')
    ZeeBot.sendMessage('120363152060966582@g.us', { sticker: wkt })
    ZeeBot.sendMessage('120363152060966582@g.us', { text: `Saat ini telah memasuki waktu sholat *${sholat}* untuk wilayah Semarang dan sekitarnya` })
    ZeeBot.sendMessage('120363159376285071@g.us', { sticker: wkt })
    ZeeBot.sendMessage('120363159376285071@g.us', { text: `Saat ini telah memasuki waktu sholat *${sholat}* untuk wilayah Semarang dan sekitarnya` })
    } else if (sholat == 'dzuhur') {
        let wkt = fs.readFileSync('./src/zuhur.webp')
    ZeeBot.sendMessage('120363152060966582@g.us', { sticker: wkt })
    ZeeBot.sendMessage('120363152060966582@g.us', { text: `Saat ini telah memasuki waktu sholat *${sholat}* untuk wilayah Semarang dan sekitarnya` })
    ZeeBot.sendMessage('120363159376285071@g.us', { sticker: wkt })
    ZeeBot.sendMessage('120363159376285071@g.us', { text: `Saat ini telah memasuki waktu sholat *${sholat}* untuk wilayah Semarang dan sekitarnya` })
    } else if (sholat == 'ashar') {
        let wkt = fs.readFileSync('./src/ashar.webp')
    ZeeBot.sendMessage('120363152060966582@g.us', { sticker: wkt })
    ZeeBot.sendMessage('120363152060966582@g.us', { text: `Saat ini telah memasuki waktu sholat *${sholat}* untuk wilayah Semarang dan sekitarnya` })
    ZeeBot.sendMessage('120363159376285071@g.us', { sticker: wkt })
    ZeeBot.sendMessage('120363159376285071@g.us', { text: `Saat ini telah memasuki waktu sholat *${sholat}* untuk wilayah Semarang dan sekitarnya` })
    } else if (sholat == 'maghrib') {
        let wkt = fs.readFileSync('./src/maghrib.webp')
    ZeeBot.sendMessage('120363152060966582@g.us', { sticker: wkt })
    ZeeBot.sendMessage('120363152060966582@g.us', { text: `Saat ini telah memasuki waktu sholat *${sholat}* untuk wilayah Semarang dan sekitarnya` })
    ZeeBot.sendMessage('120363159376285071@g.us', { sticker: wkt })
    ZeeBot.sendMessage('120363159376285071@g.us', { text: `Saat ini telah memasuki waktu sholat *${sholat}* untuk wilayah Semarang dan sekitarnya` })
    } else if (sholat == 'isya') {
        let wkt = fs.readFileSync('./src/isya.webp')
    ZeeBot.sendMessage('120363152060966582@g.us', { sticker: wkt })
    ZeeBot.sendMessage('120363152060966582@g.us', { text: `Saat ini telah memasuki waktu sholat *${sholat}* untuk wilayah Semarang dan sekitarnya` })
    ZeeBot.sendMessage('120363159376285071@g.us', { sticker: wkt })
    ZeeBot.sendMessage('120363159376285071@g.us', { text: `Saat ini telah memasuki waktu sholat *${sholat}* untuk wilayah Semarang dan sekitarnya` })
    }
    }
  }
  } catch (err) {
  console.log(err)
  }
  console.log(`Cek waktu sholat aktif selama ${runtime(process.uptime())}`)
},60000)
//=================================================//
let { version, isLatest } = await fetchLatestBaileysVersion()
const {  state, saveCreds } =await useMultiFileAuthState(`./session`)
    const msgRetryCounterCache = new NodeCache() // for retry message, "waiting message"
    const ZeeBot = makeWASocket({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: !pairingCode, // popping up QR in terminal log
      mobile: useMobile, // mobile api (prone to bans)
      browser: [ "Ubuntu", "Chrome", "20.0.04" ], // for this issues https://github.com/WhiskeySockets/Baileys/issues/328
     auth: {
         creds: state.creds,
         keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
      },
      markOnlineOnConnect: true, // set false for offline
      generateHighQualityLinkPreview: true, // make high preview link
      getMessage: async (key) => {
         let jid = jidNormalizedUser(key.remoteJid)
         let msg = await store.loadMessage(jid, key.id)

         return msg?.message || ""
      },
      msgRetryCounterCache, // Resolve waiting messages
      defaultQueryTimeoutMs: undefined, // for this issues https://github.com/WhiskeySockets/Baileys/issues/276
   })
   
   store.bind(ZeeBot.ev)

    // login use pairing code
   // source code https://github.com/WhiskeySockets/Baileys/blob/master/Example/example.ts#L61
   if (pairingCode && !ZeeBot.authState.creds.registered) {
      if (useMobile) throw new Error('Cannot use pairing code with mobile api')

      let phoneNumber
      if (!!phoneNumber) {
         phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

         if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
            console.log(chalk.bgBlack(chalk.redBright("Start with country code of your WhatsApp Number, Example : +62xxx")))
            process.exit(0)
         }
      } else {
         phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Please type your WhatsApp number \nFor example: +62xxx : `)))
         phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

         // Ask again when entering the wrong number
         if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
            console.log(chalk.bgBlack(chalk.redBright("Start with country code of your WhatsApp Number, Example : +62xxx")))

            phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Please type your WhatsApp number \nFor example: +62xxx : `)))
            phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
            rl.close()
         }
      }

      setTimeout(async () => {
         let code = await ZeeBot.requestPairingCode(phoneNumber)
         code = code?.match(/.{1,4}/g)?.join("-") || code
         console.log(chalk.black(chalk.bgGreen(`Your Pairing Code : `)), chalk.black(chalk.white(code)))
      }, 3000)
   }

ZeeBot.ev.on('connection.update', async (update) => {
	const {
        
		connection,
		lastDisconnect
	} = update
try{
		if (connection === 'close') {
			let reason = new Boom(lastDisconnect?.error)?.output.statusCode
			if (reason === DisconnectReason.badSession) {
				console.log(`Bad Session File, Please Delete Session and Scan Again`);
				startZeeBot()
			} else if (reason === DisconnectReason.connectionClosed) {
				console.log("Connection closed, reconnecting....");
				startZeeBot();
			} else if (reason === DisconnectReason.connectionLost) {
				console.log("Connection Lost from Server, reconnecting...");
				startZeeBot();
			} else if (reason === DisconnectReason.connectionReplaced) {
				console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
				startZeeBot()
			} else if (reason === DisconnectReason.loggedOut) {
				console.log(`Device Logged Out, Please Delete Session and Scan Again.`);
				startZeeBot();
			} else if (reason === DisconnectReason.restartRequired) {
				console.log("Restart Required, Restarting...");
				startZeeBot();
			} else if (reason === DisconnectReason.timedOut) {
				console.log("Connection TimedOut, Reconnecting...");
				startZeeBot();
			} else ZeeBot.end(`Unknown DisconnectReason: ${reason}|${connection}`)
		}
		if (update.connection == "connecting" || update.receivedPendingNotifications == "false") {
			console.log(color(`\nConnecting...`, 'white'))
		}
		if (update.connection == "open" || update.receivedPendingNotifications == "true") {
			console.log(color(` `,'magenta'))
            console.log(color(`Connected to => ` + JSON.stringify(ZeeBot.user, null, 2), 'green'))
			await delay(1999)
       const CFonts = require('cfonts');
CFonts.say('ZEEBOT MD', {
  font: 'tiny',              // Jenis font
  align: 'left',            // Posisi teks (left, center, right)
  colors: ['green', 'white'],    // Warna teks
  background: 'transparent',  // Warna latar belakang
  letterSpacing: 1,           // Spasi antar huruf
  lineHeight: 1,              // Tinggi baris
  space: true,                // Spasi antar karakter
  maxLength: '0',             // Panjang maksimal teks (0 untuk tidak dibatasi)
});
            console.log('\n> Terkoneksi Ke Bot < [ ! ]')
            ZeeBot.sendMessage("6285200808240@s.whatsapp.net", {
					text: `「 Bot Online 」`,
				})
		}
	
} catch (err) {
	  console.log('Error in Connection.update '+err)
	  startZeeBot();
	}
})
ZeeBot.ev.on('creds.update', saveCreds)
ZeeBot.ev.on("messages.upsert",  () => { })
//------------------------------------------------------

//farewell/welcome
    ZeeBot.ev.on('group-participants.update', async (anu) => {
    	if (global.welcome){
console.log(anu)
try {
let metadata = await ZeeBot.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await ZeeBot.profilePictureUrl(num, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try {
ppgroup = await ZeeBot.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
//welcome\\
memb = metadata.participants.length
XeonWlcm = await getBuffer(ppuser)
XeonLft = await getBuffer(ppuser)
                if (anu.action == 'add') {
                const xeonbuffer = await getBuffer(ppuser)
                let xeonName = num
                const xtime = moment.tz('Asia/Jakarta').format('HH:mm:ss')
	            const xdate = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
	            const xmembers = metadata.participants.length
                xeonbody = `┌─❖
│「 𝗛𝗶 👋 」
└┬❖ 「  @${xeonName.split("@")[0]}  」
   │✑  𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 
   │✑  ${metadata.subject}
   │✑  𝗠𝗲𝗺𝗯𝗲𝗿 : 
   │✑ ${xmembers}th
   │✑  𝗝𝗼𝗶𝗻𝗲𝗱 : 
   │✑ ${xtime} ${xdate}
   └───────────────┈ ⳹`
ZeeBot.sendMessage(anu.id,
 { text: xeonbody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": XeonWlcm,
"sourceUrl": `${wagc}`}}})
                } else if (anu.action == 'remove') {
                	const xeonbuffer = await getBuffer(ppuser)
                    const xeontime = moment.tz('Asia/Jakarta').format('HH:mm:ss')
	                const xeondate = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
                	let xeonName = num
                    const xeonmembers = metadata.participants.length
                    xeonbody = `┌─❖
│「 𝗚𝗼𝗼𝗱𝗯𝘆𝗲 👋 」
└┬❖ 「 @${xeonName.split("@")[0]}  」
   │✑  𝗟𝗲𝗳𝘁 
   │✑ ${metadata.subject}
   │✑  𝗠𝗲𝗺𝗯𝗲𝗿 : 
   │✑ ${xeonmembers}th
   │✑  𝗧𝗶𝗺𝗲 : 
   │✑  ${xeontime} ${xeondate}
   └───────────────┈ ⳹`
ZeeBot.sendMessage(anu.id,
 { text: xeonbody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": XeonLft,
"sourceUrl": `${wagc}`}}})
}
}
} catch (err) {
console.log(err)
}
}
})
// Anti Call
    ZeeBot.ev.on('call', async (XeonPapa) => {
    	if (global.anticall){
    console.log(XeonPapa)
    for (let XeonFucks of XeonPapa) {
    if (XeonFucks.isGroup == false) {
    if (XeonFucks.status == "offer") {
    let XeonBlokMsg = await ZeeBot.sendTextWithMentions(XeonFucks.from, `*${ZeeBot.user.name}* can't receive ${XeonFucks.isVideo ? `video` : `voice` } call. Sorry @${XeonFucks.from.split('@')[0]} you will be blocked. If called accidentally please contact the owner to be unblocked !`)
    ZeeBot.sendContact(XeonFucks.from, owner, XeonBlokMsg)
    await sleep(8000)
    await ZeeBot.updateBlockStatus(XeonFucks.from, "block")
    }
    }
    }
    }
    })
    //autostatus view
        ZeeBot.ev.on('messages.upsert', async chatUpdate => {
        	if (global.antiswview){
            mek = chatUpdate.messages[0]
            if (mek.key && mek.key.remoteJid === 'status@broadcast') {
            	await ZeeBot.readMessages([mek.key]) }
            }
    })
    //admin event
    ZeeBot.ev.on('group-participants.update', async (anu) => {
    	if (global.adminevent){
console.log(anu)
try {
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await ZeeBot.profilePictureUrl(num, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try {
ppgroup = await ZeeBot.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
 if (anu.action == 'promote') {
const xeontime = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const xeondate = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
let xeonName = num
xeonbody = ` 𝗖𝗼𝗻𝗴𝗿𝗮𝘁𝘀🎉 @${xeonName.split("@")[0]}, you have been *promoted* to *admin* 🥳`
   ZeeBot.sendMessage(anu.id,
 { text: xeonbody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": XeonWlcm,
"sourceUrl": `${wagc}`}}})
} else if (anu.action == 'demote') {
const xeontime = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const xeondate = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
let xeonName = num
xeonbody = `𝗢𝗼𝗽𝘀‼️ @${xeonName.split("@")[0]}, you have been *demoted* from *admin* 😬`
ZeeBot.sendMessage(anu.id,
 { text: xeonbody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": XeonLft,
"sourceUrl": `${wagc}`}}})
}
}
} catch (err) {
console.log(err)
}
}
})

// detect group update
		ZeeBot.ev.on("groups.update", async (json) => {
			if (global.groupevent) {
			try {
ppgroup = await ZeeBot.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
			console.log(json)
			const res = json[0]
			if (res.announce == true) {
				await sleep(2000)
				ZeeBot.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\nGroup has been closed by admin, Now only admins can send messages !`,
				})
			} else if (res.announce == false) {
				await sleep(2000)
				ZeeBot.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\nThe group has been opened by admin, Now participants can send messages !`,
				})
			} else if (res.restrict == true) {
				await sleep(2000)
				ZeeBot.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\nGroup info has been restricted, Now only admin can edit group info !`,
				})
			} else if (res.restrict == false) {
				await sleep(2000)
				ZeeBot.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\nGroup info has been opened, Now participants can edit group info !`,
				})
			} else if(!res.desc == ''){
				await sleep(2000)
				ZeeBot.sendMessage(res.id, { 
					text: `「 Group Settings Change 」\n\n*Group description has been changed to*\n\n${res.desc}`,
				})
      } else {
				await sleep(2000)
				ZeeBot.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\n*Group name has been changed to*\n\n*${res.subject}*`,
				})
			} 
			}
		})
            
    ZeeBot.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
            mek = chatUpdate.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return
            if (!ZeeBot.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
            if (mek.key.id.startsWith('Arzee') && mek.key.id.length === 16) return
            if (mek.key.id.startsWith('BAE5')) return
            m = smsg(ZeeBot, mek, store)
            require("./ZeeBot.js")(ZeeBot, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })

   
    ZeeBot.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }

    ZeeBot.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = ZeeBot.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = {
                id,
                name: contact.notify
            }
        }
    })

    ZeeBot.getName = (jid, withoutContact = false) => {
        id = ZeeBot.decodeJid(jid)
        withoutContact = ZeeBot.withoutContact || withoutContact
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = ZeeBot.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
                id,
                name: 'WhatsApp'
            } : id === ZeeBot.decodeJid(ZeeBot.user.id) ?
            ZeeBot.user :
            (store.contacts[id] || {})
        return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }

ZeeBot.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await ZeeBot.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await ZeeBot.getName(i)}\nFN:${await ZeeBot.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
	    })
	}
	ZeeBot.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }

    ZeeBot.public = true

    ZeeBot.serializeM = (m) => smsg(ZeeBot, m, store)

    ZeeBot.sendText = (jid, text, quoted = '', options) => ZeeBot.sendMessage(jid, {
        text: text,
        ...options
    }, {
        quoted,
        ...options
    })
    ZeeBot.sendImage = async (jid, path, caption = '', quoted = '', options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await ZeeBot.sendMessage(jid, {
            image: buffer,
            caption: caption,
            ...options
        }, {
            quoted
        })
    }
    ZeeBot.sendTextWithMentions = async (jid, text, quoted, options = {}) => ZeeBot.sendMessage(jid, {
        text: text,
        mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
        ...options
    }, {
        quoted
    })
    ZeeBot.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await ZeeBot.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
.then( response => {
fs.unlinkSync(buffer)
return response
})
}

ZeeBot.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await ZeeBot.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
    ZeeBot.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }
    
    ZeeBot.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await ZeeBot.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}
    
    ZeeBot.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return ZeeBot.sendMessage(jid, { poll: { name, values, selectableCount }}) }

ZeeBot.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
            
    ZeeBot.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }

        return buffer
    }
    return ZeeBot
}

startZeeBot()

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})