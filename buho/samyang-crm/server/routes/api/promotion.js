import express from "express";
import auth from "../../middleware/auth";

// Model
import Promotion from "../../models/promotion";

const router = express.Router();

// api/get
router.get("/", async (req, res) => {
  const promotionFindResult = await Promotion.find();
  console.log(promotionFindResult, "All Promotion Get");
  res.json(promotionFindResult);
});

// api/post
router.post("/", auth, async (req, res, next) => {
  try {
    console.log(req, "req");
    const {
      branch_name,
      promotion_type,
      agent_name,
      market_name,
      market_address,
      start_date,
      end_date,
      product_name,
      sale_price,
      enter_value,
      pr_value,
      creator,
    } = req.body;
    const newPromotion = await Promotion.create({
      branch_name,
      promotion_type,
      agent_name,
      market_name,
      market_address,
      start_date,
      end_date,
      product_name,
      sale_price,
      enter_value,
      pr_value,
      creator,
    });
    res.json(newPromotion);
  } catch (e) {
    console.error(e);
  }
});

export default router;
