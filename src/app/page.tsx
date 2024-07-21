import React from 'react';
import ProductList from '@components/productList-1';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ProductList />
    </div>
  );
};

export default HomePage;
