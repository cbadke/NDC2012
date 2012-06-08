Cage Match: node + socket.io vs asp.net + signalr
Rob Conery, Jon Galloway, Damian Edwards

**packed house on this one. people are out for blood!**

node uses npm package module
express framework gives rob a web framework
npm install socket.io //now he's reading to socket it up
socket.io does websockets but degrades to old technology. works down to IE5

use nuget to grab signalr
signalr does similarr browser degradation stuff
you create a Hub which defines functions a client can call
	then you get a js interface on the cilent side where you can just start calling in
if you are serving signalr from desktop USE IIS EXPRESS, iis has connection limit 10 and you will max that like a boss
	- you can run multiple versions simultaneously

****look this up*****
reddis - connection distribution magic
node and signalr will both use it

node is good at delegate work out
nodeload package will help you loadtest

wcat can be used for load testing
signalr flywheel load test stats (on github)

for websocket support in ASP.net you need server 2012 and .net 4.5
BUT signalr not tied to ASP.net



*** the same but different.
*** as with all web tech. just choose the language you want to work in :P
