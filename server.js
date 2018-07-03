var express = require('express');

app.use(myParser.urlencoded({extended:false}));
app.use(myParser.json());

//QUEUE
app.post('/',function(req,res){ 
  res.sed("ola");
});
app.listen(portaPadrao);
