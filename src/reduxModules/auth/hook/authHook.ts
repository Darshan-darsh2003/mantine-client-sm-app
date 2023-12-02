import {useSelector, useDispatch} from 'react-redux';
import { login,authenticate,register,forgotPassword } from '../action/authAction';
import { AppDispatch, RootState } from '../../appStore/store';
import { LoginPayload, RegisterPayload } from '../service/authService';

export const useLogin = () => {
    const dispatch:AppDispatch = useDispatch();
    const loginLoading = useSelector((state:RootState) => state["auth/login"]).loginLoading;
    const loginError = useSelector((state:RootState) => state["auth/login"]).loginError;
    const loginToken = useSelector((state:RootState) => state["auth/login"]).loginToken;
    const isLoggedIn = useSelector((state:RootState) => state["auth/login"]).isLoggedIn;
     
    const loginAction = async(credentials:LoginPayload, onComplete: (success: boolean, error: boolean, res: any) => void) => {
        try{
            const res = await dispatch(login(credentials));
            if(res.meta.requestStatus === 'fulfilled'){
                await authenticationHook((success, err, res) => {
                    if (success) {
                        onComplete(true, false, res.payload);

                    } else {
                        throw new Error("Login Failed");
                    }
                })
            }
            else if(res.meta.requestStatus === 'rejected'){
                throw new Error("Error in Login !!!");
            }
        }
        catch(error:any){
            onComplete(false, true, error.message);
            console.log(error.message,"Error")
        }
    }

    const authenticationHook = async(onComplete:(success:boolean,error:boolean,res:any)=>void) => {
        try {
            const res = await dispatch(authenticate());
            if (res.meta.requestStatus === 'fulfilled') {
                onComplete(true, false, res.payload);
            } else if (res.meta.requestStatus === 'rejected') {
                throw new Error("Error in Login !!!");
            }
        } catch (error: any) {
            console.log(error.message, "Error")
            onComplete(false, true, error.message);

        }
    }

    return {loginAction,loginLoading,loginError,loginToken,isLoggedIn};
}

export const useRegister = () => {
    const dispatch: AppDispatch = useDispatch();
    const registerLoading = useSelector((state: RootState) => state['auth/register'].registerLoading);
    const registerError = useSelector((state: RootState) => state['auth/register'].registerErrorMessage);
    const registerErrorMessage = useSelector((state: RootState) => state['auth/register'].registerErrorMessage);
    const isRegistered = useSelector((state: RootState) => state['auth/register'].isRegistered);

    const registerUser = async (registerData: RegisterPayload, onComplete: (success: boolean, error: boolean, res: any) => void) => {
        try {
            const resp = await dispatch(register(registerData));
            if (resp.meta.requestStatus === 'fulfilled') {
                onComplete(true, false, resp.payload)
            }
            else if (resp.meta.requestStatus === 'rejected') {
                onComplete(false, true, resp.payload)
            }
        }
        catch (error: any) {
            console.log(error.message, "Error")
            onComplete(false, true, error.message);
        }
    };

    return {  registerLoading,  registerError, registerUser,  registerErrorMessage, isRegistered };
}

export const useForgotPassword = () => {
    const dispatch: AppDispatch = useDispatch();
    const forgotPasswordLoading = useSelector((state: RootState) => state['auth/forgotPassword'].forgotPasswordLoading);
    const forgotPasswordError = useSelector((state: RootState) => state['auth/forgotPassword'].forgotPasswordError);
    const forgotPasswordErrorMessage = useSelector((state: RootState) => state['auth/forgotPassword'].forgotPasswordErrorMessage);
    const isReset = useSelector((state: RootState) => state['auth/forgotPassword'].isReset);

    const forgotPasswordAction = async (forgotPasswordData: any, onComplete: (success: boolean, error: boolean, res: any) => void) => {
        try {
            const resp = await dispatch(forgotPassword(forgotPasswordData));
            if (resp.meta.requestStatus === 'fulfilled') {
                onComplete(true, false, resp.payload)
            }
            else if (resp.meta.requestStatus === 'rejected') {
                onComplete(false, true, resp.payload)
            }
        }
        catch (error: any) {
            console.log(error.message, "Error")
            onComplete(false, true, error.message);
        }
    };

    return { forgotPasswordLoading, forgotPasswordError, forgotPasswordAction, forgotPasswordErrorMessage, isReset };
}