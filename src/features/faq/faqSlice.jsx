import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  faq: [
    { id: 1, title: "What do you mean by 'Figma assets'?", text: "You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens." },
    { id: 2, title: "What does 'lifetime access' exactly mean?", text: "Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge." },
    { id: 3, title: "How does support work?", text: "We're aware of the importance of well qualified support, that is why we decided that support will only be provided by the authors that actually worked on this project." },
  ],
};

const faqSlice = createSlice({
  name: 'faq',
  initialState,
  reducers: {},
});

export default faqSlice.reducer;
