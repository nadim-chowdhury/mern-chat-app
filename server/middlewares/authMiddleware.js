const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await userModel.findById(decode.id).select("-password");

      next();
    } catch (err) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }
});

module.exports = { protect };
