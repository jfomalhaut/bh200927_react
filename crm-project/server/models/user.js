import mongoose from "mongoose";
import moment from "moment";

// Create Schema
const UserSchema = new mongoose.Schema({
  branchname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  storename: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Master", "Manager", "User"],
    default: "User",
  },
  register_date: {
    type: Date,
    default: moment().format("YYYY-MM-DD hh:mm:ss"),
  },
  comments: [
    {
      promotion_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "promotions",
      },
      comment_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comments",
      },
    },
  ],
  promotion: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "promotion",
    },
  ],
});

const User = mongoose.model("user", UserSchema);

export default User;
