import { getHeader } from "../../../utils/utils";
// import jwt_decode from "jwt-decode";
import { api_routes } from "../../../utils/routes";
import axios from "axios";

export interface LoginPayload{
    email:string,
    password:string
}

export interface RegisterPayload{
    email:string,
    password:string,
    name:string
}

export interface ForgotPasswordPayload{
    email:string
}

export interface ResetPasswordPayload{
    password:string,
    token:string
}

export interface VerifyEmailPayload{
    token:string
}

export class AuthService  {
    private baseUrl:string;

    constructor(baseUrl:string){
        this.baseUrl = baseUrl;
    }


    async login(credentials:LoginPayload){
        try {
            let header=getHeader();
            let url=this.baseUrl + api_routes.api_path_login;
            let response = await axios.post(url,credentials,{headers:header});
            return response.data;
        } catch (error:any) {
            return error.response.data;
        }
    }

    async authenticate(){
        try {
            let header=getHeader();
            let url=this.baseUrl + api_routes.api_path_user;
            let response = await axios.get(url,{headers:header});
            return response.data;
        } catch (error:any) {
            return error.response.data;
        }
    }

    async register(credentials:RegisterPayload){
        try {
            let header=getHeader();
            let url=this.baseUrl + api_routes.api_path_register;
            let response = await axios.post(url,credentials,{headers:header});
            return response.data;
        } catch (error:any) {
            return error.response.data;
        }
    }

    async forgotPassword(credentials:ForgotPasswordPayload){
        try {
            let header=getHeader();
            let url=this.baseUrl + api_routes.api_path_forgot_password;
            let response = await axios.post(url,credentials,{headers:header});
            return response.data;
        } catch (error:any) {
            return error.response.data;
        }
    }

    async resetPassword(credentials:ResetPasswordPayload){
        try {
            let header=getHeader();
            let url=this.baseUrl + api_routes.api_path_reset_password;
            let response = await axios.post(url,credentials,{headers:header});
            return response.data;
        } catch (error:any) {
            return error.response.data;
        }
    }

    async verifyEmail(credentials:VerifyEmailPayload){
        try {
            let header=getHeader();
            let url=this.baseUrl + api_routes.api_path_verify_email;
            let response = await axios.post(url,credentials,{headers:header});
            return response.data;
        } catch (error:any) {
            return error.response.data;
        }
    }

    async logout(){
        try {
           localStorage.clear();
           window.location.href="/login";
           return true;
        } catch (error:any) {
            throw new Error("Failed to Logour:",error);
        }
    }
}