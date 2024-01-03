var express = require("express");
var app = express();
app.use(express.static('public'));
app.get('/', (req, res)=>{
    res.send(index);
})
app.listen(8080);
console.log("Listening on Port 8080");