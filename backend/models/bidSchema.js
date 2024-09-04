import mongoose from "mongoose";

const bidSchema = new mongoose.Schema({
  amount: Number,
  bidder: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    userName: String,
    profileImage: String,
  },
  auctionItem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Auction",
    required: true,
  },
});

export const Bid = mongoose.model("Bid", bidSchema);
