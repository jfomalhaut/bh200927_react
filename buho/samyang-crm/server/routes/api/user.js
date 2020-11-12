import express from "express";
import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

import config from "../../config/index";
const { JWT_SECRET } = config;

// Model
import User from "../../models/user";

const router = express.Router();

// @routes      GET     api/user
// @desc        Get all user
// @access public
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    if (!users) throw Error("No Users");
    res.status(200).json(users);
  } catch (e) {
    console.log(e);
    res.status(400).json({ msg: e.message });
  }
});

// @routes      POST     api/user
// @desc        Register User
// @access      Public
router.post("/", async (req, res) => {
  console.log(req.body);
  const { branch_name, agent_name, user_name, user_id, password } = req.body;

  //   Simple Validation
  if (!branch_name || !agent_name || !user_name || !user_id || !password) {
    return res.status(400).json({ msg: "모든 필드를 채워주세요" });
  }

  //   Check For existion User
  User.findOne({ user_id }).then((user) => {
    if (user)
      return res.status(400).json({ msg: "이미 가입된 유저가 존재합니다. " });
    const newUser = new User({
      branch_name,
      agent_name,
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
                  agent_name: user.agent_name,
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
