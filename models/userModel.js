const mongoose = require("momngoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passworld: { type: String, required: true, minLength: 6 },
  avatar: { type: String, required: true },
  bio: { type: String },
  links: { type: String },
  joinDate: { type: String, default: Date.now },
  location: { type: String },
  work: { type: String },

  skills: { type: String },
});

module.esports = mongoose.model("user", userSchema);
