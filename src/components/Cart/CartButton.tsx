import { useDispatch , useSelector} from "react-redux";
import classes from "./CartButton.module.css";
import { shopSliceActions } from "../../store/shop-slice";
import { IStoreReducer } from "../../store";

const CartButton = (props: any ) => {

  const dispatch = useDispatch();
  const totalItemsCount = useSelector((state: IStoreReducer)=> state.cart.totalItem);
  const cartButtonHandler = () => {
    dispatch(shopSliceActions.toggle());
  }
  return (
    <button className={classes.button} onClick={cartButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItemsCount}</span>
    </button>
  );
};

export default CartButton;
