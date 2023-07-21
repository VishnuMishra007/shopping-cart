import { IOwnItems, cartSliceActions } from '../../store/cart-slice';
import classes from './CartItem.module.css';
import { useDispatch , useSelector} from "react-redux";

const CartItem = (props: IOwnItems) => {
  const { itemId, name, price, quantity, totalPrice } = props;
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(cartSliceActions.addToCart({ itemId, name, price, quantity, totalPrice }));
  };
  const deleteItemFromCartHandler = () => {
    dispatch(cartSliceActions.deleteItemFromCart(itemId));
  };
  return (
    <li className={classes.item} key={itemId}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
        &#8377;{totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(&#8377;{price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={deleteItemFromCartHandler}>-</button>
          <button onClick={addToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
