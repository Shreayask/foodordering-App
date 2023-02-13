import type { RootState, AppDispatch } from '../store';

// Interface type of pizza
interface Ipizza {
    id:string,
    name:string,
    image:string,
    quantity:number,
    prices:any[],
    pizza:number

}
//interface for cart item
interface cartI{
    name: String,
    id: String,
    image: String,
    varient: String,
    quantity: Number,
    prices: any[],
    pizza: number
}

//action for Adding pizzas to the cart by users
export const addToCart = (pizza:Ipizza, quantity:number, varient:string) => (dispatch:AppDispatch, getState:RootState) => {
   // cartItems
    var cartItem :cartI= {
        name: pizza.name,
        id: pizza.id,
        image: pizza.image,
        varient: varient,
        quantity: Number(quantity),
        prices: pizza.prices,
        pizza: pizza.prices[0][varient] * quantity,
    };
    if (cartItem.quantity > 10) {
        alert('You can only add 10 pizzas')
    } else {
        if (cartItem.quantity < 1) {
            dispatch({ type: "DELETE_FROM_CART", payload: pizza });
            localStorage.setItem(
                'cartItems',
                JSON.stringify(getState().cartReducer.cartItems)
            )
        } else {

            dispatch({
                type: "ADD_TO_CART", payload: {
                    name: pizza.name,
                    id: pizza.id,
                    image: pizza.image,
                    varient: varient,
                    quantity: Number(quantity),
                    prices: pizza.prices,
                    pizza: pizza.prices[0][varient] * quantity,
                }
            });
            console.log('cartitem', cartItem);
            localStorage.setItem(
                'cartItems',
                JSON.stringify(getState().cartReducer.cartItems)

            );
            console.log('cartitems', JSON.stringify(getState().cartReducer.cartItems));
        }
    }
};


//action for deleting pizzas from the cart by users
export const deleteFromCart = (pizza:Ipizza) => (dispatch:AppDispatch, getState:RootState) => {
    dispatch({ type: "DELETE_FROM_CART", payload: pizza });
    localStorage.setItem(
        'cartItems',
        JSON.stringify(getState().cartReducer.cartItems)
    )

}