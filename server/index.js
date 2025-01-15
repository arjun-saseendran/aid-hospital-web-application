import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

// Configure dot env
dotenv.config();

// Configure app
const app = express();

// Configure cors
app.use(
  cors({
    origin: process.env.CORS,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Configure port
const PORT = process.env.PORT;

// Connect database
connectDB();

// Common middlewares
app.use(express.json());
app.use(cookieParser());

// Api v1 routes
app.use("/api", apiRouter);

// Configure server
app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Server running on port ${process.env.PORT}`);
  }
});
