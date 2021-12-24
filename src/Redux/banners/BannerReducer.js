import ApiCall from "../../components/APICalls/ApiCall";
import ApiRequests from "../../components/APICalls/ApiRequests";
import BannerAction from "./BannerAction";

export const getBanners = () => {
    return dispatch=>{
        return ApiCall(ApiRequests.getBanners(),(res)=>{
            let bannerList = res.filter(banner=>banner.order>=1 && banner.isActive).sort((a,b)=>a.order-b.order);
            dispatch({type:BannerAction.GET_BANNER_LIST,payLoad:bannerList})
        })
    }
}

const BannerReducer = (state = {bannerList:[]},action) => {
    switch (action.type) {
        case BannerAction.GET_BANNER_LIST:
            return {...state,bannerList:action.payLoad}
        default:
            return state;
    }
}
export default BannerReducer