import ApiCall from "../../components/APICalls/ApiCall";
import ApiRequests from "../../components/APICalls/ApiRequests";
import ProductAction from "./ProductAction";

export const getProducts = () => {
    return dispatch=>{
        return ApiCall(ApiRequests.getProducts(),(res)=>{
            dispatch({type:ProductAction.GET_Product_LIST,payLoad:res})
        })
    }
}

const ProductReducer = (state = {productList:[]},action) => {
    switch (action.type) {
        case ProductAction.GET_Product_LIST:
            return {...state,productList:action.payLoad}
        default:
            return state;
    }
}
export default ProductReducer