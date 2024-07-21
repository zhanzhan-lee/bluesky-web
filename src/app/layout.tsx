"use client";

import '@styles/globals.css';
import React, { ReactNode } from 'react';
import NavBar from '@components/topNavBar';
import { CartProvider } from '@contexts/CartContext';

import { UserProvider } from '@contexts/UserContexts';



const RootLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (

    <html lang="en">
      <head>
        <link rel="icon" href="/blueloge.ico" />
        <title>LTI</title>
      </head>
      <body>
        <UserProvider>
          <CartProvider>
            <NavBar />
            <main className="pt-32"> {/* 确保这里的 pt 值与导航栏的高度一致 */}
              {children}
            </main>
          </CartProvider>
        </UserProvider>
      </body>
    </html>
      
  );
};

export default RootLayout;
