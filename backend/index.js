const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("./mongoClient");

const router = require("./controllers/event");

const app = express();
app.use(bodyParser.json(), cors());
app.use("/api", router);

const PORT = 8001;

app.get("/", (req, res) => {
    res.send({ ok: true });
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
