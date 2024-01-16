import { useDispatch, useSelector } from 'react-redux'
import CategoryItem from '../CategoryItem'
import s from './CategoryList.module.css'
import { fetchCategory } from '../../asyncActions/category'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

function CategoryList(){
    let categoryList = useSelector((store) => store.categoryList)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCategory())
    }, [dispatch])
    const location = useLocation();
    const isCategories = location.pathname === '/categories';
    
    return(
        <div className={s.categoryListContainer}>
            {!isCategories
                ? categoryList.slice(0, 4).map(elem => (
                <Link key={elem.id} to={`/categories/${elem.id}`}>
                    <CategoryItem key={elem.id} elem={elem} />
                </Link>
                ))
            : categoryList.map(elem => (
                <Link key={elem.id} to={`/categories/${elem.id}`}>
                    <CategoryItem key={elem.id} elem={elem} />
                </Link>
                ))}
            
        </div>
    )
}
export default CategoryList