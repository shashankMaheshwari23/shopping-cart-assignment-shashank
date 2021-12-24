import './MyCart.css'
import { useCallback } from 'react'
import ReactModal from 'react-modal'
import { ReactComponent as CrossIcon } from '../../icons/xmark-solid.svg'
import { ReactComponent as MinusIcon } from '../../icons/minus-circle-solid.svg'
import { ReactComponent as PlusIcon } from '../../icons/plus-circle-solid.svg'
import { ReactComponent as MultiplyIcon } from '../../icons/cross.svg'
import { ReactComponent as ArrowIcon } from '../../icons/angle-right-solid.svg'
import { useSelector, useDispatch } from 'react-redux'
import CartActions from '../../Redux/cart/CartActions'
const MyCart = () => {
    const openCart = useSelector(state => state.CartReducer.openCart);
    const cartItemList = useSelector(state => state.CartReducer.cartItemList);
    const dispatch = useDispatch()
    const closeCart = useCallback(() => {
        dispatch({ type: CartActions.OPEN_CART, payload: false })
    })
    const changeItemCount = useCallback((action, index) => {
        let cartList = [...cartItemList]
        if (action === "plus") {
            cartList[index].itemCount += 1
        } else if (action === "minus") {
            if (cartList[index].itemCount === 1) {
                cartList.splice(index, 1);
            } else {
                cartList[index].itemCount -= 1
            }
        }
        dispatch({ type: CartActions.ADD_ITEM, payload: cartList });
    })
    const checkout = () =>{
        closeCart();
        dispatch({type:CartActions.ADD_ITEM,payload:[]});
    }
    return (
        <ReactModal isOpen={openCart} className="my-cart-modal" overlayClassName="my-cart-modal-overlay">
            <div>
                <div className="mycart-modal-header">
                    <div>My Cart <span>{`(${cartItemList.length} Item)`}</span></div>
                    <div>
                        <CrossIcon width={'.8rem'} color="#FFFFFF" onClick={closeCart} className="cursor-pointer" />
                    </div>
                </div>
                <div className="mycart-modal-body">
                    {cartItemList.length == 0 ? <div>
                        <div className="no-item-cart-body">
                            <div>No Item in your cart</div>
                        </div>
                        <div className="start-shoping-btn-section">
                            <div>Start Shoping</div>
                        </div>
                    </div> :
                        <>
                            <div className="cart-item-body">
                                {cartItemList.map((product, index) => {
                                    return (
                                        <div className="cart-item-section" key={product.sku}>
                                            <div className="d-flex">
                                                <img src={product.imageURL} className="cart-item-image" alt={product.name}></img>
                                                <div className="cart-item-details">
                                                    <div className="f-w-800">{product.name}</div>
                                                    <div className="cart-itme-count">
                                                        <MinusIcon width="1rem" color="#BF2957" onClick={() => changeItemCount("minus", index)} className="cursor-pointer" />
                                                        <span>{product.itemCount}</span>
                                                        <PlusIcon width="1rem" color="#BF2957" className="cursor-pointer" onClick={() => changeItemCount("plus", index)} />
                                                        <div className="cart-item-cost">
                                                            <MultiplyIcon width=".8rem" color="#272727" />
                                                            <span className="f-w-600">Rs {product.price}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cart-item-total-price">
                                                <span className="f-w-600">Rs {product.price * product.itemCount}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                                <div className="lowest-price-section">
                                    <img src="/static/images/lowest-price.png" className="lowest-price-img" />
                                    <span className="lowest-price-text">You won't find it cheaper anywhere</span>
                                </div>
                            </div>
                            <div className="checkout-section f-w-600">
                                <div>Promo code can be applied on payment page</div>
                                <div className="checkout-btn cursor-pointer" onClick={checkout}>
                                    <div>Proceed to Checkout</div>
                                    <div>{`Rs. ${cartItemList.reduce((totalAmount,item)=>totalAmount+(item.itemCount*item.price),0)}`}<span className="right-arrow"><ArrowIcon width=".6rem"/></span></div>
                                </div>
                            </div>
                        </>}

                </div>
            </div>
        </ReactModal>
    )
}
export default MyCart