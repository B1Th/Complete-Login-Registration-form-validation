const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  password: {
    type: Number,
    required: true,
    unique: true,
  },
  confirmPassword: {
    type: Number,
    required: true,
    unique: true,
  },
});

// CREATE COLLECTION

const Register = new mongoose.model("Register", userSchema);

module.exports = Register;
