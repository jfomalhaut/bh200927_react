import express from "express";
import auth from "../../middleware/auth";

// Model
import Market from "../../models/market";

const router = express.Router();

// api/get
router.get("/", async (req, res) => {
  const marketFindResult = await Market.find();
  console.log(marketFindResult, "All Market Get");
  res.json(marketFindResult);
});

// api/post
router.post("/", auth, async (req, res, next) => {
  try {
    console.log(req, "req");
    const {
      market_name,
      market_telephone,
      market_address,
      market_pos,
      creator,
    } = req.body;
    const newMarket = await Market.create({
      market_name,
      market_telephone,
      market_address,
      market_pos,
      creator,
    });
    res.json(newMarket);
  } catch (e) {
    console.error(e);
  }
});

export default router;
