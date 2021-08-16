const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please fill out username"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please fill out email"],
    trim: true,
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please fill out password"],
    trim: true,
    minlength: 6,
    select: false,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
