/*
  Ola Usuário
  
  nome: bot
  dono: lacoste
  progamador: Otoniel
  criado dia: 28/07/2021
  terminado: 00/0/0000
  
*/
//tratamento de erros
try {
  
//conexão ao whatsapp web
const {
	WAConnection,
	MessageType,
	Presence,
	Mimetype, 
	MessageOptions
} = require('@adiwajshing/baileys');

//online 24hora
const express = require("express")
const app = express()

const fs = require('fs');

const conn = new WAConnection();
conn.loadAuthInfo('./auth_info.json');
conn.connect();


var p = "*" //prefix
const bot = conn;

const mess = {
	erro: "calma manokk 🥺",
	carregando: "⌛ Espere Um Momento ⌛",
	espere: "espera arrombado😂😠",
	sucesso: "boa bro deu certo 🥰"
}

//vcard do dono
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:Lacoste\n'
            + 'ORG:YM JACARE BOT;\n'
            + 'TEL;type=CELL;type=VOICE;waid=554284424224:+42 8442-4224\n' 
            + 'END:VCARD'

//vcard do criador
const vcardc = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:Otoniel\n'
            + 'ORG:YM JACARE BOT;\n'
            + 'TEL;type=CELL;type=VOICE;waid=559193609020:+91 9360-9020\n' 
            + 'END:VCARD'


bot.on("open", () => {
	
app.get('/', (request,response) => {
  bot.updatePresence(Presence.available)
  response.sendStatus(200);
});

app.listen(process.env.PORT)

	console.log(` 
       	bot online 🟢 
	`)
	
	
})


var hora = new Date().getHours()
var minuto = new Date().getMinutes()
var segundo = new Date().getSeconds()

var tempo = `${hora}:${minuto}:${segundo}`

var dia = new Date().getDay()
var mes = new Date().getMonth() +1 
var ano = new Date().getFullYear()

if(dia < 9) { dia = "0"+dia}
if(mes < 9) { mes = "0"+mes }
if(ano < 9) { ano = "0"+ano }

const calendario = `${dia}:${mes}:${ano}`

//bateria
bot.on(`CB:action,,battery`, json => {
    const batteryLevelStr = json[2][0][1].value
    const batterylevel = parseInt (batteryLevelStr)
    console.log ("Bateria: " + batterylevel + "%")
    
    
})


//arquivos da lib
var MSG = require("./lib/textos.js")
var TRAVAZAP = require("./lib/travazap.js")

//menu
var MENU = require("./lib/menu.js")


//comandos
bot.on("chat-update", chatUpdate => {
        if (chatUpdate.messages && chatUpdate.count) {
            const dados = chatUpdate.messages.all()[0]
            const user = dados.key.remoteJid
            const comando = dados.message.conversation
 
 const userNumber = chatUpdate.jid.slice(0,12)
 
const botPhone = bot.user.phone.device_manufacturer.toUpperCase()

const botPhoneAndroid = bot.user.phone.os_version.toUpperCase()

const botPhoneModel = bot.user.phone.device_model.toUpperCase()



 if(comando.startsWith(p)) {
     switch(comando) {
       case `${p}menu`:
        bot.sendMessage(user , MENU.menu(p,tempo,calendario) , MessageType.text)
        break;
        case `${p}novidades`:
        bot.sendMessage(user, `
              
        Oque A De Novo v1.1?
                   
        •o bot foi reprogamado
        •comando novidades
        •versao 1.0 a versão 1.1
        •novos comandos
     
         `, MessageType.text)
     		break;
        case `${p}info`:
        bot.sendMessage(user , `
         
        dono: lacoste
        progamado por: otoniel
        criado: 28/07/2021
   
        versão: 1.0 = 28/07/2021
        versao: 1.1 = 29/07/2021
        versão: 1.2 = 31/07/2021
     
       bot
       celular: ${botPhone}
       android: ${botPhoneAndroid}
       modelo: ${botPhoneModel}
       nome: ${bot.user.name}
          
         
         ` , MessageType.text)
        break;
        case `${p}dono`:
        bot.sendMessage(user,"Meu Dono",MessageType.text)
            
        bot.sendMessage(user, {displayname: "Lacoste", vcard: vcard}, MessageType.contact)
        break;
        case `${p}criador`:
        bot.sendMessage(user,"Meu Criador",MessageType.text)
        bot.sendMessage(user, {displayname: "Otoniel", vcard: vcardc}, MessageType.contact)
         break;
         case `${p}random`:
         const x = Math.floor(Math.random() * 100000)
         bot.sendMessage(user,`numero aleatório gerado: ${x}`,MessageType.text)
         break;
         case `${p}hora`:
         	bot.sendMessage(user,`Agora São: ${tempo}`)
         break;
         case `${p}data`:
         const d = Date()
         bot.sendMessage(user,d,MessageType.text)
         break;
          case `${p}meme`:
      
     bot.sendMessage(user,mess.carregando,MessageType.text) 
          	
        setTimeout(function() {
         bot.sendMessage(
         	user, 
        { url: 'res/video/meme.mp4' }, 
          MessageType.video, 
        { mimetype: Mimetype.video, caption: "🤣" }
        )
      },5000)
        	break;
        case `${p}meme_img`:
      
        break;
         case `${p}colaborador`:
         	bot.sendMessage(user,"Colaboradores:",MessageType.text)
            
        bot.sendMessage(user, {displayname: "Lacoste", vcard: vcard}, MessageType.contact)
        
        bot.sendMessage(user,"Valeu!😎",MessageType.text)
        break;
         case `${p}destrava`:
         	bot.sendMessage(user,TRAVAZAP.DESTRAVA(),MessageType.text)
         	break;
         	case `${p}imune`:
         		bot.sendMessage(user,TRAVAZAP.IMUNE(),MessageType.text)
          break;
          case `${p}db`:
          	bot.sendMessage(user,TRAVAZAP.DB(),MessageType.text)
          break;
          case `${p}gado`:
     	var percentGado = Math.floor(Math.random() * 100)
       bot.sendMessage(user,mess.carregando,MessageType.text) 
          	
        setTimeout(function() {
         if(percentGado < 25) {
         	bot.sendMessage(
         	user, 
        { url: 'res/img/gado.jpeg' }, 
          MessageType.image, 
        { mimetype: Mimetype.jpeg, caption: `Você e ${percentGado}% Gado Ok ` }
        )      
         } else if(percentGado > 25 && percentGado < 50) {
         	bot.sendMessage(
         	user, 
        { url: 'res/img/gado.jpeg' }, 
          MessageType.image, 
        { mimetype: Mimetype.jpeg, caption: `Você e ${percentGado}% Gado Passa O Zap😅` }
        )      
         } else if(percentGado > 50 && percentGado < 75) {
         	bot.sendMessage(
         	user, 
        { url: 'res/img/gado.jpeg' }, 
          MessageType.image, 
        { mimetype: Mimetype.jpeg, caption: `Você e ${percentGado}% Gado Esse Ai Pede O Zap🤣` }
        )      
         } else if(percentGado > 75) {
         	bot.sendMessage(
         	user, 
        { url: 'res/img/gado.jpeg' }, 
          MessageType.image, 
        { mimetype: Mimetype.jpeg, caption: `Você e ${percentGado}% Gado Rei Do Gado🐂👑` }
        )      
         }
        },3000)
          break;
          case `${p}musica0`:
          	
          bot.sendMessage(user,mess.carregando,MessageType.text)	
        
        setTimeout(function() {
        	bot.sendMessage(
    user, 
    { url: "res/audio/xandao.mp3" },  MessageType.audio, 
    { mimetype: Mimetype.mp4Audio } 
)
        },3000)
          	break;
          case `${p}musica1`:
          	bot.sendMessage(user,mess.carregando,MessageType.text)	
        
        setTimeout(function() {
        	bot.sendMessage(
    user, 
    { url: "res/audio/funk.mp3" },  MessageType.audio, 
    { mimetype: Mimetype.mp4Audio } 
)
        },3000)
       break;
       case `${p}hetero`:
       	 bot.sendMessage(user,mess.carregando,messageType.text)
       	 
       	 var percentHetero = Math.floor(Math.random() * 100)
       	 
       	 setTimeout(function() {
       	   bot.sendMessage(
         	user, 
        { url: 'res/img/hetero.jpeg' }, 
          MessageType.image, 
        { mimetype: Mimetype.jpeg, caption: `Você e ${percentHetero}% hetero` }
        )      
       	 },3000)
       	break;
       case `${p}feio`:
       	bot.sendMessage(user,mess.carregando,messageType.text)
       	 
       	 var percentFeio = Math.floor(Math.random() * 100)
       	 
       	 setTimeout(function() {
       	   bot.sendMessage(
         	user, 
        { url: 'res/img/feio.jpeg' }, 
          MessageType.image, 
        { mimetype: Mimetype.jpeg, caption: `Você e ${percentFeio}% feio` }
        )      
       	 },3000)
       	break;
       	
  }
        	
   var resposta = comando
   
   switch(resposta) {
   case `${p}bot lixo`:
   bot.sendMessage(user,"vtnc pobre nojento", MessageType.text)
   		break;
   	case `${p}bot feio`:
   	bot.sendMessage(user,"você é pior lek😠", MessageType.text) 
      break;
    case `${p}myst`:
    bot.sendMessage(user, "myst estrelinha magaga🥰", MessageType.text)
      break;
    case `${p}ruivinha`:
    	 bot.sendMessage(user,"lacoste cadelinha da ruivinha♥️",MessageType.text)
    	 
    break; 
     case `${p}macaco`:
     	bot.sendMessage(user,"🐒",MessageType.text)
     break;
     case `${p}frases`:
     	
     	bot.sendMessage(user,mess.carregando,MessageType.text)
     
     setTimeout(function () {
      bot.sendMessage(user,MSG.FRASES(),MessageType.text)
   },3000)
       break;
       case `${p}trava-lingua`:
       	bot.sendMessage(user,mess.carregando,MessageType.text)
       	
       	setTimeout(function() {
       		bot.sendMessage(user,MSG.TRAVALINGUA(),MessageType.text)
       	},4000)
       break;
   case `${p}bot lindo`:
     	bot.sendMessage(user,"você amor ♥️",MessageType.text)
     break;
    case `${p}oi bot`:
    	bot.sendMessage(user,"oii humano🥰" ,MessageType.text)
    	break;
  }
  
  
       if(comando.startsWith(p)) {
        console.log(`Comando: ${comando} As: ${tempo} Tamanho: ${comando.length} De: ${userNumber}`)	
       } else {
      	console.log(`Mensagem: ${comando} As: ${tempo} Tamanho: ${comando.length} De: ${userNumber}`)	
       }
       
  var g = chatUpdate.jid.substr(13,15)     

       }
    }
})


} catch(erro) {
  console.log(`Erro: ${erro} Linha: ${erro.stack.slice(77,-1)}`)
}