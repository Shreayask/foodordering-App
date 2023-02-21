

//interface for cart item
interface cartI {
    name: string,
    id: string,
    image: string,
    varient: string,
    quantity: number,
    prices: any[],
    pizza: number
}
export const cartReducer = (state = { cartItems: [] }, action: any) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            // eslint-disable-next-line no-case-declarations
            const alreadyExists = state.cartItems.find(
                (item: cartI) => item.id === action.payload.id
            );
            if (alreadyExists) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item: cartI) => item.id === action.payload.id ? action.payload : item)
                }

            } else {
                const nextArray = { ...state }
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                }
            }
        case "DELETE_FROM_CART":
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (item: cartI) => item.id !== action.payload.id)
            }
        default:
            return state;
    }
}