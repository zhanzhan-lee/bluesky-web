"use client";

import React, { useEffect } from 'react';

const DebugCart: React.FC = () => {
  useEffect(() => {
    // 查看 localStorage 中的购物车内容
    console.log('Cart contents:', localStorage.getItem('cart'));

    // 手动设置购物车内容进行测试
    //localStorage.setItem('cart', JSON.stringify([{ _id: '1', name: 'Test Product', price: 100, quantity: 1 }]));

    // 再次查看 localStorage 中的购物车内容
    //console.log('Updated cart contents:', localStorage.getItem('cart'));
  }, []);

  return null;
};

export default DebugCart;
