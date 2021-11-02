const express = require("express");
const router = express.Router();

const Users = require("../models/users");

//get all users
router.get("/", async (req, res) => {
  try {
    const users = await Users.find();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

//get one user
router.get("/:id", (req, res) => {
  res.send(`you requested ${req.params.id}`);
});

//create one user
router.post("/", async (req, res) => {
  const user = new Users({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    gender: req.body.gender,
  });

  try {
    const newUser = await user.save();
    return res.status(201).json(newUser);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

module.exports = router;
