import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  slider: [
    { id: 1, title: "Web Development", image: "http://multi-optimum.alexmalkoff97.21.oml.ru/thumb/2/uSoh-8432LF3KHXLhO1i-w/1920c/d/55179153_10.jpg" },
    { id: 2, title: "Mobile Apps", image: "http://multi-optimum.alexmalkoff97.21.oml.ru/thumb/2/GiriAmI---pCTQCLHUHvkw/1920c/d/55179153_11.jpg" },
    { id: 3, title: "UI/UX Design", image: "http://multi-optimum.alexmalkoff97.21.oml.ru/thumb/2/JWaZqftcVOe5VkF9GTrbPg/1920c/d/55179153_13.jpg" },
    { id: 4, title: "SEO Optimization", image: "http://multi-optimum.alexmalkoff97.21.oml.ru/thumb/2/HlRLzX3nMVsf522wV6h70g/1920c/d/214913.jpg" },
    { id: 5, title: "Cloud Solutions", image: "http://multi-optimum.alexmalkoff97.21.oml.ru/thumb/2/23jtfG39plyCRSe1ZTRowg/1920c/d/55179153_15.jpg" },
  ],
};

const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {},
});

export default sliderSlice.reducer;
