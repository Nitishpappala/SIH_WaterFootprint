const express = require("express");
const router = express.Router();

const item = require("../model/item");

router.get("/", (req, res) => {
  item
    .find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json({ noBooksFound: "No items found" }));
});

router.get("/:id", (req, res) => {
  item
    .findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => res.status(404).json({ noitemfound: "No item found" }));
});

// New route to fetch an item by its name
router.get("/name/:name", (req, res) => {
  item
    .findOne({ name: req.params.name })
    .then((item) => {
      if (item) {
        res.json(item);
      } else {
        res.status(404).json({ noitemfound: "No item found with that name" });
      }
    })
    .catch((err) =>
      res
        .status(400)
        .json({ error: "Error fetching item by name", details: err })
    );
});

// New route to fetch multiple items by their type
router.get("/type/:type", (req, res) => {
  item
    .find({ type: req.params.type })
    .then((items) => {
      if (items.length > 0) {
        res.json(items);
      } else {
        res.status(404).json({ noitemsfound: "No items found with that type" });
      }
    })
    .catch((err) =>
      res
        .status(400)
        .json({ error: "Error fetching items by type", details: err })
    );
});

router.post("/", (req, res) => {
  if (Array.isArray(req.body)) {
    item
      .insertMany(req.body)
      .then((items) => res.json({ msg: "Items added successfully", items }))
      .catch((err) =>
        res
          .status(400)
          .json({ error: "Unable to add these items", details: err })
      );
  } else {
    item
      .create(req.body)
      .then((item) => res.json({ msg: "Item added successfully", item }))
      .catch((err) =>
        res.status(400).json({ error: "Unable to add this item", details: err })
      );
  }
});

router.put("/:id", (req, res) => {
  item
    .findByIdAndUpdate(req.params.id, req.body, { new: true }) // Add { new: true } to return the updated document
    .then((item) => res.json({ msg: "Updated successfully", item }))
    .catch((err) =>
      res
        .status(400)
        .json({ error: "Unable to update the Database", details: err })
    );
});

router.delete("/:id", (req, res) => {
  item
    .findByIdAndDelete(req.params.id)
    .then((item) => res.json({ msg: "Item entry deleted successfully", item }))
    .catch((err) =>
      res.status(404).json({ error: "No such item", details: err })
    );
});

// get items on search
router.get("/search", (req, res) => {
  const query = req.query.query;
  console.log("Search query:", query);
  if (!query) {
    return res.status(400).json({ error: "Query parameter is missing" });
  }
  item
    .find({ name: new RegExp(query, "i") })
    .then((items) => {
      console.log("Found items:", items);
      if (items.length > 0) {
        res.json(items);
      } else {
        res.status(404).json({ noitemsfound: "No items found matching" });
      }
    })
    .catch((err) =>
      res.status(400).json({ error: "Error fetching items", details: err })
    );
});

module.exports = router;
