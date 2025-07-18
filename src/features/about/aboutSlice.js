import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  content: "We are a modern company focused on delivering top-notch digital solutions. Our team consists of experienced developers, designers, and managers who love what they do.",
};

const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {},
});

export default aboutSlice.reducer;
