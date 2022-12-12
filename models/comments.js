const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  body: { type: String, reequired: true },
  date: { type: Date, default: Date.now },
  parentPost: { type: mongoose.Types.objectId, required: true, ref: "Post" },
  parentId: { type: mongoose.Types.objectId, ref: "Comment", defalt: null },
  author: { type: mongoose.Types.objectId, ref: "User" },
  likes: { type: mongoose.Types.objectId, ref: "User" },
});

module.exports = mongoose.model("Comment", commentSchema);
