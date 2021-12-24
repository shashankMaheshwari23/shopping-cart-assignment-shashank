import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Product.css'
import { getProducts } from '../../Redux/product/ProductReducer'
import { getCategories } from '../../Redux/categories/CategoriesReducer'
import { Scrollbars } from 'react-custom-scrollbars'
import CartActions from '../../Redux/cart/CartActions'
import { useParams, useHistory } from 'react-router-dom'

const Product = (props) => {
    const dispatch = useDispatch();
    const storedProductList = useSelector(state => state.ProductReducer.productList);
    const categoriesList = useSelector(state => state.CategoriesReducer.categoriesList);
    const cartItemList = useSelector(state=> state.CartReducer.cartItemList);
    const {key} = useParams();
    const history = useHistory();
    const [productList, updateProductList] = useState([]);
    useEffect(()=>{
        let category = categoriesList.find((cate)=>cate.key === key)
        let proList = storedProductList.filter(product=>product.category === category.id);
        updateProductList(proList);
    },[key,storedProductList])
    useEffect(() => {
        dispatch(getProducts());
        if (categoriesList.length <= 0) {
            dispatch(getCategories());
        }
    }, [])
    const addItemToCart = (item)=>{
        let cartList = [...cartItemList]
        let itemIndex = cartList.findIndex((product)=> product.sku === item.sku);
        if(itemIndex >= 0){
            cartList[itemIndex].itemCount += 1;
        }else{
            cartList.push({...item,itemCount:1})
        }
        dispatch({type:CartActions.ADD_ITEM,payload:cartList});
    }
    const exploreCate = useCallback((key)=>{
        history.push(`/products/${key}`);
    })
    return (
        <div className="row">
            <div className="col-sm-3 side-nav">
                <ul className="side-nav-list">
                    {categoriesList && categoriesList.map((category) => {
                       return <li className={`side-nav-item${category.key === key ? ' active':''}`} key={category.id} onClick={()=>exploreCate(category.key)}>
                            {category.name}
                        </li>
                    })}
                </ul>
            </div>
            <div className="col-12 col-sm-9">
                <div className="card-container">
                {
                    productList && productList.map((product) => {
                        return (
                            <div className="card product-card" key={product.id}>
                                <div className="card-body">
                                    <div className="prod-card-title">{product.name}</div>
                                    <div>
                                        <div><img className="img-fluid" alt={product.name} src={product.imageURL}></img></div>
                                        <div className="prod-des">

                                                <p>{product.description}</p>
                                        </div>
                                    </div>
                                    <div className="m-t-5 d-flex justify-content-between align-items-center">
                                        <span className="t-a-c mrp-text">MRP Rs.{product.price}</span>
                                        <button className="buy-btn" onClick={()=>addItemToCart(product)}>Buy Now</button>
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