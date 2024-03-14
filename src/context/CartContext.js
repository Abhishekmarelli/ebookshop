import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../Reducer/CartReducer";

const cartInitialState = {
    cartList: [],
    total: 0
}

const CartContext = createContext(cartInitialState);

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, cartInitialState);

    function addToCart(product) {
        const updatedList = state.cartList.concat(product);
        const updatedTotal = state.total + product.price;

        dispatch({
            type: "add_cart",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        })
    }

    function removeFromCart(product) {
        const updatedList = state.cartList.filter(item => item.id !== product.id);
        const updatedTotal = state.total - product.price;

        dispatch({
            type: "remove_cart",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        })
    }

    function clearCart() {
        dispatch({
            type: "clear_cart",
            payload: {
                products: [],
                total: 0
            }
        })

    }
    const value = {
        addToCart,
        removeFromCart,
        clearCart,
        cartList: state.cartList,
        total: state.total,

    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}