const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')
const version = require("@whiskeysockets/baileys/package.json").version 
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'))
const arzee = packageJson.version

const Ehztext = (text, style = 1) => {
  var abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var ehz = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
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



//—————「 SYSTEM 」—————//
global.baileysVersion = `${version}`
global.baileys = require('@whiskeysockets/baileys') // Jangan di ubah
global.usePairingCode = true // false = qrCode, true = pairingCode
global.sessionName = 'session' // Jangan di ubah
global.sp = '•⟢.' // Jangan di ubah
global.gris = '`' // Jangan di ubah
global.hiasan = `	◦  ` // Jangan di ubah
global.wlcm = [] // Jangan di ubah
global.wlcmm = [] // Jangan di ubah
global.wm = `© ZeeBot` // footer text
global.autobio = true // false = off, true = on
global.autoread = true // false = off, true = on
global.chatgpt = true // false = off, true = on
//—————「 SYSTEM 」—————//



//—————「 BOT 」—————//
global.botname = "ZeeBot MD - Bot WhatsApp" // Ini nama bot
global.nomorbot = '6289526100017' // Ganti dengan nomor bot untuk mendapatkan code pairing 
global.packName = "©"
global.authorName = "Created By ZeeBot"
global.prefa = ['','!','.',',','🐤','🗿']
global.versions = `${arzee}`
global.fotoRandom = [
  "https://telegra.ph/file/b27340b89cd2c451934d7.jpg",
  "https://telegra.ph/file/b27340b89cd2c451934d7.jpg",
  "https://telegra.ph/file/b27340b89cd2c451934d7.jpg",
  "https://telegra.ph/file/b27340b89cd2c451934d7.jpg"]

global.newsletterJid = "1203633153112760239@newsletter"
global.newsletterName = "ZeeBot MD - Bot WhatsApp"

  
//—————「 OWNER 」—————//
global.ownername = 'Arzee' // Ubah jadi nama lu
global.nomerOwner = ['6285200808240'] // Ubah pake nomor lu
global.nomerOwner2 = "6285200808240"
global.ownermail = ['arizalsetiawan5@gmail.com'] // Opsional
//—————「 SOSMED 」—————//
global.sgc = 'https://chat.whatsapp.com/CigZCYRcG2tCFP3ZvuQY1R'
global.syt = 'https://www.youtube.com/'
global.sig = 'https://www.instagram.com/arizallsetiawann'
//—————「 MESSAGE 」—————//
const mess = {
wait: Ehztext('> Sedang Di Proses Mohon Di Tunggu...'),
query: Ehztext('> Masukan query'),
search: Ehztext('> Searching...'),
pc : Ehztext('> Media Akan Dikirim Lewat PC'),
scrap: Ehztext('> *Scrapping...*'),
success: Ehztext('> Berhasil!'),
err: Ehztext('> Terjadi Kesalahan Coba Lagi Nanti!'),
limit: Ehztext('> [❕] Limit kamu sudah habis silahkan ketik .limit untuk mengecek limit'),
claimOn: Ehztext('> Kamu sudah melakukan claim sebelumnya, Harap claim lagi pada jam '),
wrongFormat: Ehztext('> Format salah, coba liat lagi di menu'),

error: {
stick: Ehztext('> bukan sticker itu:v'),
api: Ehztext('> Error api atau linkya mungkin'),
Iv: Ehztext('> Linknya error:v'),
link : Ehztext("> Link error!")
},
block:{
Bowner: `> Maaf kak command sedang dalam perbaikan coba lagi besok .`,
Bsystem: `> Command tersebut telah di block oleh system karena terjadi error`
},
only: {
prem : Ehztext('> `Maaf Kak, Tapi Fitur Ini Hanya Bisa Di Gunakan Oleh User Premium`'),
group: Ehztext('> `Fitur ini dapat digunakan di dalam group!`'),
ownerB: Ehztext('> `Fitur khusus Owner Bot!`'),
owner: Ehztext('> `Maaf Kak Ini Fitur Khusus Owner Ku!!!`'),
admin: Ehztext('> `Fitur dapat digunakan oleh admin group!`'),
Badmin: Ehztext('> `Jadikan Rangel Sebagai Admin Terlebih Dahulu!!!`')
}

}

global.mess = mess
// Apikey isi punya kalian kalo fitur download ga bisa

global.api = {
skizo: 'always ehz',
zawzein: 'zenzkey_af003aedbf', // Apikey Zahwazein
Lol: '', // PAKE APIKEY LOL HUMAN LU BIAR FITUR WORK
Botcahx: 'Admin',
ApiNobg: 'NoZHq2N9snhYX19oMYonaPYp',
Apiflash: '9b9e84dfc18746d4a19d3afe109e9ea4',

}

//—————「 LIMIT 」—————//
global.gcounti = {
'prem' : 1000,
'user' : 20
} 



//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})