const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Team Name is required"],
      minlength: [2, "Must be 2 at least"],
    },
    position: {
      type: String,
      required: [false, "Optional"],
    },
    // price: {type: Number},
    // description:{type:String}
  },
  { timestamps: true }
);
module.exports.Author = mongoose.model("Author", AuthorSchema);
