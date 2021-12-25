import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { currentUser: null },
  reducers: {
    userVerification: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { userVerification } = userSlice.actions;
export default userSlice.reducer;
