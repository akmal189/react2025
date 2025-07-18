import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  services: [
    { id: 1, title: "Web Development", description: "Modern websites and web apps." },
    { id: 2, title: "Mobile Apps", description: "Cross-platform mobile app development." },
    { id: 3, title: "UI/UX Design", description: "Clean and user-friendly interfaces." },
    { id: 4, title: "SEO Optimization", description: "Improve your website's visibility." },
    { id: 5, title: "Cloud Solutions", description: "Scalable cloud services for your business." },
    { id: 6, title: "Digital Marketing", description: "Effective online marketing strategies." },
    { id: 7, title: "E-commerce Solutions", description: "Build and manage online stores." },
  ],
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
});

export default servicesSlice.reducer;
