// src/components/CartContext.tsx

"use client";

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';

interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image: any;
}

interface CartState {
  items: CartItem[];
}

interface CartAction {
  type: 'ADD_TO_CART' | 'REMOVE_FROM_CART' | 'CLEAR_CART' | 'SET_CART' | 'DECREASE_QUANTITY';
  payload?: CartItem | CartItem[];
}

const CartContext = createContext<{ state: CartState; dispatch: React.Dispatch<CartAction> } | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const item = action.payload as CartItem;
      const existingItem = state.items.find(i => i._id === item._id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(i => i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...item, quantity: 1 }],
      };
    case 'DECREASE_QUANTITY':
        const itemToDecrease = action.payload as CartItem;
        const existingItemToDecrease = state.items.find(i => i._id === itemToDecrease._id);
        if (existingItemToDecrease && existingItemToDecrease.quantity > 1) {
          return {
            ...state,
            items: state.items.map(i => i._id === itemToDecrease._id ? { ...i, quantity: i.quantity - 1 } : i),
          };
        } else {
          return {
            ...state,
            items: state.items.filter(i => i._id !== itemToDecrease._id),
          };
        }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(i => i._id !== (action.payload as CartItem)._id),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
      };
    case 'SET_CART':
      return {
        ...state,
        items: action.payload as CartItem[],
      };
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const items: CartItem[] = JSON.parse(storedCart);
      dispatch({ type: 'SET_CART', payload: items });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.items));
  }, [state.items]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
