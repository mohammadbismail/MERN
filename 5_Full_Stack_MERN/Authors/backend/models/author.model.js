const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name Is required"],
      minlength: [4, "Must be 4 at least"],
    },
    // price: {type: Number},
    // description:{type:String}
  },
  { timestamps: true }
);
module.exports.Author = mongoose.model("Author", AuthorSchema);
