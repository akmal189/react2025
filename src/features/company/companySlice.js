import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'My Company LLC',
  description: 'We provide high-quality services to modern businesses.',
  address: '123 Business St, Metropolis',
  phone: '+998 90 123-45-67',
  email: 'info@mycompany.com',
};

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {},
});

export default companySlice.reducer;
