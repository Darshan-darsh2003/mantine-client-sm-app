import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { authReducers } from "../auth/slice/authSlice";


const store=configureStore({
    reducer:{
        "auth/login":authReducers.login,
        "auth/register":authReducers.register,
        "auth/forgotPassword":authReducers.forgotPassword,
        "auth/resetPassword":authReducers.resetPassword,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;