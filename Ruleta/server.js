
var folderName = 'src';
//1er paso es: npm init
//Comienzo del express
/*Express es una aplicacion web que nos permite hacer un web server que hostee nuestro proyecto (codigos)*/
var express = require('express'); //No olvidar de instalar express con: npm install express --save
var app = express();
var server = app.listen(8080);//Mi programa estara en el sgte link -> localhost:3000
//var server = app.listen(8080,'http://192.168.100/');

app.use(express.static(folderName));

console.log("My server is running");//Se escribe que folder se va a usar



//Comienzo del socket
/*Los sockets nos permiten la comunicacion entre 2 entidades (pueden ser procesos, computadores, etc) en un servidor*/
// var socket = require('socket.io');//No olvidar de instalar express con: npm install socket.io --save
// var io = socket(server);

//Dentro de la funcion .on, necesitamos un evento y un handler que maneje al evento. En este caso, el evento es 'connection' y el handler es la funcion newConnection
// io.sockets.on('connection',newConnection);
// function newConnection(socket){
  // console.log('New Connection: '+ socket.id);//para imprimir las conexiones
// }


