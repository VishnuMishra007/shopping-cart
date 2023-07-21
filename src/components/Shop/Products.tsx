import { DummyProductsData } from '../../constants/DummyProductsData';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props: any) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DummyProductsData.map(item => {
          return <ProductItem itemId={item.itemId} name={item.name} price={item.price} quantity={item.quantity} totalPrice={item.totalPrice}/>
        })}
      </ul>
    </section>
  );
};

export default Products;
