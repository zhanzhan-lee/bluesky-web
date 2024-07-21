"use client";

import React from 'react';
import Cart from '@components/Cart';
import Test_Debug from '@components/test_debug';

const CartPage: React.FC = () => {
  return (
    <div>
      <Cart />
      <Test_Debug />
    </div>
  );
};

export default CartPage;
