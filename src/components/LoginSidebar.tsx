// components/LoginSidebar.tsx

'use client';

import React, { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { auth, googleProvider } from '../../firebaseConfig';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import Link from 'next/link';
import { UserContext } from '@contexts/UserContexts'; 

interface LoginSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginSidebar: React.FC<LoginSidebarProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { setUser } = useContext(UserContext); // Using User Context

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear previous error messages
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // Store user information in global state
      setUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        accessToken: await user.getIdToken(),
      });

      

      router.push('/');
      onClose();
    } catch (error) {
      console.error("Error logging in: ", error);
      setError("Failed to log in. Please check your email and password.");
    }
  };

  const handleGoogleLogin = async () => {
    setError(null); // 清除先前的错误消息
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      // 存储用户信息到全局状态
      setUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        accessToken: await user.getIdToken(),
      });

      router.push('/');
      onClose();
    } catch (error) {
      console.error("Error logging in with Google: ", error);
      setError("Failed to log in with Google.");
    }
  };


  return (
    <div
      className={`z-50 fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-4">
        <button onClick={onClose} className="mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="text-white" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </button>
        <h2 className="text-xl mb-4">Login</h2>
        
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              className="w-full border px-2 py-1 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 ">Password:</label>
            <input
              type="password"
              id="password"
              className="w-full border px-2 py-1 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <div className="text-red-500 ">{error}</div>} {/* error message */}
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
            Login
          </button>
        </form>
        <Link href="/signup" className="text-blue-500" onClick={onClose}>Sign up</Link>
        <div className="mb-4">
          <button onClick={handleGoogleLogin} className="w-full bg-white text-black border border-gray-300 rounded-md py-2 mt-4 flex items-center justify-center hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="text-black mr-2" viewBox="0 0 16 16">
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
            </svg>
            Using Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSidebar;
