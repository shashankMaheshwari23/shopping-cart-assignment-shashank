import {useCallback} from 'react'
import {useSelector} from 'react-redux'
import {useHistory, useParams} from 'react-router-dom'
const CategoryList = (props) => {
    const categoriesList = useSelector(state => state.CategoriesReducer.categoriesList);
    const history = useHistory();
    const { key } = useParams();
    const exploreCate = useCallback((key) => {
        history.push(`/products/${key}`);
    })
    return (
        <ul className={props.ulClasses}>
            {categoriesList && categoriesList.map((category) => {
                return <li className={`${props.liClasses}${category.key === key ? ' active' : ''}`} key={category.id} onClick={() => exploreCate(category.key)}>
                    {category.name}
                </li>
            })}
        </ul>
    )
}
export default CategoryList