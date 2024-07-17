// components/NavBar.tsx

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import LoginSidebar from './LoginSidebar';

const NavBar: React.FC = () => {
  const [navExpend, setNavExpend] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavExpend(window.scrollY === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setNavExpend(!navExpend);
  };

  const handleLoginOpen = () => {
    setIsLoginOpen(true);
  };

  const handleLoginClose = () => {
    setIsLoginOpen(false);
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const searchQuery = (event.target as HTMLFormElement).search.value;
    console.log("Searching for:", searchQuery);
    // searching logic
  };

  return (
    <>
      <nav className="bg-blue-800 text-white p-4 fixed w-full z-50">
        <div className="flex items-center space-x-4">
          <button onClick={handleToggle} className="text-white">
            {navExpend ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="text-white" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="text-white" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5.5 0 0 1-.5-.5z" />
              </svg>
            )}
          </button>
          <Link href="/">
            <img src="/blueloge_1.png" alt="Logo" className="h-12" />
          </Link>
          <form onSubmit={handleSearch} className="flex-grow flex items-center">
            <input type="text" name="search" placeholder="Search..." className="flex-grow bg-white text-black h-10 pl-4 rounded-l-md focus:outline-none" />
            <button type="submit" className="p-4 h-10 rounded-r-md bg-yellow-500 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </button>
          </form>
          <div className="flex items-center space-x-4">
            <button onClick={handleLoginOpen} className="text-white">Login</button>
          </div>
        </div>
        {navExpend && (
          <div className="fixed top-16 right-0 bg-blue-800 w-full p-4">
            <div className="flex items-center space-x-4">
              <Link href="/download" className="">Download</Link>
              <Link href="/blog" className="">Blog</Link>
            </div>
          </div>
        )}
      </nav>
      <LoginSidebar isOpen={isLoginOpen} onClose={handleLoginClose} />
    </>
  );
};

export default NavBar;
