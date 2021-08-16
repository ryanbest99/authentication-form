const User = require("../models/User");

exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const newUser = await User.create({ username, email, password });
    res.status(200).json({ success: true, newUser });
  } catch (err) {
    res.status(500).json({ success: false, err: err.message });
  }
};
