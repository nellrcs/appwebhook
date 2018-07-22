//SERVIDOR PRINCIPAL
var io = require('socket.io')();
io.on('connection', function(client){
	//recebe cliente 1
	client.on('luz', function (data) {
		//repassa cliente 2
		io.emit('luz_status', { status: '1' });
	});
});
io.listen(3000);
console.log("SERVER ON");
