import type { RootState, AppDispatch } from '../store';
interface Ipizza {
    id: string,
    name: string,
    image: string,
    quantity: number,
    varients: string[],
    prices: any[],
    pizza: number,
    description: string,
    varient: string

}
interface itemInterface {

    id: string,
    name: string,
    image: string,
    quantity: number,
    varient: string,
    prices: any[],
    pizza: number,
    varients: string[]
}

export const addToCart = (pizza: itemInterface, quantity: number, varient: string) => (dispatch: AppDispatch, getState: RootState) => {
    var cartItem = {
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

export const deleteFromCart = (pizza: itemInterface) => (dispatch: AppDispatch, getState: RootState) => {
    dispatch({ type: "DELETE_FROM_CART", payload: pizza });
    localStorage.setItem(
        'cartItems',
        JSON.stringify(getState().cartReducer.cartItems)
    )

}