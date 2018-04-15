const MongoClient = require("mongodb").MongoClient;

const url = "mongodb+srv://piotrferens:ocPVn1CfqbhyEMbj@cluster0-awtac.mongodb.net/test";
const dbName = "events";

MongoClient.connect(url, function(err, client) {
    const db = client.db(dbName);
    db.createCollection(
        "event",
        {
            validator: {
                firstName: { $type: "string" },
                lastName: { $type: "string" },
                email: { $type: "string" },
                date: { $type: "date" },
            },
        },
        () => process.exit(),
    );
});
