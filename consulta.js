var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
// ObjectID de algum contato existente
var _idProcurado = new ObjectID('56f3f35848797e30c11f5a54');
MongoClient.connect('mongodb://127.0.0.1:27017/contact',
	function(erro, db) {
		if(erro) throw err;
		db.collection('contatos').findOne({_id : _idProcurado},
			function(erro, contato) {
				if(erro) throw err;
				console.log(contato);
			}
			);
	}
	);