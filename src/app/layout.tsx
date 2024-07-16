"use client";

import '@styles/layout.css';
import React, { ReactNode } from 'react';
import NavBar from '@components/topNavBar';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/blueloge.ico" />
        <title>LTI</title>
      </head>
      <body>
        <NavBar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
