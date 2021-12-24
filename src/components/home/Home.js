import './Home.css'
import Carousel from 'react-bootstrap/Carousel'
import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { getCategories } from '../../Redux/categories/CategoriesReducer'
import { getBanners } from '../../Redux/banners/BannerReducer'
import {useHistory} from 'react-router-dom'
const Home = () => {
    const dispatch = useDispatch();
    const categoriesList = useSelector(state => state.CategoriesReducer.categoriesList);
    const bannerList = useSelector(state => state.BannerReducer.bannerList);
    const history = useHistory();
    useEffect(() => {
        dispatch(getBanners())
        dispatch(getCategories());
    }, [])
    const exploreCate = useCallback((key)=>{
        history.push(`products/${key}`);
    })
    return (
        <div>
            <div className="carousel-section">
                <Carousel variant="dark" interval="5000" nextIcon={<></>} prevIcon={<></>}>
                    {bannerList && bannerList.map((banner)=>{
                        return(
                            <Carousel.Item key={banner.id}>
                            <img
                                className="d-block w-100"
                                src={banner.bannerImageUrl}
                                alt={banner.bannerImageAlt}
                            />
                             </Carousel.Item>
                        )
                    })}
                </Carousel>
            </div>
            <div>
                {categoriesList && categoriesList.map((category) => {
                    return (
                        <div className="row cat-card d-flex" key={category.id}>
                            <div className="col-5 cat-image">
                                <img className="img-fluid" src={category.imageUrl} alt={category.name}></img>
                            </div>
                            <div className="col-7 cat-details">
                                <div className="cat-title">{category.name}</div>
                                <div><p className="cat-dec">{category.description}</p></div>
                                <button className="cat-btn" onClick={()=>exploreCate(category.key)}>{`Explore ${category.key}`}</button>
                            </div>
                        </div>
                    )
                })}
                {/* <div className="row cat-card d-flex">
                    <div className="col-4 cat-image">
                        <img className="img-fluid" src="/img/Bake-Loaf-Bread.png"></img>
                    </div>
                    <div className="col-8 cat-details">
                        <div className="cat-title">Bakery Cakes and Dairy</div>
                        <div><p className="cat-dec">The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagles, fresh coffee, milk and more.</p></div>
                        <button className="btn cat-btn">Explore bakery-cakes-dairy</button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
export default Home