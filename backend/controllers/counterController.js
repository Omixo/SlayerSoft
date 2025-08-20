const Counter = require("../models/counterModel");

exports.getAll = async (req, res) => {
  try {
    const data = await Counter.getAll();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const { role } = req.params;
    const data = await Counter.getOne(role);
    res.json(data);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { role } = req.params;
    const data = await Counter.update(role, req.body);
    res.json(data);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};