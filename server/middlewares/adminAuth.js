import jwt from "jsonwebtoken";
import { catchErrorHandler } from "../utils/catchErrorHandler.js";

// Handle admin authentication
export const adminAuth = async (req, res, next) => {
  try {
    // Get token
    const { token } = req.cookies;

    // Handle token not found
    if (!token) {
      return res.status(401).json({ message: "Token not provided!" });
    }

    // Decode token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Handle no decoded token
    if (!decoded) {
      return res.status(401).json({ message: "Admin not authorized!" });
    }

    // Check role
    if (decoded.role !== "admin") {
      return res.status(401).json({ message: "User not authorized!" });
    }

    // Set admin
    req.user = decoded;
    next();
  } catch (error) {
    // Handle catch error
    catchErrorHandler(res, error);
  }
};
