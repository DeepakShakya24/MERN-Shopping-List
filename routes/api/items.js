const router = require("express").Router();
const Item = require("../../models/Items");

router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((item) => res.json(item));
});

router.post("/", (req, res) => {
  const newItem = new Item({ name: req.body.name });
  newItem.save().then((item) => res.json(item));
});

router.delete("/:id", (req, res) => {
  id = req.params.id;
  Item.findByIdAndDelete({ _id: id })
    .then(() => res.json({ success: true }))
    .catch(() => res.json({ success: false }));
});

module.exports = router;
