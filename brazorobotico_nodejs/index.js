//codigos para crear la comunicacion con telegram
const TelegramBot = require('node-telegram-bot-api');
const token = '596767394:AAFI7BGWtz04y5NOuIejsk41yF5H_urh55s';
const bot = new TelegramBot(token, {
  polling: true
});
var Pedido = "";
var Cantidad = 0;

var NumeroSecreto = 564409319;
//codigos para crear la comunicacion con arduino
var SerialPort = require('serialport');
var port = new SerialPort('COM3', {
  baudRate: 9600
});
//Ejecuta un mensaje el bot, pero solo se ejecuta cuando llegue un mensaje del ID
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log("El ID del char" + chatId);
  var mensaje = msg.text;
  console.log("Mensaje "+mensaje);
  if (mensaje == "Hola") {
    bot.sendMessage(chatId, "Hola mucho gusto, que desea ordenar? Estan las opciones -Fresa -Chicle -Limon ");
  } else if (mensaje == "Adios") {
    bot.sendMessage(chatId, "Gracias por su preferencia");
  } else if (mensaje == "Limon" || mensaje == "Limón") {
    Pedido = "Limon";
    bot.sendMessage(chatId, "¿Cuantas donas de limon desea ordenar?");
  } else if (mensaje == "Chicle") {
    Pedido = "Chicle";
    bot.sendMessage(chatId, "¿Cuantas donas de chicle desea ordenar?");
  } else if (mensaje == "Fresa") {
    Pedido = "Fresa";
    bot.sendMessage(chatId, "¿Cuantas donas de fresa desea ordenar?");
  } else if (mensaje == "Ayuda") {
    bot.sendMessage(chatId, "para pedir ...");
  } else if (Pedido == "Fresa") {
    console.log("Pedido de fresa");
    if (mensaje == "1") {
      port.write('f');
      console.log("Pedido 1 fresa");
      Pedido == "";
    } else if (mensaje == "2") {
      port.write('ff');
      console.log("Pedido 2 fresa");
      Pedido == "";
    } else if (mensaje == "3") {
      port.write('fff');
      console.log("Pedido 3 fresa");
      Pedido == "";
    }
  } else if (Pedido == "Chicle") {
    console.log("Pedido de Chicle");
    if (mensaje == "1") {
      port.write('c');
      console.log("Pedido 1 Chicle");
      Pedido == "";
    } else if (mensaje == "2") {
      port.write('cc');
      console.log("Pedido 2 Chicle");
      Pedido == "";
    } else if (mensaje == "3") {
      port.write('ccc');
      console.log("Pedido 3 Chicle");
      Pedido == "";
    }
  } else if (Pedido == "Limon") {
    console.log("Pedido de Limon");
    if (mensaje == "1") {
      port.write('l');
      console.log("Pedido 1 Limon");
      Pedido == "";
    } else if (mensaje == "2") {
      port.write('ll');
      console.log("Pedido 2 Limon");
      Pedido == "";
    } else if (mensaje == "3") {
      port.write('lll');
      console.log("Pedido 3 Limon");
      Pedido == "";
    }
  } else {
    bot.sendMessage(chatId,"No entiendo tu mensaje, lo puedes repetir otra vez?");
  }
});
//Cuando recibe el mensaje el puerto usb
/*port.on('data', function(data) {
  if (data = "B") {
    bot.sendMessage(NumeroSecreto, 'Encontre azul');
  } else if (data = "G") {
    bot.sendMessage(NumeroSecreto, 'Encontre verde');
  } else if (data = "R") {
    bot.sendMessage(NumeroSecreto, 'Encontre rojo');
  } else {
    bot.sendMessage(NumeroSecreto, 'No entiendo el mensaje brup');
  }
});
port.setEncoding('utf8');
*/
//Desactivamos el codigo de nodejs
