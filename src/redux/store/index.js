/** @format */

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import jobsReducer from "../reducers/jobs";
import { persistStore, persistReducer } from "redux-persist";
import favouritesReducer from "../reducers/favourites";
import { encryptTransform } from "redux-persist-transform-encrypt";
import localStorage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root", // with this we're going to persist the whole store
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: "Ganesjgekjgh",
    }),
  ],
};

const bigReducer = combineReducers({
  jobsReducer,
  favouritesReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
