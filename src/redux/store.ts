import { Middleware, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
// import logger from "redux-logger";
import { persistStore } from "redux-persist";
import rootReducer from "./root.reducer";

const Middlewares: Middleware[] = [];

// if (process.env.NODE_ENV === "development") {
//   Middlewares.push(logger);
// }

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(Middlewares),
  devTools: process.env.NODE_ENV === "development"
});

export const persistor = persistStore(store);
const exportStore = { store, persistor };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const wrapper = createWrapper(() => store);

export default exportStore;
