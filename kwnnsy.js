'use strict';
const Discord = require("discord.js");
const fetch = require("node-fetch");
const { resolve } = require("path");
const client = global.client = new Discord.Client();
const msec = {}
const queue = new Map();
/* axios ve request modüllerinden de url'yi çekebilirsiniz. Çok fazla istek gelir ise diğer türden veri çekilmesini gösterebilirim.*/

const updownheree = {
    kwnnsyArray: [],
    mmpsh(...kwnnsyArray) {
    this.kwnnsyArray.push(...kwnnsyArray);
    },
    mfx(index) {
    return this.miafArray[index];
    },
    mxdt(nmb, letAry){
    if(!nmb || !letAry) new Error("Numara veya Array değeri girmedin")
    return delete letAry[numb];
    
    }
    };

client.object = {
    "guildID": "",
    "vanityURL" : "",
    "botToken" : ""
}

class Kwnnsy {
    constructor() {
        this.kwnnsyfURL;
        this._map = new Map();
        this.client = client;
        process.on('message', (data) => {
            if (queue.get(data.id)) {
              queue.get(data.id)(data);
              queue.delete(data.id);
            }
          });
    }
     uwKwnnsy(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

    async urlBaslat() {
        let url = client.object.vanityURL;
        let guilds = client.guilds.cache.get(client.object.guildID);
        this.kwnnsyURL = setInterval(async function()  {
            uwKwnnsy(2000);
            await this.urlUpdate(url, guilds);
        }, 1000);
    }

    get(id) {
    let inn = this._map.get(id);
    if (!inn) {
      inn = new objectsQuery(this.client, id);
      this._map.set(id, inn);
    }
    return inn;
  }

 get lcLinks () {
    return this.client.vurlKwnnsy;
  }

    urlDurdur() {
        clearInterval(this.kwnnsyURL).then(x => console.log("basarili! url artık sikilip spamlanıyor!"))
        let jj = updownheree.kwnnsyArray
        while(jj.length){
            jj.pop()
        };
    }
    
    async urlUpdate() {
        let setVU = client.object.vanityURL;
        let gi = client.guilds.cache.get(client.object.guildID);
        console.log(`Updated Guild Vanity Url => ${setVU}`);
        await fetch(`https://discord.com/api/v8/guilds/${gi}/vanity-url`, {
            "credentials": "include",
            "headers": {
                "accept": "*/*",
                "authorization": "Bot " + client.object.botToken,
                "content-type": "application/json",
            },
            "referrerPolicy": "no-referrer-when-downgrade", // Gerekli alan :/
            "body": JSON.stringify({
                "code": url
            }),
            "method": "PATCH",
        });
        let mapPromise = { id: gi, url: setVU, timeNow: Date.now(), type: "PATCH", code: "fetch" };
       await updownheree.mmpsh(mapPromise).then(x => console.log(`Veri Stoklandı! ${mapPromise}`));
    }
    async urlCheck() {
        let VU = client.object.vanityURL;
        let gi = client.guilds.cache.get(client.object.guildID);
        await fetch(`https://discord.com/api/v8/guilds/${gi}/vanity-url`, {
            "credentials": "include",
            "headers": {
                "accept": "*/*",
                "authorization": "Bot " + client.object.botToken,
                "content-type": "application/json",
            },
            "referrerPolicy": "no-referrer-when-downgrade",
            "method": "GET"
        });
        console.log(updownheree.mfx(1));
    }

}
module.exports = Kwnnsy;
