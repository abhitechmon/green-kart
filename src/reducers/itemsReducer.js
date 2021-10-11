import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      "name": "Potato",
      "id": 1,
      "price": 30,
      "available": 1,
      "vendor": "Himachal Pvt Ltd",
      "category": "Vegtables"
    },
    {
      "name": "Banana",
      "id": 2,
      "price": 50,
      "available": 1,
      "category": "Fruits",
      "vendor": "Organic farms"
    },
    {
      "name": "Drumsticks",
      "id": 3,
      "price": 20,
      "available": 0,
      "category": "Vegetables",
      "vendor": "Mallikarjuna farms"
    },
    {
      "name": "Orange",
      "id": 4,
      "price": 25,
      "available": 1,
      "vendor": "Nagpur farms",
      "category": "Fruits"
    }
  ],
};

export default createReducer(initialState, {
  DATA_FETCH_INITIATED: (state) => ({ ...state, status: "loading" }),
  DATA_FETCH_SUCCESS: (state, action) => ({ ...state, ...action.payload }),
  DATA_FETCH_FAILED: (state) => ({ ...state, ...initialState }),
});
