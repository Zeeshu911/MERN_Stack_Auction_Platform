import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const auctionSlice = createSlice({
  name: "auction",
  initialState: {
    loading: false,
    itemDetail: {},
    auctionDetail: {},
    auctionBidders: {},
    myAuctions: [],
    allAuctions: [],
  },
  reducers: {
    createAuctionRequest(state, action) {
      state.loading = true;
    },
    createAuctionSuccess(state, action) {
      state.loading = false;
    },
    createAuctionFailed(state, action) {
      state.loading = false;
    },
    getAllAuctionItemRequest(state, action) {
      state.loading = true;
    },
    getAllAuctionItemSuccess(state, action) {
      state.loading = false;
      state.allAuctions = action.payload;
    },
    getAllAuctionItemFailed(state, action) {
      state.loading = false;
    },
    getAuctionDetailRequest(state, action) {
      state.loading = true;
    },
    getAuctionDetailSuccess(state, action) {
      state.loading = false;
      state.auctionDetail = action.payload.auctionItem;
      state.auctionBidders = action.payload.bidders;
    },
    getAuctionDetailFailed(state, action) {
      state.loading = false;
      state.auctionDetail = state.auctionDetail;
      state.auctionBidders = state.auctionBidders;
    },
    getMyAuctionsRequest(state, action) {
      state.loading = true;
      state.myAuctions = [];
    },
    getMyAuctionsSuccess(state, action) {
      state.loading = false;
      state.myAuctions = action.payload;
    },
    getMyAuctionsFailed(state, action) {
      state.loading = false;
      state.myAuctions = [];
    },
    deleteAuctionItemRequest(state, action) {
      state.loading = true;
    },
    deleteAuctionItemSuccess(state, action) {
      state.loading = false;
    },
    deleteAuctionItemFailed(state, action) {
      state.loading = false;
    },
    republishItemRequest(state, action) {
      state.loading = true;
    },
    republishItemSuccess(state, action) {
      state.loading = false;
    },
    republishItemFailed(state, action) {
      state.loading = false;
    },

    resetSlice(state, action) {
      state.loading = false;
      state.auctionDetail = state.auctionDetail;
      state.itemDetail = state.itemDetail;
      state.myAuctions = state.myAuctions;
      state.allAuctions = state.allAuctions;
    },
  },
});

export const getAllAuctionItems = () => async (dispatch) => {
  dispatch(auctionSlice.actions.getAllAuctionItemRequest());
  try {
    const response = await axios.get(
      "http://localhost:5000/api/v1/auctionitem/allitems",
      { withCredentials: true }
    );
    dispatch(
      auctionSlice.actions.getAllAuctionItemSuccess(response.data.items)
    );
    dispatch(auctionSlice.actions.resetSlice());
  } catch (error) {
    dispatch(auctionSlice.actions.getAllAuctionItemFailed());
    console.error(error);
    dispatch(auctionSlice.actions.resetSlice());
  }
};

export const getMyAuctionItems = () => async (dispatch) => {
  dispatch(auctionSlice.actions.getMyAuctionsRequest());
  try {
    const response = await axios.get(
      "http://localhost:5000/api/v1/auctionitem/myitems",
      { withCredentials: true }
    );
    dispatch(auctionSlice.actions.getMyAuctionsSuccess(response.data.items));
    dispatch(auctionSlice.actions.resetSlice());
  } catch (error) {
    dispatch(auctionSlice.actions.getMyAuctionsFailed());
    console.error(error);
    dispatch(auctionSlice.actions.resetSlice());
  }
};

export const getAuctionDetail = (id) => async (dispatch) => {
  dispatch(auctionSlice.actions.getAuctionDetailRequest());
  try {
    const response = await axios.get(
      `http://localhost:5000/api/v1/auctionitem/auction/${id}`,
      { withCredentials: true }
    );
    dispatch(auctionSlice.actions.getAuctionDetailSuccess(response.data));
    dispatch(auctionSlice.actions.resetSlice());
  } catch (error) {
    dispatch(auctionSlice.actions.getAuctionDetailFailed());
    console.error(error);
    dispatch(auctionSlice.actions.resetSlice());
  }
};

export const createAuction = (data) => async (dispatch) => {
  dispatch(auctionSlice.actions.createAuctionRequest());
  try {
    const response = await axios.post(
      "http://localhost:5000/api/v1/auctionitem/create",
      data,
      {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    dispatch(auctionSlice.actions.createAuctionSuccess());
    toast.success(response.data.message);
    dispatch(getAllAuctionItems());
    dispatch(auctionSlice.actions.resetSlice());
  } catch (error) {
    dispatch(auctionSlice.actions.createAuctionFailed());
    toast.error(error.response.data.message);
    dispatch(auctionSlice.actions.resetSlice());
  }
};

export const republishAuction = (id, data) => async (dispatch) => {
  dispatch(auctionSlice.actions.republishItemRequest());
  try {
    const response = await axios.put(
      `http://localhost:5000/api/v1/auctionitem/item/republish/${id}`,
      data,
      {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      }
    );
    dispatch(auctionSlice.actions.republishItemSuccess());
    toast.success(response.data.message);
    dispatch(getMyAuctionItems());
    dispatch(getAllAuctionItems());
    dispatch(auctionSlice.actions.resetSlice());
  } catch (error) {
    dispatch(auctionSlice.actions.republishItemFailed());
    toast.error(error.response.data.message);
    console.error(error.response.data.message);
    dispatch(auctionSlice.actions.resetSlice());
  }
};

export const deleteAuction = (id) => async (dispatch) => {
  dispatch(auctionSlice.actions.deleteAuctionItemRequest());
  try {
    const response = await axios.delete(
      `http://localhost:5000/api/v1/auctionitem/delete/${id}`,
      {
        withCredentials: true,
      }
    );
    dispatch(auctionSlice.actions.deleteAuctionItemSuccess());
    toast.success(response.data.message);
    dispatch(getMyAuctionItems());
    dispatch(getAllAuctionItems());
    dispatch(auctionSlice.actions.resetSlice());
  } catch (error) {
    dispatch(auctionSlice.actions.deleteAuctionItemFailed());
    toast.error(error.response.data.message);
    console.error(error.response.data.message);
    dispatch(auctionSlice.actions.resetSlice());
  }
};

export default auctionSlice.reducer;
