import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: "Feel free to reach out to us for any inquiries or collaboration opportunities.",
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
});

export default contactSlice.reducer;
