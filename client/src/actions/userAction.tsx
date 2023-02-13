import axios from "axios";
import { useNavigate } from "react-router-dom";
import type { RootState, AppDispatch } from '../store';
export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';


// interface type for register user
interface User {
   
    name: string,
    email: string,
    password:string

}
// interface type for login user
interface UserLogin {
   
    
    email: string,
    password:string

}
export const registerUser = (user:User) => async (dispatch:AppDispatch):Promise<void> => {
    dispatch({ type: USER_REGISTER_REQUEST })
    try {
        if (!user.email || !user.email || !user.password) {

            alert("Please fill all fields.");
        } else {
            const res = await axios.post("http://localhost:5000/api/users/register", user);
            dispatch({ type: USER_REGISTER_SUCCESS });
            alert('Registered Successfully');
            window.location.href = "/";
        }
    }
    catch (error) {


        dispatch({ type: USER_REGISTER_FAIL, payload: error });
        alert('Failed to register');
        window.location.href = "/"
    }
}

export const loginUser = (user:UserLogin) => async (dispatch:AppDispatch) :Promise<void>=> {
    dispatch({ type: USER_LOGIN_REQUEST })
    try {
        console.log("i am action", user);
        if (!user.email || !user.password) {


            alert("Please fill all fields.");
        } else {


            const response = await axios.post('http://localhost:5000/api/users/login', user);
            console.log(response)
            dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data });
            localStorage.setItem('currentUser', JSON.stringify(response.data))
            console.log('from actiom', response.data);
            alert('Login Success');
            window.location.href = "/"
        }

    } catch (error) {
        dispatch({ type: USER_LOGIN_FAIL, payload: error });
        console.log('from failed actiom', error);
        alert(`Login Failed.`);

    }
}

export const logoutUser = () => (dispatch:AppDispatch) => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('cartItems');
    alert('Logged out successfully.');
    window.location.href = "/"
}

export const getAllUsers = () => async (dispatch:AppDispatch):Promise<void> => {
    dispatch({ type: 'GET_USERS_REQUEST' })
    try {
        const res = await axios.get('http://localhost:5000/api/users/getallusers')
        console.log(res)
        dispatch({ type: 'GET_USERS_SUCCESS', payload: res.data })
    } catch (err) {
        dispatch({ type: 'GET_USERS_FAIL', payload: err })
    }
};