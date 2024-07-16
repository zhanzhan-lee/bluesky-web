"use client";

import '@styles/layout.css';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [navExpend, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setIsTop(!navExpend);
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const searchQuery = (event.target as HTMLFormElement).search.value;
    console.log("Searching for:", searchQuery);
    // searching logic
  };

  return (
    <nav>
      <div className={navExpend ? "nav-expanded" : "nav-collapsed"}>
        <button onClick={handleToggle}>
          {navExpend ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="button-details" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="button-details" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
            </svg>
          )}
        </button>
        <Link href="/">
          <img src="/blueloge_1.png" alt="Logo" className="nav-logo" />
        </Link>
        <form onSubmit={handleSearch} className="search-form">
          <input type="text" name="search" placeholder="Search..." className="search-input" />
          <button type="submit" className="search-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-search search-icon" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </button>
        </form>
        <Link href="/login">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"  className="elements-default" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        </Link>
        <Link href="/login">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"  className="elements-default" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
          </svg>
        </Link>
        <Link href="/login" className="elements-default-login">login</Link>
        {navExpend && (
          <div className="navbar">
            <div className="links-container">
              <Link href="/download" className="elements-expanded">Download</Link>
              <Link href="/blog" className="elements-expanded">Blog</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
