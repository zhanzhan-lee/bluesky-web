"use client";

import React from 'react';
import { useCart } from '@contexts/CartContext';
import { urlFor } from '@sanity/lib/image'; 
import Link from 'next/link';

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  const handleRemoveFromCart = (product: any) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  const handleIncreaseQuantity = (product: any) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };


  const handleDecreaseQuantity = (product: any) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: product });
  };

  const calculateTotal = () => {
    return state.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="p-4">
      {state.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        
        <div className="space-y-4">

            <div className="flex justify-between items-center text-lg font-bold">
              <div className="text-2xl font-bold">
                Your Cart
              </div>
              <Link href="/checkout" 
                className="bg-yellow-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-yellow-600">checkout
              </Link>
            </div>


          {state.items.map((item) => (
            <div key={item._id} className="flex justify-between items-center border p-4 rounded-lg shadow-md">
              <div className="flex items-center">
                {item.image && (
                  <img src={urlFor(item.image).url()} alt={item.name} className="w-24 h-24 object-cover rounded" />
                )}
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-700">Price: ${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleDecreaseQuantity(item)}
                  className="bg-gray-200 text-gray-700 rounded px-2"
                >
                  -
                </button>
                <span className="text-lg">{item.quantity}</span>
                <button
                  onClick={() => handleIncreaseQuantity(item)}
                  className="bg-gray-200 text-gray-700 rounded px-2"
                >
                  +
                </button>
              </div>
              <div className="text-lg font-bold">
                ${parseFloat(item.price.toFixed(2))*item.quantity}
              </div>
              <button
                onClick={() => handleRemoveFromCart(item)}
                className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
              >
                &times;
              </button>
            </div>
          ))}
          <div className="text-right text-lg font-bold ">
            Total: ${calculateTotal()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;