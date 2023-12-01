import { APIPATH } from "./utils";

export const api_routes = {
    api_path_login:'/login',
    api_path_register:'/register',
    api_path_logout:'/logout',
    api_path_user:'/user',
    api_path_forgot_password:'/forgot-password',
    api_path_reset_password:'/reset-password',
    api_path_verify_email:'/verify-email',
    api_path_posts:'/posts',
}

export const api_routes_full = {
    api_path_login:APIPATH + api_routes.api_path_login,
    api_path_register:APIPATH + api_routes.api_path_register,
    api_path_logout:APIPATH + api_routes.api_path_logout,
    api_path_user:APIPATH + api_routes.api_path_user,
    api_path_forgot_password:APIPATH + api_routes.api_path_forgot_password,
    api_path_reset_password:APIPATH + api_routes.api_path_reset_password,
    api_path_verify_email:APIPATH + api_routes.api_path_verify_email,
}