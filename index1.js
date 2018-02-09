var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');



//var bitmap;
//to publicly open the js, css, node-modules
app.use(express.static(__dirname));
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/AvRvE.html'));
});

app.post('/ajax1', function(req,res) {

  req.on('data', function(chunk) {
    //Pure base64 string
    //console.log(JSON.parse(chunk).file);
    //var buffer = new Buffer(chunk.file, 'base64');
      // function to create file from base64 encoded string
    function base64_decode(base64str, file) {
      console.log(base64str);

      var ext = base64str.split(';')[0].match(/jpeg|png|gif/)[0];
      // strip off the data: url prefix to get just the base64-encoded bytes
      var data = base64str.replace(/^data:image\/\w+;base64,/, "");
      var buf = new Buffer(data, 'base64');
      fs.writeFile(file, buf, function(somethingInterst) {
        //
      });
    }
    base64_decode(JSON.parse(chunk).file,'out.png');

    res.send('Upload success!');

  });

});




// Part of skeleton
app.listen(8080);
