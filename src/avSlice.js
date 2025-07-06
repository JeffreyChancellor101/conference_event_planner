import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
        img: "/images/Projectors.jpg",
        name: "Projectors",
        cost: 200,
        quantity: 0,
    },
    {
        img: "/images/speakers.jpg",
        name: "Speaker",
        cost: 35,
        quantity: 0,
    },
    {
        img: "/images/microphone.jpg",
        name: "Microphones",
        cost: 45,
        quantity: 0,
    },
    {
        img: "/images/board.png",
        name: "Whiteboards",
        cost: 80,
        quantity: 0,
    },

    {
        img: "/images/sign.jpg",
        name: "Signage",
        cost: 80,
        quantity: 0,
    },

  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
      const {payload: index} = action;
      if(state[index]){
        state[index].quantity++;
      }
    },
    decrementAvQuantity: (state, action) => {
        const {payload: index} = action;
      if(state[index] && state[index].quantity > 0){
        state[index].quantity--;
      }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
