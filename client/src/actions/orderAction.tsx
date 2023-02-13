import axios from 'axios';
import type { RootState, AppDispatch } from '../store';
import { useNavigate } from "react-router-dom";

//interface for checkorder
interface checkoutInfoInterface{
    address: string,
    number:any,
    message:string,
    subTotal:number
}

interface User {
    id: string
    name: string,
    email: string,
    password:string

}
interface userType {
    success: boolean,
    token: string,
    user: User[]
}


export const placeOrder = (checkoutInfo: checkoutInfoInterface) => async (dispatch:AppDispatch, getState:RootState) :Promise<void>=> {
    dispatch({ type: 'PLACE_ORDER_REQUEST' })
    const currentUser:userType = getState().loginUserReducer.currentUser
    const user:User[] = currentUser.user
    const cartItems:any[] = getState().cartReducer.cartItems
    //const navigate= useNavigate() ;
    try {

        const response = await axios.post('http://localhost:5000/api/orders/placeorder', { checkoutInfo, user, cartItems });
        dispatch({ type: 'PLACE_ORDER_SUCCESS' });
        alert('Order has been placed.');
        window.location.href = "/orders";
       // navigate("/orders")
        console.log(response)
    } catch (error) {
        dispatch({ type: 'PLACE_ORDER_FAIL' });
        console.log(error);
    }


}

export const getUserOrders = () => async (dispatch:AppDispatch, getState:RootState) :Promise<void>=> {
    const currentUser:  userType = getState().loginUserReducer.currentUser;
    const userid :String= currentUser.user[0].id;
    dispatch({
        type: 'USER_ORDER_REQUEST'
    })
    try {
        console.log('order', userid)
        const response = await axios.post('http://localhost:5000/api/orders/getuserorder',
            { userid: userid });
        console.log(response)
        dispatch({ type: 'USER_ORDER_SUCCESS', payload: response.data })

    } catch (error) {
        dispatch({ type: 'USER_ORDER_FAIL', payload: error });
    }
}
export const getAllOrders = () => async (dispatch:AppDispatch, getState:RootState):Promise<void> => {
    // get all users orders 
    dispatch({
        type: 'ALL_ORDER_REQUEST'
    })
    try {
        const response = await axios.get('http://localhost:5000/api/orders/alluserorder');
        dispatch({ type: 'ALL_ORDER_SUCCESS', payload: response.data })
        console.log(response.data)

    } catch (error) {
        dispatch({ type: 'ALL_ORDER_FAIL', payload: error });
    }
}