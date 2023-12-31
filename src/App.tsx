import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { IStoreReducer } from './store';
import {useSelector} from "react-redux";

function App() {
  const isShoppingCartVisible = useSelector((state: IStoreReducer)=>  state.shop.isShoppingCartVisible);
  const cart = useSelector(((state: IStoreReducer)=> state.cart));
  
  useEffect(()=>{
    fetch('https://shopping-cart-react-redu-d78a6-default-rtdb.firebaseio.com/cart.json',{
    method: 'PUT',
    body: JSON.stringify(cart),
    })
  },[cart]);
  return (
       <Layout>
        {isShoppingCartVisible && <Cart />}
        <Products />
      </Layout>
  );
}

export default App;
