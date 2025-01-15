import { Router } from "express";
import { v1Router } from "./v1/index.js";

//Configure router
export const apiRouter = Router();

// Configure route middleware
apiRouter.use("/v1", v1Router);
