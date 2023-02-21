import type { RootState, AppDispatch } from '../store';


export enum ItemVarients {
    small = "small",
    medium = "medium",
    large = "large"
}

//Interface of pizza as an item
export interface itemInterface {
    id: string,
    name: string,
    image: string,
    quantity: number,
    varient: string,
    prices: {
        [key: string]: number;
    }[],
    pizza: number,
    varients: string[]
}

//Action to add pizza to the cart
export const addToCart = (pizza: itemInterface, quantity: number, varient: string) => (dispatch: AppDispatch, getState: RootState) => {
    const cartItem = {
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

//Action to delete pizza from cart
export const deleteFromCart = (pizza: itemInterface) => (dispatch: AppDispatch, getState: RootState) => {
    dispatch({ type: "DELETE_FROM_CART", payload: pizza });
    localStorage.setItem(
        'cartItems',
        JSON.stringify(getState().cartReducer.cartItems)
    )

}