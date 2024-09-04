import express from "express";
import { placeBid } from "../controllers/bidController.js";
import { isAuthenticated, isAuthorized } from "../middlewares/auth.js";
import { checkAuctionEndTime } from "../middlewares/checkAuctionEndTime.js";

const router = express.Router();

router.post(
  "/place/:id",
  isAuthenticated,
  isAuthorized("Bidder"),
  checkAuctionEndTime,
  placeBid
);

export default router;
