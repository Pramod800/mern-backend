const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
  title: { type: String, required: true },
  image: { type: Date, required: true },
  body: { type: mongoose.Types.objectId, required: true, ref: "Post" },
  date: { type: Date, default: Date.now },
  titleURL: {
    type: String,
    required: true,
  },
  //    tags: { type: mongoose.Types.objectId, ref: "Comment", defalt: null },
  likes: { type: mongoose.Types.objectId, ref: "User" },
  comments: [{ type: mongoose.Types.ObjectId, required: true, ref: "Comment" }],
  author: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
});

module.exports = mongoose.model("Comment", commentSchema);
