import { combineReducers } from "redux";
import usersReducer from "./ducks/user.duck";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "appsmith",
  storage,
  whitelist: ["user"]
};

const rootReducer = combineReducers({
  user: usersReducer
});

export default persistReducer(persistConfig, rootReducer);
