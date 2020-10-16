import mongoose from "mongoose";
import moment from "moment";

// Create Schema
const PromotionSchema = new mongoose.Schema({
  promotiontype: {
    type: String,
    enum: ["전단행사", "엔드행사", "저회전행사"],
    default: "전단행사 ",
  },
  supermarketname: {
    type: String,
    required: true,
  },
  start_date: {
    type: String,
    required: true,
  },
  end_date: {
    type: String,
    required: true,
  },
  productname: {
    type: String,
    required: true,
    index: true,
  },
  enterquantity: {
    type: Number,
    required: true,
  },
  prquantity: {
    type: Number,
    required: true,
  },

  saleprice: {
    type: Number,
    required: true,
  },
  remark: {
    type: String,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
    },
  ],
  date: {
    type: String,
    default: moment().format("YYYY-MM-DD hh:mm:ss"),
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const Promotion = mongoose.model("promotion", PromotionSchema);

export default Promotion;
