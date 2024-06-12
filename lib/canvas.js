const fs = require('fs')
const ling = require('knights-canvas')

async function welcome1(a, b, c, d, e, f) {
const imeg = await new ling.Welcome()
    .setUsername(a)
    .setGuildName(b)
    .setGuildIcon(c)
    .setMemberCount(d)
    .setAvatar(e)
    .setBackground(f)
    .toAttachment();
    
  dat = imeg.toBuffer();
  await fs.writeFileSync('./lib/tmp/welcome1.png', dat)
}

async function goodbye1(g, h, i, j, k, l) {
const image = await new ling.Goodbye()
    .setUsername(g)
    .setGuildName(h)
    .setGuildIcon(i)
    .setMemberCount(j)
    .setAvatar(k)
    .setBackground(l)
    .toAttachment();
  
  tad = image.toBuffer();
  await fs.writeFileSync('./lib/tmp/goodbye1.png', tad)
}

module.exports = { welcome1, goodbye1 }