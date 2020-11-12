import mongoose from "mongoose";
import moment from "moment";

const OrderSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  product_value: {
    type: String,
    required: true,
  },
  before_strategy_value: {
    type: String,
  },
  after_strategy_value: {
    type: String,
  },
  delivery_request_time: {
    type: String,
  },
  memo: {
    type: String,
  },
  date: {
    type: String,
    default: moment().format("YYYY-MM-DD hh:mm:ss"),
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  creatorName: { type: String },
});

const Order = mongoose.model("order", OrderSchema);

export default Order;
