export const CartReducer = (state,action)=>{
    const{type,payload} = action;


    switch(type){
        case "add_cart":{
            return {...state,cartList:payload.products,total:payload.total}
        }
        case "remove_cart":{
            return {...state,cartList:payload.products,total:payload.total}
        }
        case "clear_cart":{
            return {...state,cartList:payload.products,total:payload.total}
        }
        default:
            throw new Error("no Case Found");
    }
}

// export const CartReducer = (state, action) => {
//     const { type, payload } = action;

//     switch(type){

//         case "ADD_TO_CART":
//             return {...state, cartList: payload.products, total: payload.total}
        
//         case "REMOVE_FROM_CART":
//             return {...state, cartList: payload.products, total: payload.total}
        
//         case "CLEAR_CART":
//             return {...state, cartList: payload.products, total: payload.total}

//         default:
//             throw new Error("No case found!");
//     }
// }