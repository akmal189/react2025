import { configureStore } from '@reduxjs/toolkit';
import companyReducer from '../features/company/companySlice';
import aboutReducer from '../features/about/aboutSlice';
import servicesReducer from '../features/services/servicesSlice';
import contactReducer from '../features/contact/contactSlice';

export const store = configureStore({
  reducer: {
    company: companyReducer,
    about: aboutReducer,
    services: servicesReducer,
    contact: contactReducer,
  },
});
