const db = require("../mongoClient");

module.exports = collection => ({
    create: document => db.client.collection(collection).insertOne(document),
    findOne: query => db.client.collection(collection).findOne(query),
    findMany: query =>
        new Promise((resolve, reject) =>
            db.client
                .collection(collection)
                .find(query)
                .toArray((err, documents) => (err ? reject(err) : resolve(documents))),
        ),
    deleteOne: query => db.client.collection(collection).findOneAndDelete(query),
    deleteMany: query => db.client.collection(collection).deleteMany(query),
    updateOne: (query, update) =>
        db.client.collection(collection).updateOne(query, { $set: update }),
    updateMany: (query, update) =>
        db.client.collection(collection).updateMany(query, { $set: update }),
});
