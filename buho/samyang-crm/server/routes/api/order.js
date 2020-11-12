import express from "express";
import auth from "../../middleware/auth";

// Model
import Order from "../../models/order";

const router = express.Router();

// api/get
router.get("/", async (req, res) => {
  const orderFindResult = await Order.find();
  console.log(orderFindResult, "All Market Get");
  res.json(orderFindResult);
});

// api/post
router.post("/", auth, async (req, res, next) => {
  try {
    console.log(req, "req");
    const {
      product_name,
      product_value,
      before_strategy_value,
      after_strategy_value,
      delivery_request_time,
      memo,
      creator,
    } = req.body;
    const newOrder = await Market.create({
      product_name,
      product_value,
      before_strategy_value,
      after_strategy_value,
      delivery_request_time,
      memo,
      creator,
    });
    res.json(newOrder);
  } catch (e) {
    console.error(e);
  }
});

export default router;
