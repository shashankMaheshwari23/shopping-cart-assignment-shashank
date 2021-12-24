import {combineReducers} from 'redux'
import CategoriesReducer from './categories/CategoriesReducer';
import BannerReducer from './banners/BannerReducer';
import ProductReducer from './product/ProductReducer';
import CartReducer from './cart/CartReducer';

const RootReducer = combineReducers({CategoriesReducer,BannerReducer,ProductReducer,CartReducer});

export default RootReducer;