import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Product.css'
import { getProducts } from '../../Redux/product/ProductReducer'
import { getCategories } from '../../Redux/categories/CategoriesReducer'
import CartActions from '../../Redux/cart/CartActions'
import { useParams } from 'react-router-dom'
import CategoryList from './CategoryList'
import {ReactComponent as DownIcon} from '../../icons/down-solid.svg'
import 'bootstrap/js/dist/dropdown'

const Product = (props) => {
    const dispatch = useDispatch();
    const storedProductList = useSelector(state => state.ProductReducer.productList);
    const categoriesList = useSelector(state => state.CategoriesReducer.categoriesList);
    const cartItemList = useSelector(state => state.CartReducer.cartItemList);
    const { key } = useParams();
    const [productList, updateProductList] = useState([]);
    useEffect(() => {
        let category = categoriesList.find((cate) => cate.key === key)
        let proList = storedProductList.filter(product => product.category === category.id);
        updateProductList(proList);
    }, [key, storedProductList])
    useEffect(() => {
        dispatch(getProducts());
        if (categoriesList.length <= 0) {
            dispatch(getCategories());
        }
    }, [])
    const addItemToCart = (item) => {
        let cartList = [...cartItemList]
        let itemIndex = cartList.findIndex((product) => product.sku === item.sku);
        if (itemIndex >= 0) {
            cartList[itemIndex].itemCount += 1;
        } else {
            cartList.push({ ...item, itemCount: 1 })
        }
        dispatch({ type: CartActions.ADD_ITEM, payload: cartList });
    }
    return (
        <div className="row">
            <div className="col-sm-3 side-nav">
                <CategoryList ulClasses="side-nav-list" liClasses="side-nav-item"/>
            </div>
            <div className="side-nav-mobile dropdown">
                <div className="m-nav-dropdown-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                    <span>{categoriesList && categoriesList.find((cate)=>cate.key === key).name}</span>
                    <span><DownIcon width="1rem" color="#FFFFFF"/></span>
                </div>
                {/* <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li className="side-nav-item"><a class="dropdown-item" href="#">Action</a></li>
                    <li className="side-nav-item"><a class="dropdown-item" href="#">Another action</a></li>
                    <li className="side-nav-item"><a class="dropdown-item" href="#">Something else here</a></li>
                </ul> */}
                <CategoryList ulClasses="dropdown-menu m-side-nav-list" liClasses="side-nav-item dropdown-item"/>
            </div>
            <div className="col-12 col-sm-9">
                <div className="card-container">
                    {
                        productList && productList.map((product) => {
                            return (
                                <div className="card product-card" key={product.id}>
                                    <div className="card-body">
                                        <div className="prod-card-title">{product.name}</div>
                                        <div className="row">
                                            <div className="col-lg-12 col-6">
                                                <img className="img-fluid" alt={product.name} src={product.imageURL}></img>
                                            </div>
                                            <div className="col-lg-12 col-6 prod-des">
                                                <p>{product.description}</p>
                                            </div>
                                            <div className="col-lg-12 col-12 m-t-5 d-flex justify-content-between align-items-center buy-section">
                                                <span className="t-a-c f-w-600 mrp-text">MRP Rs.{product.price}</span>
                                                <button className="buy-btn" onClick={() => addItemToCart(product)}><span className="desktop-buy-btn">Buy Now</span><span className="mobile-buy-btn">Buy Now @ Rs.{product.price}</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Product