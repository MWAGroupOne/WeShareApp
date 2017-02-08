var MongoClient = require('mongodb').MongoClient;

var mongo = require('mongoskin');

var msg = "Hello We Share";
var db = mongo.db('mongodb://127.0.0.1:27017/weshare');



function getData() {
    var data = new Array();
   return new Promise((resolve, reject) =>{
    db.collection('items').find({}).toArray(function (err, result) {
        console.log(result[0].name);
        this.data = result;
        if(err) reject(err);
        else resolve("Hello");
    });
   });
}
// Use connect method to connect to the Server
/*  mongoClient.connect(url, (err, db) => {
      if (err) {
          reject(err);
      } else {
          resolve(db);
      }
  });
});


db.collection('items').find({}).toArray(function(err, result) {
console.log('Band members of Road Crew');
console.log(result[0].name);
data = result;
return result;
});
console.log("========xxxx============="+data);
return "data";

/*
db.collection('items').find({}, function (err, result) {
  console.log("====================="+result);
  if (err) console.log("EEEEEE1: " + err);
  else {
      result.each(function (err, band) {
          //console.log(band);
         data.push(band);
          console.log("========yyy===========");
      });
      console.log("========xxxx============="+data);
return data;
  }

});
 
 
}
*/


function getStates() {
    let dataa = "defualt";
    MongoClient.connect('mongodb://127.0.0.1:27017/weshare', function (err, db) {
        console.log("=======");
        if (err) {
            console.log("EEEEEE1: " + err);
            throw err;
        }
        else {
            console.log("======4646787444==");
            db.collection('items').findOne({}, function (err, doc) {
                console.log("======000000000000==");
                if (err) {
                    console.log("EEEEEE2: " + err);
                    throw err;
                }
                else {
                    console.log("======1111111==");
                    console.dir(doc);
                    // dataa = doc;
                    db.close();
                }
            });
        }
    });
    return dataa;
}

module.exports = getData;

