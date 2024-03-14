export const FilterReducer =(state,action) =>{
    const{type,payload} = action;

    switch(type){
        case 'Productlist':
            return {productlist:payload.products}
        case 'Only_In_Stock':
            return  {...state,onlyInStock:payload.onlyinstock}
        case 'Best_Seller_Only':
            return {...state,onlybestseller:payload.bestselleronly}
       case 'Rating':
             return {...state,rating:payload.rating}
        case 'SortBy':
             return{...state,sortBy:payload.sort}

        default:
            throw new Error("no Case Found");
    }
}