import { IStoreReducer } from '../../store';
import Card from '../UI/Card';
import classes from "./Cart.module.css";
import CartItem from './CartItem';
import {useSelector} from "react-redux";

const Cart = () => {
  const itemsList = useSelector((state: IStoreReducer)=> state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {itemsList.map((item)=>{
          return <CartItem itemId={item.itemId} name={item.name} quantity={item.quantity} totalPrice={item.totalPrice} price={item.price}/>
        })}
      </ul>
    </Card>
  );
};

export default Cart;
