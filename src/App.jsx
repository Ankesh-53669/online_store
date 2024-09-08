import React from 'react';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './index.css'; 

function App() {
  return (
    <div className="App">
      <h1>Online Store</h1>
      <AddProduct />
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
