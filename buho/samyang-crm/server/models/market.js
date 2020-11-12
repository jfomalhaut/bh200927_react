import mongoose from "mongoose";
import moment from "moment";

const MarketSchema = new mongoose.Schema({
  market_name: {
    type: String,
    required: true,
  },
  market_telephone: {
    type: String,
    required: true,
  },
  market_address: {
    type: String,
    required: true,
  },
  market_pos: {
    type: String,
    required: true,
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

const Market = mongoose.model("market", MarketSchema);

export default Market;
