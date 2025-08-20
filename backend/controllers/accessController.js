const Access = require("../models/accessModel");

exports.getAll = async (req, res) => {
  try {
    const data = await Access.getAll();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Access.update(id, req.body);
    res.json(data);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};