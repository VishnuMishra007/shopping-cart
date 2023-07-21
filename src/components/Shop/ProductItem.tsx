import { IOwnItems, cartSliceActions } from '../../store/cart-slice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {useDispatch } from 'react-redux';

const ProductItem = (props: IOwnItems) => {
  const { itemId, name, price, quantity, totalPrice } = props;
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(cartSliceActions.addToCart({itemId, name, price, quantity, totalPrice}));
  };

  return (
    <li className={classes.item} key={itemId}>
      <Card>
        <header>
          <h3>{name}</h3>
          <div className={classes.price}>&#8377;{price.toFixed(2)}</div>
        </header>
        <p>{name}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
