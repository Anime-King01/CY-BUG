//base by Lord No Name
//re-upload? recode? copy code? give credit ya :)
//YouTube: @No-Name-Tech
//Instagram: unicorn_xeon13
//Telegram: t.me/NoNameTechSupportBot
//GitHub: @Anime-King01
//WhatsApp: +2348133286181
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const { color } = require('./color')

async function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

async function nocache(module, cb = () => { }) {
    console.log(color('Module', 'blue'), color(`'${module} is up to date!'`, 'cyan'))
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

module.exports = {
    uncache,
    nocache
}