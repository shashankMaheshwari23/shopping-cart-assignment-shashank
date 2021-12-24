import CartActions from "./CartActions";
const CartReducer = (state={cartItemList:[],openCart:false},action) =>{
    switch (action.type) {
        case CartActions.ADD_ITEM:
            return {...state,cartItemList:action.payload}
        case CartActions.OPEN_CART:
            return {...state,openCart:action.payload}
        default:
            return state
    }
}
export default CartReducer
