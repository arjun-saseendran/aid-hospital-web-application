import jwt from "jsonwebtoken";
import { catchErrorHandler } from "../utils/catchErrorHandler.js";

export const doctorAuth = async (req, res, next) => {
  try {
    // Get token
    const { token } = req.cookies;

    // Handle not token
    if (!token) {
      return res.status(401).json({ message: "Token not provided!" });
    }

    // Decode token
    const decoded = jwt.sign(token, process.env.JWT_SECRET);

    // Handle no decoded token
    if (!decoded) {
      return res.status(401).json({ message: "Doctor not authorized!" });
    }

    // Check role
    if (decoded.role !== "doctor" && decoded.role !== "admin") {
      return res.status(401).json({ message: "User not authorized!" });
    }

    // Set doctor
    req.user = decoded;
    next();
  } catch (error) {
    // Handle catch error
    catchErrorHandler(res, error);
  }
};
