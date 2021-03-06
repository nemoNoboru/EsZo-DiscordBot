// Import the discord.js module
const Discord = require('discord.js');
// Import the checker functionality
const ApplyChecker = require('./checker.js');
// Import covfefify
const covfefify = require('./covfefify.js');

// Instancia de cliente Discord
const client = new Discord.Client();

// Token para la conexion y asociacion al bot
const token = 'MzE3NDIxMTMzMTMxNjc3Njk2.DA4cng.u4j9D0jeCgVf5y3G9M4xF3YQqyg';

// Declaro constantes para las regex de interpretación de mensajes
// La i final implica case insensitiveness
const regexSupp = /(support)|(supp)/i
const regexDuplicates = /repetid[oa]/i
const regexRein = /rein/i
const regexPing = /(ping)|(lag)/i
const regexSaludos = /(Hola a todos)|(gente)|(buenas)|(señores)/i
const regexCarga = /(carga)|(punto)|(payload)|(proteg)/i
const regexPeplo = /(pero)|(orisa)|(support)/i
const regexAsco = /(asco)|(c[aá]ncer)|(sida)|(zanker)|(asquer)|(pharah?)|(yasuo)|(hanzo)/i
const regexRate = /[0-9]+\/[0-9]+/
const regexPansal1 = /(hola)|(buenas)|(gente)/i
const regexPansal2 = /(Que tal)/
const regexKek = /kek/i
const regexPuton = /(que gracioso)|(hahaha)|(puto tonto)/i
const regexChancla = /(chancla)|(chancla mortal)|(chancla mortal nid jilin)/i
const regexNegrito = /(felipe)|(negritoriko)/i
const regexBamboo = /(bambú)|(bambu)|(bamboo)/i


var http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Get response\n');
}).listen(process.env.PORT || 5000)

setInterval(function() {
    http.get("http://eszobot.herokuapp.com");
    console.log("Sent keepalive request");
}, 200000); // every 5 minutes (300000)

//Cuando el bot hace sus cosas pasa esto:
client.on('ready', () => {
  console.log("Doing some gud' ol' barrel rolls...");
});

// Listeners para mensajes
client.on('message', message => {
  ApplyChecker(message)
  // Si el mensaje no lo escribe el bot
  if( message.author.username != 'EstrellaZorro'){
    // Listener para walker
    if (message.author.username === 'DarkWalker') {
      message.reply("¡¡¡¡¡¡¡¡¡FELIZ CUMPLEAÑOS WALKER!!!1!UNO!");
    }
    // Respuesta a la palabra support
    if (regexSupp.test(message.content)) {
      message.channel.send('PROTEGED AL SUPPORT JODER')
    }
    // Respuesta a la queja de repetidas
    if (regexDuplicates.test(message.content)) {
      message.channel.send('',{ file: 'https://cdn.discordapp.com/attachments/268398719802540032/305840663516282880/C-DBN6mW0AEtgI4.png'})
    }
    // Respuesta a reinhartd
    if (regexRein.test(message.content)) {
      message.channel.send('RECTANGLE')
    }
    // Respuesta a queja de ping
    if (regexPing.test(message.content)) {
      message.channel.send('CONEXIÓN DE MIERDA')
    }
    // Respuesta a un saludo al servidor
    if (regexSaludos.test(message.content)) {
      message.reply('HOLA MAMÁ')
    }
    // Respuesta a aza y las cargas
    if (regexCarga.test(message.content) && message.author.username == 'blackjack15926811'){
      message.reply('QUE TOQUES LA PUTA CARGA AZA JODER')
    }
    // Respuesta a peplo y las orisas
    if (regexPeplo.test(message.content) && message.author.username == 'Peplo'){
      message.reply('PE... PE... PERO ORISA, PEPLO!')
    }
    // Respuesta a halpmepls
    if (message.content === '!halpmepls'){
      message.channel.send('ESTE TÍO DICE QUE NECESITA AYUDA PUTO PRINGAO\'. \nSEGURO QUE ES UN LELPLAYER. \nEH TÍOS, QUE NECESITA AYUDA!!!!1!uno!. PERO MIRA QUÉ PRINGAO\'...')
    }
    // Respuesta al asco
    if (regexAsco.test(message.content)){
      message.channel.send('',{ file: 'https://cdn.discordapp.com/attachments/268398719802540032/321729711950528513/unknown.png'})
    }
    if (regexRate.test(message.content)){
      message.channel.send('',{ file: 'http://i.imgur.com/TGGnTq1.jpg'})
    }
	 // Respuestas a los saludos de Panda
	 if (regexPansal1.test(message.content) && message.author.username == 'Sr Panda'){
      message.reply('HOLA PAPÁ')
    }
	if (regexPansal2.test(message.content) && message.author.username == 'Sr Panda'){
      message.reply('CON LAG, COMO MAMÁ')
    }
	if (regexBamboo.test(message.content) && message.author.username == 'Sr Panda'){
      message.reply('DALES CON EL BAMBÚ, ACABA CON ELLOS PAPÁ')
    }
	//Respuesta al KEK
	if (regexKek.test(message.content) && message.author.username == 'Shoorema'){
      message.channel.send('',{ file: 'https://cdn.discordapp.com/attachments/319091887304605697/325810913686978561/kek.jpeg'})
    }
	// Puto tonto
	if (regexPuton.test(message.content)){
      message.channel.send('',{ file: 'https://cdn.discordapp.com/attachments/268398719802540032/322009184637812736/unknown.png'})
    }
	// Respuesta a Felipe
	if (regexNegrito.test(message.content)) {
      message.reply('El señor Negritoriko vende CHORIZO y SULFATO')
    }
	// Respuesta a la chancla
	if (regexChancla.test(message.content)) {
      message.channel.send('',{ file: 'https://cdn.discordapp.com/attachments/268398719802540032/325618149032722432/IMG_20170617_144948.JPG'})
    }

  // nueva sintaxis proporcionada por el checker y el ApplyChecker
  message.command('/covfefe', (message) => {
    message.reply(covfefify(message.content))
  })

  message.matchs(/(jiros)/, (message) => {
    message.reply('ES TIEMPO DE JIROS DE LOS CASUALS')
  })

  message.checks(message.content.length > 20, (message)=>{
    message.reply('muy largo; no leo')
  })


  }
});

// Listener para cuando se viene alguien nuevo
client.on('guildMemberAdd', member => {
  // El mensaje se manda al canal por defecto (boop)
  member.guild.defaultChannel.send(`Bienvenido a nuestro servidor, ${member}.\nEs un lugar bonito y lleno de personas amables.\nQuédate si no maineas ni Bastion, ni Yasuo ni Symetra.\nSi necesitas ayuda escribe '!halpmepls'`);
})

// Listener para cuando alguien se pira o lo echamos (Aunque eso es poco probable)
client.on('guildMemberRemove', member => {
  // El mensaje se manda al canal por defecto (boop)
  member.guild.defaultChannel.send(`Nuestro querido miembro, ${member}, se ha ido para siempre.\nSe ruega una oración por su alma y la asistencia a la conducción`);
  if(member.roles.length > 0){
    member.guild.defaultChannel.send('Sus roles eran:')
    // WIP--------------  TODO TODO
    for(var x in member.roles){
      member.guild.defaultChannel.send(member.roles[x][role].name)
    }
    member.guild.defaultChannel.send('Le echaremos de menos. O no.')
    // WIP--------------  TODO TODO
  }
})

client.login(token);
