import s from './CartItem.module.css'
import { useDispatch } from 'react-redux';
import { addToCartAction, removeFromCartAction, instantRemoveFromCartAction } from '../../store/cartReducer';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const baseUrl = "http://localhost:3333";
  const handlePlusClick = () => {
    dispatch(addToCartAction(item.id, item.product));
  };

  const handleMinusClick = () => {
    if (item.count > 1) {
      dispatch(removeFromCartAction(item.id));
    } else {
      dispatch(instantRemoveFromCartAction(item.id));
    }
  };

  const handleRemoveClick = () => {
    dispatch(instantRemoveFromCartAction(item.id));
  };

  const imageURL = baseUrl + item.product.image;

  return (
    <div className={s.cartItem}>
      <img src={imageURL} alt={item.product.title} className={s.cartItemImg} />
      <div className={s.cartItemInfo}>
        <div className={s.cartItemTop}>
          <h3 className={s.cartItemTopH3}>{item.product.title}</h3>
          <img className={s.cartItemTopX} src="./assets/x.png" alt="x" onClick={handleRemoveClick} />
        </div>
        <div className={s.cartItemPrice}>
          {item.product.discont_price && (
            <p className={s.actualPrice}>{item.product.discont_price}<span className={s.symbol}>$</span></p>
          )}
          {!item.product.discont_price && item.product.price ? (
            <p className={s.actualPrice}>{item.product.price}<span className={s.symbol}>$</span></p>
          ) : (
            <p className={s.priceWithoutDiscount}>{item.product.price}$</p>
          )}
        </div>
        <div className={s.cartItemBtns}>
          <div className={s.cartItemBtnsContainer}>
            <img className={s.cartItemBtn} src="./assets/minus.png" alt="minus" onClick={handleMinusClick} />
            <p className={s.cartItemBtnsP}>{item.count}</p>
            <img className={s.cartItemBtn} src="./assets/plus.png" alt="plus" onClick={handlePlusClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
