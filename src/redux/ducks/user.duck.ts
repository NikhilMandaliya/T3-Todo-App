import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
}

export interface IuserInitialRedux {
  token: null | string;
  user: null | IUser;
}

const initialState = {
  token: null,
  user: null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: { user: IUser | null }, action: PayloadAction<IUser | null>) => {
      state.user = action.payload;
    },
    setToken: (state: { token: string | null }, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    }
  }
});

export const userSelector = (state: { user: IuserInitialRedux }) => state.user.user;
export const tokenSelector = (state: { user: IuserInitialRedux }) => state.user.token;

const { actions, reducer } = userSlice;

export const { setUser, setToken } = actions;

export default reducer;
