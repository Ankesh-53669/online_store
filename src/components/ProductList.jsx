import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyProduct } from '../redux/actions';

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      {products.length === 0 && <p>No products available</p>}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => dispatch(buyProduct(product.id))}>Buy</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
