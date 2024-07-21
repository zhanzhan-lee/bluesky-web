// src/app/checkout/page.tsx

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';
import { useCart } from '@contexts/CartContext';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const CheckoutPage = () => {
  const { state } = useCart();
  const [customerEmail, setCustomerEmail] = useState('');
  const router = useRouter();

  const handleCheckout = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: state.items,
        customerEmail,
      }),
    });

    const { id } = await response.json();
    const stripe = await stripePromise;
    const { error } = await stripe!.redirectToCheckout({ sessionId: id });
    if (error) {
      console.error("Stripe error:", error.message);
    }
  };

  const calculateTotal = () => {
    return state.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleCheckout} className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl mb-6">Checkout</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <p className="text-gray-700 text-sm font-bold mb-2">Total: ${calculateTotal()}</p>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Checkout
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
