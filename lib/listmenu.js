const chalk = require('chalk')
const fs = require('fs')

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
  var str = text.split('');
  var output = [];
  str.map((v) => {
    if (v.toUpperCase() !== v.toLowerCase() && v === v.toUpperCase()) {
      // If the character is uppercase, push it unchanged
      output.push(v);
    } else {
      // If the character is lowercase or not a letter, find and convert it
      const find = replacer.find((x) => x.original == v.toLowerCase());
      find ? output.push(find.convert) : output.push(v);
    }
  });
  return output.join('');
};

global.menushun = (prefix) => {
return Ehztext(`Thanks For Using Our Bot`)}
global.menugrup = (prefix) => {
return Ehztext(`𝙈 𝙀 𝙉 𝙐 - 𝙂 𝙍 𝙊 𝙐 𝙋

• on (options)
• intro
• add
• kick
• promote
• demote
• delete
• linkgc
• listgc
• resetlinkgc
• sendlinkgc
• hidetag 
• tagall
• opengroup
• closegroup
• getidgc
• setppgc
• getppgc
• delppgc
• setnamegc
• setdesc
• getcontact
• cekmember`)}

global.menugame = (prefix) => {
return Ehztext(`𝙈 𝙀 𝙉 𝙐 - 𝙂 𝘼 𝙈 𝙀

• tebakkata
• tebaklirik
• tebakgambar
• tebakkimia
• tekateki
• susunkata
• siapaaku
• mtk
• suit
• topglobal
• shop
• limit
• claim`)}

global.menuai = (prefix) => {
return Ehztext(`𝙈 𝙀 𝙉 𝙐 - 𝘼 𝙄

• simi
•
•
•`)}

global.menudownload = (prefix) => {
return Ehztext(`𝙈 𝙀 𝙉 𝙐 - 𝘿 𝙊 𝙒 𝙉 𝙇 𝙊 𝘼 𝘿

• play
• ytmp3
• ytmp4
• instagram
• tiktok
• tiktokmp3
•`)}

global.menutools = (prefix) => {
return Ehztext(`𝙈 𝙀 𝙉 𝙐 - 𝙏 𝙊 𝙊 𝙇 𝙎

• tourl
• pinterest
• translate
• remini
• `)}

global.menuprimbon = (prefix) => {
return Ehztext(`𝙈 𝙀 𝙉 𝙐 - 𝙋 𝙍 𝙄 𝙈 𝘽 𝙊 𝙉

• artinama
• artimimpi
• kecocokanpasangan
• kecocokannama
• ramalancinta
• jadiannikah
• sifatusaha
• rezeki
• pekerjaan
• penyakit
• nasib
• artitarot
• fengshui
• haribaik
• harisangar
• harisial
• harinaga
• peruntungan
• weton
• karakter
• masasubur
• zodiak
• `)}

global.menusticker = (prefix) => {
return Ehztext(`𝙈 𝙀 𝙉 𝙐 - 𝙎 𝙏 𝙄 𝘾 𝙆 𝙀 𝙍

• sticker
• smeme
• qc
• cry
• kill
• hug
• pat
• lick
• kiss
• bite
• yeet
• bully
• bonk
• wink
• poke
• nom 
• slap
• smile
• wave
• awoo
• blush
• smug
• glomp
• happy 
• dance
• cringe
• cuddle
• highfive
• handhold
• emojimix
•`)}

global.menufun = (prefix) => {
return Ehztext(`𝙈 𝙀 𝙉 𝙐 - 𝙁 𝙐 𝙉

• tiktokghea
• tiktokpanrika
• tiktokbocil
• tiktokkayes
• videogalau
• cosplayangel
• videowibu
• chinese
• hijab
• indo
• japanaese
• korean
• malay
• randomboy
• randomgirl
• thai
• vietnamese
•
• cekmemek
• cekkontol
• `)}

global.menuconvert = (prefix) => {
return Ehztext(`𝙈 𝙀 𝙉 𝙐 - 𝘾 𝙊 𝙉 𝙑 𝙀 𝙍 𝙏

• toptv
• tovn
• tomp3
• togif
• tovideo
• toimg
• terbalik
• bass
• deep
• earrape
• fast
• fat
• nightcore
• reverse
• robot
• slow
• smooth
• tupai
• tts `)}

global.menuislamic = (prefix) => {
return Ehztext(`𝙈 𝙀 𝙉 𝙐 - 𝙄 𝙎 𝙇 𝘼 𝙈 𝙄 𝘾

• alquran
• alkitab ( non muslim )
• islamic
• kisahnabi
• `)}
global.menuanime = (prefix) => {
return Ehztext(`𝙈 𝙀 𝙉 𝙐 - 𝘼 𝙉 𝙄 𝙈 𝙀

• randomanime
• loli
• cosplay
• husbu
• milf
• wallml
• `)}

global.menutextpro = (prefix) => {
return Ehztext(`𝙈 𝙀 𝙉 𝙐 - 𝙏 𝙀 𝙓 𝙏  𝙋 𝙍 𝙊

• flaming1
• flaming2
• flaming3
• flaming4
• flaming5
• flaming6
• bucinsertifikat
• pacarsertifikat
• tololsertifikat`)}

global.menurandom = (prefix) => {
return Ehztext(`𝙈 𝙀 𝙉 𝙐 - 𝙍 𝘼 𝙉 𝘿 𝙊 𝙈

• jadian
• jodohku
• caridoi
• joincall
• ppcp
•
•
•
• `)}

global.menusettings = (prefix) => {
return Ehztext(`𝙈 𝙀 𝙉 𝙐 - 𝙎 𝙀 𝙏 𝙏 𝙄 𝙉 𝙂 𝙎

• delsampah
•
• clearsesi
• runtime
• autobio
• autoread
•`)}

global.menustorage = (prefix) => {
return Ehztext(`𝙈 𝙀 𝙉 𝙐 - 𝙎 𝙏 𝙊 𝙍 𝘼 𝙂 𝙀
• addvn
• delvn
• listvn
• addvideo
• delvideo
• listvideo
• addimage
• delimage
• listimage
• addsticker
• delsticker
• liststicker`)}

global.menuowner = (prefix) => {
return Ehztext(`𝙈 𝙀 𝙉 𝙐 - 𝙊 𝙒 𝙉 𝙀 𝙍

• public
• self
• addprem
• delprem
• listprem
• addcase
• listcase
• delcase
• getcase
• bcgc
• backup
• clearuser`)}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})