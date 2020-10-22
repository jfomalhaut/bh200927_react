import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Import Model
import User from "../../models/user";

import config from "../../config/index";
const { JWT_SECRET } = config;

const router = express.Router();

// @routes      GET     api/user
// @desc        Get all user
// @access      public
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    if (!users) throw Error("유저가 존재하지 않습니다.");
    res.status(200).json(users);
  } catch (e) {
    console.log(e);
    res.status(400).json({ msg: e.message });
  }
});

// @routes      POST     api/user
// @desc        Register  User
// @access      public
router.post("/", async (req, res) => {
  console.log(req.body);
  const { branch_name, store_name, user_name, user_id, password } = req.body;

  //   Simple validation
  if (!branch_name || !store_name || !user_name || !user_id || !password) {
    return res.status(400).json({ msg: "모든 항목을 채워주세요 !!" });
  }

  //   Check for existing user
  User.findOne({ user_id }).then((user) => {
    if (user)
      return res.status(400).json({ msg: "이미 가입된 유저가 존재합니다." });
    const newUser = new User({
      branch_name,
      store_name,
      user_name,
      user_id,
      password,
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          jwt.sign(
            { id: user.id },
            JWT_SECRET,
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  branch_name: user.branch_name,
                  store_name: user.store_name,
                  user_name: user.user_name,
                  user_id: user.user_id,
                },
              });
            }
          );
        });
      });
    });
  });
});

export default router;
