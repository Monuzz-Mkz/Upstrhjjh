let { webp2mp4 } = require('../lib/webp2mp4')

let handler = async (m, { conn, usedPrefix, command }) => {
  try{if (!m.quoted) throw `Reply sticker with command *${usedPrefix + command}*`
  let mime = m.quoted.mimetype || ''
  if (!/webp/.test(mime)) throw `Reply sticker with command *${usedPrefix + command}*`
  if (/to(mp4|vid(eo)?)$/i.test(command)) {
  let media = await m.quoted.download()
  let out = Buffer.alloc(0)
  if (/webp/.test(mime)) {
    out = await webp2mp4(media)
  }
  conn.sendMedia(m.chat, out, m, { caption: wm})
    }
  if (/togif$/i.test(command)) {
  let media = await m.quoted.download()
  let out = Buffer.alloc(0)
  if (/webp/.test(mime)) {
    out = await webp2mp4(media)
  }
  conn.sendMedia(m.chat, out, m, { gifPlayback: true, caption: wm})
  }
}catch(e){
  conn.reply(m.chat,`${e}`)
  conn.reply('120363022211098165@g.us',`๐จ๐ต๐ผ๐ต! ๐ฎ๐ป ๐ฒ๐ฟ๐ฟ๐ผ๐ฟ ๐ข๐ฐ๐ฐ๐๐ฟ๐ฒ๐ฑ 

๐๐ฟ๐ฟ๐ผ๐ฟ : ${util.format(e)}

  ๐๐ผ๐บ๐บ๐ฎ๐ป๐ฑ : ${usedPrefix+command}
  
  ๐ฃ๐ผ๐๐๐ถ๐ฏ๐น๐ฒ ๐ฅ๐ฒ๐ฎ๐๐ผ๐ป๐ :
     โข ๐๐ป๐๐ฎ๐น๐ถ๐ฑ ๐จ๐๐ฎ๐ด๐ฒ ๐ข๐ณ ๐๐ผ๐บ๐บ๐ฎ๐ป๐ฑ
     โข ๐ฆ๐ฒ๐ฟ๐๐ฒ๐ฟ ๐๐ฟ๐ฟ๐ผ๐ฟ
     โข ๐ฅ๐๐ป๐๐ถ๐บ๐ฒ ๐๐ฟ๐ฟ๐ผ๐ฟ๐
     โข ๐๐ฟ๐ฟ๐ผ๐ฟ ๐ฎ๐ ๐ฑ๐ฒ๐๐ฒ๐น๐ผ๐ฝ๐ฒ๐ฟ๐ ๐๐ป๐ฑ
     โข ๐๐ฎ๐๐ฎ ๐ก๐ฒ๐๐๐ผ๐ฟ๐ธ ๐๐๐๐๐ฒ๐ `, null, {})
}}
handler.help = ['แด ษชแดแดแด', 'ษขษชา'].map(v=> v + " <สแดแดสส>")
handler.tags = ['tools']
handler.command = /^(mp4|gif|vid(eo)?)$/i

module.exports = handler
