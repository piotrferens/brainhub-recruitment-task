const MongoClient = require("mongodb").MongoClient;

const url =
  "mongodb+srv://piotrferens:ocPVn1CfqbhyEMbj@cluster0-awtac.mongodb.net/test";
const dbName = "events";

const db = {};

MongoClient.connect(url, function(err, client) {
  db.client = client.db(dbName);
});

module.exports = db;
