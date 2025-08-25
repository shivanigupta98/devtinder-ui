import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name: "feed",
    initialState: null,
    reducers: {
        addFeed: (state, action) => action.payload,
        removeFeed: (state, action) => null,
        removeUser: (state, action) => {
            return state.filter((feed) => feed._id !== action.payload)
        }
    }
})

export const { addFeed, removeFeed, removeUser } = feedSlice.actions;
export default feedSlice.reducer;