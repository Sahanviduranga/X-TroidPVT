const Asena = require('../events');

const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

const axios = require('axios');

const Config = require('../config');

Asena.addCommand({pattern: 'test', fromMe: true, deleteCommand: false,}, (async (message, match) => {

	        var r_text = new Array ();

        r_text[1] = "https://telegra.ph/file/eae11a10fe0d71b59e8ef.jpg";

var respoimage = await axios.get(`${r_text[1]}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '      *Quinn lเzค* \n     *Privert Assistant*\n\n*Hosted*  • ๛ ```Aws```\n*Version*  • ๛ ```v1.8 Global```\n*Branch*  • ๛ ```Master```\n*Dev*  • ๛ ```t.me/lasi99X```\n*About*  • ๛ ```lasiya.ml```\n*Moderator*\n```t.me/SLPlaygames_Owner```\n\n*Main Group*\nhttps://t.me/danuma01'})
    }));
