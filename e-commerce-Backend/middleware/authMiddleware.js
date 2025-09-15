const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  // check if token is missing
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }
  try {
    // Verify token
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded JWT:", decode);

    // fetch full user form DB
    const user = await User.findById(decode.userId).select("-password");

    if (!user) {
      return res.status(401).json({ msg: "User not found" });
    }

    // Attach user to request object
    // req.user = decode.userId;

    // Attach full user to request
    req.user = user;

    next(); //Proceed to route
  } catch (error) {
    res.status(401).json({ msg: "Invaild token" });
  }
};

const protect = async (req, res, next) => {
  let token;

  // // ✅ Check if Authorization header exists and starts with "Bearer"
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];
      console.log(token);

      // verify token
      const decode = jwt.verify(token, process.env.JWT_SECRET);

      // ✅ Make sure decoded and decoded.id exist
      // if (!decode || !decode.id) {
      //   return res.status(401).json({ msg: "Invalid token structure" });
      // }

      // Attach user to request (excluding password)
      // req.user = await User.findById(decode.userId).select("-password");
      console.log("Decoded token", decode);
      const userFromDb = await User.findById(decoded.userId).select(
        "-password"
      );
      console.log("User from DB:", userFromDb);

      // if (!req.user) {
      //   return res.status(401).json({ msg: "User not found" });
      // }
      next();
    } catch (error) {
      res.status(401).json({ msg: "Not authorized, token failed" });
    }
  }

  if (!token) {
    res.status(401).json({ msg: "Not authorized, no token" });
  }
};

module.exports = { authMiddleware, protect };
