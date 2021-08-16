const User = require("../models/User");

exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = await User.create({ username, email, password });
    res.status(200).json({ success: true, newUser });
  } catch (err) {
    res.status(500).json({ success: false, err: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ success: false, error: "plz" });
  }

  try {
    const user = await User.findByCredentials(email, password);
    res.status(200).json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, err: err.message });
  }
};
