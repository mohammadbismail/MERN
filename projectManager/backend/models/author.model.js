const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [2, "Must be 2 at least"],
    },
    price: {
      type: Number,
      required: [true, "Optional"],
    },
    description: {
      type: String,
      required: [true, "Description must be added"],
    },
  },
  { timestamps: true }
);
module.exports.Author = mongoose.model("Author", AuthorSchema);
