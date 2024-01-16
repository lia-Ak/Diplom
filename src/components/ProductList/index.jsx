import { useDispatch, useSelector } from 'react-redux'
import s from './ProductList.module.css'
import { useEffect } from 'react'
import { fetchDiscountedProducts, fetchProducts } from '../../asyncActions/product'
import ProductItem from '../ProductItem'
import { useLocation, } from 'react-router-dom'

function ProductList({showDiscounted, minPrice, maxPrice, sortOption, categoryProducts}){
    let productList = useSelector((store) => store.productList)
    const dispatch = useDispatch()
    const location = useLocation();
    const isMainPage = location.pathname === '/';
    const AllSales = location.pathname === '/allSales'
    
    useEffect(() => {
        if (AllSales) {
          dispatch(fetchDiscountedProducts());
        } else {
          dispatch(fetchProducts());
        } 
      }, [dispatch, AllSales]);

      const filterProductsByPrice = (product) => {
        if (minPrice && parseFloat(product.price) < parseFloat(minPrice)) {
          return false;
        }
        if (maxPrice && parseFloat(product.price) > parseFloat(maxPrice)) {
          return false;
        }
        return true;
      };
    const sortProducts = (a, b) => {
      if (sortOption === 'price-asc') {
        return a.price - b.price;
      } else if (sortOption === 'price-desc') {
        return b.price - a.price;
      } else if (sortOption === 'name-asc') {
        return a.title.localeCompare(b.title);
      } else if (sortOption === 'name-desc') {
        return b.title.localeCompare(a.title);
      } else if (sortOption === 'date-asc') {
        return new Date(a.createdAt) - new Date(b.createdAt);
      } else if (sortOption === 'date-desc') {
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else if (sortOption === 'discount-asc') {
        const discountA = a.discont_price && a.price
          ? ((a.price - a.discont_price) / a.price) * 100
          : 0;
        const discountB = b.discont_price && b.price
          ? ((b.price - b.discont_price) / b.price) * 100
          : 0;
        return discountA - discountB;
      } else if (sortOption === 'discount-desc') {
        const discountA = a.discont_price && a.price
          ? ((a.price - a.discont_price) / a.price) * 100
          : 0;
        const discountB = b.discont_price && b.price
          ? ((b.price - b.discont_price) / b.price) * 100
          : 0;
        return discountB - discountA;
      }
      return 0;
    };
    let filteredCategoryProducts = Array.isArray(categoryProducts) ? categoryProducts : [];

  if (showDiscounted) {
    filteredCategoryProducts = filteredCategoryProducts.filter((elem) => elem.discont_price);
  }

  filteredCategoryProducts = filteredCategoryProducts.filter((elem) => filterProductsByPrice(elem));
  filteredCategoryProducts.sort(sortProducts);

  if(!Array.isArray(productList)){
    return null
  }
    const filteredProducts = showDiscounted
      ? productList.filter(
          (elem) => elem.discont_price && filterProductsByPrice(elem)
        )
      : productList.filter((elem) => filterProductsByPrice(elem));
  
    filteredProducts.sort(sortProducts);
    
    const mainSale = productList.filter(
      (elem) => elem.discont_price)
    return(
        <div className={s.productListContainer}>
            {isMainPage
        ? mainSale.slice(0, 3).map((elem) => (
            <ProductItem key={elem.id} elem={elem} />
          ))
        : filteredCategoryProducts.length > 0
        ? filteredCategoryProducts.map((elem) => (
            <ProductItem key={elem.id} elem={elem} />
          ))
        : filteredProducts.map((elem) => (
            <ProductItem key={elem.id} elem={elem} />
          ))}
         </div>
    )
}
export default ProductList