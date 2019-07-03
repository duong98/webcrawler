const MongoClient = require('mongodb').MongoClient;
const auth = process.env.DB_PASS ? `${process.env.DB_USER}:${process.env.DB_PASS}@` : ""
const url = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/`
MongoClient.connect(url, function(err, db) {   //here db is the client obj
    if (err) throw err;
    var dbase = db.db(process.env.DB_DB); //here
    dbase.createCollection("test", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();   //close method has also been moved to client obj
    });
});
