
import s from './ProductModalPage.module.css'
import ProductList from '../../components/ProductList'
import { useLocation, useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
function ProductModal(){
    const location = useLocation()
    const isAllSalesPage = location.pathname === '/allSales';
    const AllProductsPage = location.pathname === '/allProducts'
    const {id} = useParams()
    const CategoryProductPage = location.pathname === `/categories/${id}`
    const [category, setCategory] = useState({})
    const [categoryProducts, setCategoryProducts] = useState({})
    const [showDiscounted, setShowDiscounted] = useState(false)
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [sortOption, setSortOption] = useState('');
       
    useEffect(()=>{
        fetch(`http://localhost:3333/categories/${id}`)
          .then((res) => res.json())
          .then((data) => {
                setCategory(data.category)
                setCategoryProducts(data.data)})
    }, [id])
    const pageTitle = () => {
        if (isAllSalesPage){
           return 'Products with sale'
        } else if (AllProductsPage){
            return 'All products'
        } else if (CategoryProductPage){
            if (category && category.title) {
                return category.title;
        }
        }
        return 'Page Title'
    }
    const sortingOptions = [
    { value: 'default', label: 'Default' },
    { value: 'price-asc', label: 'Price (Low to High)' },
    { value: 'price-desc', label: 'Price (High to Low)' },
    { value: 'name-asc', label: 'Name (A to Z)' },
    { value: 'name-desc', label: 'Name (Z to A)' },
    { value: 'date-asc', label: 'Date (Old to New)' },
    { value: 'date-desc', label: 'Date (New to Old)' },
    { value: 'discount-asc', label: 'Discount (Low to High)' },
    { value: 'discount-desc', label: 'Discount (High to Low)' },
  ];

    return(
        <div className={s.modalPage}>
            <h2 className={s.modalPageTitle}>{pageTitle()}</h2>
            <div className={s.modalPageFiltration}>
                <div className={s.modalPageFiltrationPrice}>
                    <label>Price</label>
                    <input type="text" placeholder='from' value={minPrice} onChange={(e) => setMinPrice(e.target.value)}/>
                    <input type="text" placeholder='to' value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}/>
                </div>
                {!isAllSalesPage && <div className={s.modalPageFiltrationCheckbox}>
                    <label> Discounted items</label>
                    <label className={s.checkboxLabel}>
                        <input
                            type="checkbox"
                            className={s.checkBox}
                            checked={showDiscounted}
                            onChange={() => setShowDiscounted(!showDiscounted)}
                    />
                        <span className={s.customCheckbox}></span>
                    
                    </label>

                </div>}
                
                <div className={s.modalPageFiltrationSorted}>
                    <label>Sorted</label>
                    <select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                    {sortingOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                    {option.label}
                    </option>
                        ))}
                    </select>
                </div>
            </div>
                <ProductList
                    showDiscounted={showDiscounted}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    sortOption={sortOption}
                    categoryProducts={ categoryProducts}
                />
        </div>
    )
}
export default ProductModal