import './Header.css'
import {useCallback} from 'react'
import { ReactComponent as ShopingCart } from '../../icons/cart.svg'
import { Link, useLocation} from 'react-router-dom'
import MyCart from '../cart/MyCart'
import {useDispatch, useSelector} from 'react-redux'
import CartActions from '../../Redux/cart/CartActions'
const Header = () => {
    const dispatch = useDispatch();
    const cartItemList = useSelector(state=>state.CartReducer.cartItemList);
    const categoriesList = useSelector(state=>state.CategoriesReducer.categoriesList);
    const openCart = useCallback(()=>{
        dispatch({type:CartActions.OPEN_CART,payload:true})
    })
    return (
        <header className="container-fluid header">
            <div className="row">
                <div className="col-4 col-sm-3 col-lg-3">
                    <img className="app-logo img-fluid" src="/static/images/logo.png"></img>
                </div>
                <div className="col-sm-3 col-lg-3 left-nav d-flex align-items-end">
                    <nav>
                        <Link to="/" className={useLocation().pathname == "/" ? "active" : ""}>Home</Link>
                        <Link to={`/products/${categoriesList[0]?.key}`} className={useLocation().pathname.includes("/products") ? "active" : ""}>Product</Link>
                    </nav>
                </div>
                <div className="col-8 col-sm-6 d-flex flex-column align-items-end">
                    <nav className="right-nav-header m-b-2 m-t-5">
                        <Link to="/login" className="a-link f-w-600">Sign In</Link>
                        <Link to="/signup" className="a-link f-w-600">Register</Link>
                    </nav>
                    <div className="cart cursor-pointer" onClick={openCart}>
                        <div>
                            <ShopingCart color="#D10157" width="1rem" /> <span>{`${cartItemList.reduce((totalCount,item)=>totalCount+item.itemCount,0)} Item`}</span>
                        </div>
                    </div>
                </div>
            </div>
            <MyCart></MyCart>
        </header>
    )
}
export default Header