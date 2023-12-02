import {createAsyncThunk} from '@reduxjs/toolkit';
import { AuthService, ResetPasswordPayload } from '../service/authService';
import { LoginPayload, RegisterPayload, ForgotPasswordPayload, VerifyEmailPayload } from '../service/authService';
import { APIPATH } from '../../../utils/utils';

export const login = createAsyncThunk(
    'auth/login',
    async (credentials:LoginPayload) => {
      try{
        let service = new AuthService(APIPATH);
        let response = await service.login(credentials);
        return response;
      }
        catch(error:any){
            return error.response.data;
        }
    }
);

export const authenticate = createAsyncThunk(
    'auth/authenticate',
    async () => {
      try{
        let service = new AuthService(APIPATH);
        let response = await service.authenticate();
        return response;
      }
        catch(error:any){
            return error.response.data;
        }
    }
);

export const register = createAsyncThunk(
    'auth/register',
    async (credentials:RegisterPayload) => {
      try{
        let service = new AuthService(APIPATH);
        let response = await service.register(credentials);
        return response;
      }
        catch(error:any){
            return error.response.data;
        }
    }
);

export const forgotPassword = createAsyncThunk(
    'auth/forgotPassword',
    async (credentials:ForgotPasswordPayload) => {
      try{
        let service = new AuthService(APIPATH);
        let response = await service.forgotPassword(credentials);
        return response;
      }
        catch(error:any){
            return error.response.data;
        }
    }
);

export const resetPassword = createAsyncThunk(
    'auth/resetPassword',
    async (credentials:ResetPasswordPayload) => {
      try{
        let service = new AuthService(APIPATH);
        let response = await service.resetPassword(credentials);
        return response;
      }
        catch(error:any){
            return error.response.data;
        }
    }
);

export const verifyEmail = createAsyncThunk(
    'auth/verifyEmail',
    async (credentials:VerifyEmailPayload) => {
      try{
        let service = new AuthService(APIPATH);
        let response = await service.verifyEmail(credentials);
        return response;
      }
        catch(error:any){
            return error.response.data;
        }
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async () => {
      try{
        let service = new AuthService(APIPATH);
        let response = await service.logout();
        return response;
      }
        catch(error:any){
            throw new Error("Logout Failed :",error);
        }
    }
);