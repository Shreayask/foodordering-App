import { createStore, combineReducers, applyMiddleware } from 'redux'
// import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';
import { getAllPizzaReducer, addPizzaReducer, getPizzaByIDReducer, updatePizzaByIDReducer } from './reducers/pizzaReducer'
import { cartReducer } from "./reducers/cartReducer";
import { registerUserReducer, loginUserReducer, getAllUsersReducer } from './reducers/userReducer';
import { placeOrderReducer, getUserOrdersReducer, allUserOrdersReducer } from './reducers/orderReducer';

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(`${localStorage.getItem('currentUser')}`) : null
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(`${localStorage.getItem('cartItems')} `) : []


interface userI {
  id: string,
  name: string,
  email: string,
  password: string,
  isAdmin: boolean,
  created_at: Date,
  updated_at: Date
}

interface currentUserI {
  success: boolean,
  token: string,
  user: userI[]
}

interface ILoginUserReducer {
  currentUser: currentUserI;
}


interface cartI {
  name: string,
  id: string,
  image: string,
  quantity: number,
  varients: string,
  prices: {
    [key: string]: number;
  }[]
  pizza: number
}
interface ICartReducer {
  cartItems: cartI[];
}




const rootReducer = combineReducers({
  getAllPizzaReducer: getAllPizzaReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  cartReducer: cartReducer,
  addPizzaReducer: addPizzaReducer,
  getPizzaByIDReducer: getPizzaByIDReducer,
  updatePizzaByIDReducer: updatePizzaByIDReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrdersReducer: getUserOrdersReducer,
  getAllUsersReducer: getAllUsersReducer,
  allUserOrdersReducer: allUserOrdersReducer
});

interface IinitialState {
  loginUserReducer: ILoginUserReducer,
  cartReducer: ICartReducer
}

const initialState: IinitialState = {
  loginUserReducer: {
    currentUser: currentUser
  },
  cartReducer: {
    cartItems: cartItems
  }
};



const middleware = [thunk];



const store = createStore<any, any, any, any>(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;



