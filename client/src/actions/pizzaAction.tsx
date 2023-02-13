import axios from 'axios'
import type { RootState, AppDispatch } from '../store';
import { useNavigate } from "react-router-dom";

interface pizzaI{
name:String,
varients:String[],
prices:{
small:number,
medium:number,
large:number}[],
category:String,
image:String,
description:String
}

export const getAllPizzas = () => async (dispatch:AppDispatch):Promise<void> => {
    dispatch({ type: 'GET_PIZZAS_REQUEST' })
    try {
        const res = await axios.get('http://localhost:5000/api/pizzas/getAllPizzas')
        console.log(res)
        dispatch({ type: 'GET_PIZZAS_SUCCESS', payload: res.data })
    } catch (err) {
        dispatch({ type: 'GET_PIZZAS_FAIL', payload: err })
    }
};
export const addPizza = (pizza:pizzaI) => async (dispatch:AppDispatch):Promise<void> => {
    dispatch({ type: 'ADD_PIZZAS_REQUEST' })
    try {
        console.log(pizza);
        const res = await axios.post('http://localhost:5000/api/pizzas/addPizza', { pizza })
        dispatch({ type: 'ADD_PIZZAS_SUCCESS', payload: res.data })
        console.log(res.data)
        alert('Pizza has been added.')
    } catch (err) {
        dispatch({ type: 'ADD_PIZZAS_FAIL', payload: err })
        alert('Failed to add pizza.')
    }
};
export const getPizzaById = (pizzaId:string) => async (dispatch:AppDispatch) :Promise<void>=> {
    dispatch({ type: 'GET_PIZZABYID_REQUEST' })
    try {
        const res = await axios.post('http://localhost:5000/api/pizzas/getpizzabyid', { pizzaId })
        dispatch({ type: 'GET_PIZZABYID_SUCCESS', payload: res.data })
    } catch (err) {
        dispatch({ type: 'GET_PIZZABYID_FAIL', payload: err })
    }
};
export const updatePizza = (updatedPizza:pizzaI) => async (dispatch:AppDispatch):Promise<void> => {
    dispatch({ type: 'UPDATE_PIZZABYID_REQUEST' })
    
const navigate= useNavigate() ;
    try {
        const res = await axios.post('http://localhost:5000/api/pizzas/updatepizza', { updatedPizza })
        dispatch({ type: 'UPDATE_PIZZABYID_SUCCESS', payload: res.data })
        //window.location.href = '/admin/pizzalist',
        navigate('/admin/pizzalist');
    } catch (err) {
        dispatch({ type: 'UPDATE_PIZZABYID_FAIL', payload: err })
    }
};

export const deletePizza = (pizzaId:String) => async (dispatch:AppDispatch):Promise<void> => {
   
const navigate= useNavigate() ;
    try {
        const res = await axios.post('http://localhost:5000/api/pizzas/deletepizza', { pizzaId })
        alert('Pizza Deleted Sucessfully');
       // window.location.href = '/admin/pizzalist'
        navigate('/admin/pizzalist');
        console.log(res)

    } catch (error) {
        alert('Failed to delete Pizza.')

    }

}