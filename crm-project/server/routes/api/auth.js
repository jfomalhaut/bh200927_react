import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import auth from "../../middleware/auth";

import config from "../../config/index";
const { JWT_SECRET } = config;

// Import Mdodel
import User from "../../models/user";

const router = express.Router();

// **********************************//
// ************* LOG IN *************//
// **********************************//
// @route       POST        api/auth
// @desc        Auth        user
// @access      Public
router.post("/", (req, res) => {
  const { user_id, password } = req.body;

  //   Simple Validation
  if (!user_id || !password) {
    return res.status(400).json({ msg: "모든 항목을 채워주세요 !!" });
  }

  //   Check for existing User
  User.findOne({ user_id }).then((user) => {
    if (!user)
      return res.status(400).json({ msg: "유저가 존재하지 않습니다. !!" });

    //   유저가 존재한다면
    bcrypt.compare(password, user.password).then((isMatch) => {
      // 비밀번호가 일치하지 않는다면
      if (!isMatch)
        return res.status(400).json({ msg: "비밀번호가 일치하지 않습니다." });
      // 비밀번호가 일치한다면
      jwt.sign(
        { id: user.id },
        JWT_SECRET,
        { expiresIn: "2 days" },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              user_name: user.user_name,
              store_name: user.store_name,
              role: user.role,
            },
          });
        }
      );
    });
  });
});

// ***********************************//
// ************* LOG OUT ************//
// *********************************//
router.post("/logout", (req, res) => {
  res.json("로그아웃이 되었습니다. !!");
});

// ***********************************//
// ******* Get Single User **********//
// *********************************//
router.get("/user", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) throw Error("유저가 존재하지 않습니다. !!");
    res.json(user);
  } catch (e) {
    console.log(e);
    res.status(400).json({ msg: e.message });
  }
});

export default router;
