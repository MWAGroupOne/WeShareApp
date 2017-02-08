var express = require('express');
var router = express.Router();

var mongo = require('mongoskin');
var db = mongo.db('mongodb://127.0.0.1:27017/weshare');

/*
console.log("========================");
var path = require('path');
var lineReader = require('line-reader');
lineReader.eachLine(path.join(__dirname, 'zips.json'), function(line, last) {
  console.log(line);
  //saveData2(line);
  // do whatever you want with line...
  console.log("========================reading");
  if(last){
    // or check if it's the last one
    console.log("========================last");
  }
});
*/

/* GET states page. */
router.get('/', function (req, res, next) {
   saveData()
    .then(data => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET", "POST", "PUT", "DELETE");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      res.header("Access-Control-Allow-Headers", "Content-Type");
      res.send(data);
    })
    .catch(e => console.log("Error:" + e));
  ;
});

function func() {
  let res;
  getData()
    .then(data => this.rs = data)
    .catch(e => console.log("Error: " + e));
  return res;
}

function getData() {
    var data = new Array();
   return new Promise((resolve, reject) =>{
    db.collection('items').find({}).toArray(function (err, result) {
        if(err) reject(err);
        else resolve(JSON.stringify(result));
    });
   });
}

function saveData2(data) {
    var data = new Array();
   return new Promise((resolve, reject) =>{
    db.collection('locations').insert(data, function (err, result) {
        if(err) reject(err);
        else resolve(JSON.stringify(result));
    });
   });
}

function saveData(data) {
    var data = new Array();
   return new Promise((resolve, reject) =>{
    db.collection('items').insert(genData(), function (err, result) {
        if(err) reject(err);
        else resolve(JSON.stringify(result));
    });
   });
}

function genData(){
  return {"name":"Phone", "description":"Just for just", "details":"test data", "contacts":{"email":"bxd", "phone":"64383938489"}, "category":"offered", "location":{"state":"IA", "city":"Ottumwa", "geo":{"lon":"32.32", "lat": 0.33484}},  "image":"", "status":"available"};
}



module.exports = router;


    //db.items.insert({"name":"Bike", "description":"Just for just", "details":"test data", "contacts":{"email":"bxd", "phone":"64383938489"}, "category":"offered", "location":{"state":"IA", "city":"ACKWORTH", "geo":{"lon":"32.32", "lat": 0.33484}},  "image":"", "status":"available"})
