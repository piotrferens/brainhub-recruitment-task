const ObjectId = require("mongodb").ObjectId;

const { validate, checkValidation } = require("./validate");

const EventModel = require("../../models/Event");
const router = require("express").Router();

router.get("/event", async (req, res) => {
    const events = await EventModel.findMany({});
    res.send(events);
});

router.post("/event", validate, checkValidation, async (req, res, next) => {
    const { data } = req.body;
    const created = await EventModel.create({ ...data, date: new Date(data.date) });
    res.send(created.ops[0]);
});

router.put("/event/:id", (req, res) => {});

router.delete("/event/:id", async (req, res) => {
    try {
        const deleted = await EventModel.deleteOne({ _id: ObjectId(req.params.id) });
        res.send(deleted.value);
    } catch (err) {
        res.send({ error: "Wrong id" });
    }
});

module.exports = router;
