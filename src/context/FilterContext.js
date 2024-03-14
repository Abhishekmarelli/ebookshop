import { createContext ,useContext, useReducer} from "react"
import { FilterReducer } from "../Reducer/FilterReducer";

const IntialState = {
    productlist : [],
    onlybestseller: true,
    onlyInStock:false,
    rating:null,
    sortBy:null

}

const FilterContext = createContext(IntialState);

export const FilterProvider =({children}) =>{

    const [state,dispatch] =useReducer(FilterReducer,IntialState);

    const intialproducts =(products) =>{
        dispatch({
            type:'Productlist',
            payload:{
                products:products
            }
        })
    }
  
   console.log(state.onlybestseller );
    function bestseller(products){
        return state.onlybestseller ? products.filter(product => product.best_seller === true): products
       
    }
    function instock(products){
        return state.onlyInStock?products.filter(product=>product.in_stock ===true ) : products
    }

    function sortby(products){
        if(state.sortBy === "lowtohigh"){
            return products.sort((a,b)=>Number(a.price)-Number(b.price));
        }
        if(state.sortBy === "hightolow"){
            return products.sort((a,b)=>Number(b.price)-Number(a.price));
        }
        else{
            return products
        }
    }
    function Rating(products){
        if(state.rating ==="4Starandabove"){
            return products.filter(product => product.rating >= 4);
        }
        if(state.rating ==="3Starandabove"){
            return products.filter(product => product.rating >= 3);
        }
        if(state.rating ==="2Starandabove"){
            return products.filter(product => product.rating >= 2);
        }
        if(state.rating ==="1Starandabove"){
            return products.filter(product => product.rating >= 1);
        }
        else{
            return products;
        }
    }
    
    const finalproductlist =   Rating(sortby(instock(bestseller(state.productlist))));
    const value = {
        productlist: finalproductlist,
        intialproducts,
        state,
        dispatch,
        
    }
    return(
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>

    )
}

export const useFillter = ()=>{
    const context = useContext(FilterContext);
    return context;
}


