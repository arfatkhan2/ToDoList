// store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

// Configure the store
const store = configureStore({
  reducer: persistedReducer,
});

// Initialize persistor
export const persistor = persistStore(store);

// Export the store
export default store;
