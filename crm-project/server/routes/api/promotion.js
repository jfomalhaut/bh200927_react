import express from "express";
import auth from "../../middleware/auth";

// Import Model
import Promotion from "../../models/promotion";

const router = express.Router();

// api/get
router.get("/", async (req, res) => {
  const promotionFindResult = await Promotion.find();
  console.log(promotionFindResult, "All Promotion Get");
  res.json(promotionFindResult);
});

router.post("/", auth, async (req, res, next) => {
  try {
    console.log(req.body, "req");
    const {
      branch_name,
      promotion_type,
      store_name,
      supermarket_name,
      supermarket_address,
      start_date,
      end_date,
      product_name,
      sale_price,
      enter_value,
      pr_value,
    } = req.body;
    const newPromotion = await Promotion.create({
      branch_name,
      promotion_type,
      store_name,
      supermarket_name,
      supermarket_address,
      start_date,
      end_date,
      product_name,
      sale_price,
      enter_value,
      pr_value,
    });
    res.json(newPromotion);
  } catch (e) {
    console.log(e);
  }
});

export default router;
