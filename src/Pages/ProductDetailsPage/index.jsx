import { useEffect } from 'react'
import s from './ProductDetailsPage.module.css'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartAction } from '../../store/cartReducer';
import { fetchProductItem } from '../../asyncActions/product';

function ProductDetailsPage(){
    const {id} = useParams()
    const product = useSelector(store => store.productList)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProductItem(id))
    }, [ product, id]);
    const baseUrl = "http://localhost:3333"
    const imageURL = baseUrl + product.image

    const discount = product.discont_price && product.price
    ? Math.round(((product.price - product.discont_price) / product.price) * 100 * 100) / 100
    : null;
    return(
        <div className={s.productDetails}>
            <h2 className={s.productDetailsTitle}>{product.title}</h2>
            <div className={s.productDetailsWrapper}>
                <img className={s.productDetailsImg} src={imageURL} alt="productImg" />
                <div className={s.productDetailsInfo}>
                    <div className={s.productDetailsPrice}>
                        {product.discont_price && (
                            <p className={s.actualPrice}>{product.discont_price}<span className={s.symbol}>$</span></p>
                        )}
                        {(!product.discont_price && product.price) ? (
                            <p className={s.actualPrice}>{product.price}<span className={s.symbol}>$</span></p>
                        ) : (
                        <p className={s.priceWithoutDiscount}>{product.price}$</p>
                        )}
                        {discount && (
                            <p className={s.discount}>-{discount}%</p>
                        )}
                    </div>
                    <button onClick={() => dispatch(addToCartAction(product.id, product))} className={s.productDetailsBtn}>To cart</button>
                    <div className={s.underline}></div>
                    <div className={s.productdetailsDescription}>
                        <h3 className={s.productdetailsDescriptionH3}>Description</h3>
                        <p className={s.productdetailsDescriptionP}>{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetailsPage