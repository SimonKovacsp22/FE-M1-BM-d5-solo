import updateReducer from "../reducers/updateReducer";
import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
  } from "@reduxjs/toolkit";
 
  
  import { persistStore, persistReducer } from "redux-persist";
  import storage from "redux-persist/lib/storage";
  import { encryptTransform } from "redux-persist-transform-encrypt";
  
  
  const persistConfig = {
    key: "root",
    storage,
    transforms: [
      encryptTransform({
        onError: (error) => {
          console.log(error);
        },
        secretKey: process.env.REACT_APP_KEY,
      }),
    ],
  };
  
  const combinedReducer = combineReducers({
    update: updateReducer
  });
  
  const persistedReducer = persistReducer(persistConfig, combinedReducer);
  
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
  
  const persistor = persistStore(store);
  
  export { store, persistor };