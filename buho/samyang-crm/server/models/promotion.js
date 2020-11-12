import mongoose from "mongoose";
import moment from "moment";

const PromotionSchema = new mongoose.Schema({
  branch_name: {
    type: String,
    required: true,
    default: "대구지점",
  },
  promotion_type: {
    type: String,
    required: true,
    index: true,
  },
  agent_name: {
    type: String,
    required: true,
  },
  market_name: {
    type: String,
    required: true,
  },
  market_address: {
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
  product_name: {
    type: String,
    required: true,
  },
  sale_price: {
    type: String,
    required: true,
  },
  enter_value: {
    type: Number,
    required: true,
  },
  pr_value: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    default: moment().format("YYYY-MM-DD hh:mm:ss"),
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
    },
  ],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const Promotion = mongoose.model("promotion", PromotionSchema);

export default Promotion;
