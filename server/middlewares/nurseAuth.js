import jwt from "jsonwebtoken";
import { catchErrorHandler } from "../utils/catchErrorHandler.js";

export const nurseAuth = (req, res, next) => {
  try {
    // Get token
    const { token } = req.cookies;

    // Handle no token
    if (!token) {
      return res.status(401).json({ message: "Token not provided!" });
    }

    // Decode token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Handle no decoded token
    if (!decoded) {
      return res.status(401).json({ message: "Nurse not authorized!" });
    }

    // Set nurse
    req.user = decoded;
    next();
  } catch (error) {
    // Handle catch error
    catchErrorHandler(res, error);
  }
};
