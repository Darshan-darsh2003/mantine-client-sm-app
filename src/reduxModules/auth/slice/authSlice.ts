import { createSlice } from "@reduxjs/toolkit";
import { login, register, forgotPassword } from "../action/authAction";

interface AuthState {
    login: {
        loginLoading: boolean,
        loginError: boolean,
        loginToken: string,
        isLoggedIn: boolean,
    },
    register: {
        registerLoading: boolean,
        registerError: boolean,
        registerErrorMessage: string|undefined,
        isRegistered: boolean,
    },
    forgotPassword: {
        forgotPasswordLoading: boolean,
        forgotPasswordError: boolean,
        forgotPasswordErrorMessage: string|undefined,
        isReset: boolean,
    },
    resetPassword: {
        resetPasswordLoading: boolean,
        resetPasswordError: boolean,
        resetPasswordErrorMessage: string|undefined,
        isReset: boolean,
    },
}

const initialState: AuthState = {
    login: {
        loginLoading: false,
        loginError: false,
        loginToken: "",
        isLoggedIn: false,
    },
    register: {
        registerLoading: false,
        registerError: false,
        registerErrorMessage: "",
        isRegistered: false,
    },
    forgotPassword: {
        forgotPasswordLoading: false,
        forgotPasswordError: false,
        forgotPasswordErrorMessage: "",
        isReset: false,
    },
    resetPassword: {
        resetPasswordLoading: false,
        resetPasswordError: false,
        resetPasswordErrorMessage: "",
        isReset: false,
    },
}

export const loginSlice = createSlice({
    name: "auth/login",
    initialState: initialState.login,
    reducers: {
        logout: (state) => {
            state.loginToken = "";
            state.isLoggedIn = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loginLoading = true;
            state.loginError = false;
            state.loginToken = "";
            state.isLoggedIn = false;
        })
            .addCase(login.fulfilled, (state, action) => {
                state.loginLoading = false;
                state.loginError = false;
                state.loginToken = action.payload.token;
                state.isLoggedIn = true;
                localStorage.setItem("access_token", action.payload.token);

            })
            .addCase(login.rejected, (state) => {
                state.loginLoading = false;
                state.loginError = true;
                state.loginToken = "";
                state.isLoggedIn = false;
            })
    }
})

export const registerSlice = createSlice({
    name: "auth/register",
    initialState: initialState.register,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state) => {
            state.registerLoading = true;
            state.registerError = false;
            state.isRegistered = false;
        })
            .addCase(register.fulfilled, (state) => {
                state.registerLoading = false;
                state.registerError = false;
                state.isRegistered = true;
            })
            .addCase(register.rejected, (state, action) => {
                state.registerLoading = false;
                state.registerError = true;
                state.registerErrorMessage = action.error.message;
                state.isRegistered = false;
            })
    }
})

export const forgotPasswordSlice = createSlice({
    name: "auth/forgotPassword",
    initialState: initialState.forgotPassword,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(forgotPassword.pending, (state) => {
            state.forgotPasswordLoading = true;
            state.forgotPasswordError = false;
            state.isReset = false;
        })
            .addCase(forgotPassword.fulfilled, (state) => {
                state.forgotPasswordLoading = false;
                state.forgotPasswordError = false;
                state.isReset = true;
            })
            .addCase(forgotPassword.rejected, (state, action) => {
                state.forgotPasswordLoading = false;
                state.forgotPasswordError = true;
                state.forgotPasswordErrorMessage = action.error.message;
                state.isReset = false;
            })
    }
})

export const resetPasswordSlice = createSlice({
    name: "auth/resetPassword",
    initialState: initialState.resetPassword,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(forgotPassword.pending, (state) => {
            state.resetPasswordLoading = true;
            state.resetPasswordError = false;
            state.isReset = false;
        })
            .addCase(forgotPassword.fulfilled, (state) => {
                state.resetPasswordLoading = false;
                state.resetPasswordError = false;
                state.isReset = true;
            })
            .addCase(forgotPassword.rejected, (state, action) => {
                state.resetPasswordLoading = false;
                state.resetPasswordError = true;
                state.resetPasswordErrorMessage = action.error.message;
                state.isReset = false;
            })
    }
})


export const { logout } = loginSlice.actions;

export const authReducers = {
    login: loginSlice.reducer,
    register: registerSlice.reducer,
    forgotPassword: forgotPasswordSlice.reducer,
    resetPassword: resetPasswordSlice.reducer,
}