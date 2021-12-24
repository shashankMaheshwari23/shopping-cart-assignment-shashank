import ApiCall from "../../components/APICalls/ApiCall";
import ApiRequests from "../../components/APICalls/ApiRequests";
import CategoriesAction from "./CategoriesAction";

export const getCategories = () => {
    return dispatch=>{
        return ApiCall(ApiRequests.getCategories(),(res)=>{
            let catList = res.filter(cate=>cate.order>=1).sort((a,b)=>a.order-b.order);
            dispatch({type:CategoriesAction.UPDATE_CAT_LIST,payLoad:catList})
        })
    }
}

const CategoriesReducer = (state = {categoriesList:[]},action) => {
    switch (action.type) {
        case CategoriesAction.UPDATE_CAT_LIST:
            return {...state,categoriesList:action.payLoad}
        default:
            return state;
    }
}
export default CategoriesReducer