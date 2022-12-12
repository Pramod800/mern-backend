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
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],

  // following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  // followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  // followedTags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],
  // bookmarks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});

module.esports = mongoose.model("User", userSchema);
