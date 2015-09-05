var apiserver = require('ws-rest-api');
var r = require('rethinkdb');

var TABLE_NAME =  "sensor_data";
var DB_NAME = "location_tracker_db";
var connection;

apiserver.Read(function(req, socket){
	var data = req.payload.data.data;
	// test the submitted data against the trained data-set
});

/**
 *  Collect data from the client
 */
apiserver.Create(function(req, socket){
	stuff.push(req.payload.data.data);
	// insert the data into the database
	r.db(DB_NAME).table(TABLE_NAME)
	.insert(req.payload.data.data)
	.run(connection, function(err, res)
	{
	  if(err) throw err;
	  console.log(res);
	});
	apiserver.success(req, socket, 'success');
});

apiserver.listen(3001, sessions, function(){
	console.log('init finished');
	r.connect({ host: 'localhost', port: 28015 }, function(err, conn) {
	  	if(err) throw err;
  		console.log('Connected to database');
		connection = conn;
  	});
});
