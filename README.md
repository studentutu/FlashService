# FlashViewer

The goal is to create a localhost service to display the Flash games/animations


1) First assure you have a node&npm
2) Secnods open console/terminal: npm install
3) Then: npm start
   Now server is running on localhost:8080
   or 127.0.0.0:8080
4) open in your browser next url: localhost:8080 or 127.0.0.0:8080
	You can change the port inside index1.js.
	Find the express tutorial to change it.


To change the Game to your Castom one:

1) Upload .swf into AvRve_files folder
2) Edit the AvRvE.html document :

  - change stringFlashSWF
  - in the <body> -> <object type="application/x-shockwave-flash" id="flashStuff" data="AvRvE_files/handless-millionaire.swf" width="800" height="600"> 
   Change handless-millionaire.swf to your game! 
