
"use client";

import React, { useEffect, useState } from 'react';
import { client } from '@sanity/lib/client';
import { urlFor } from '@sanity/lib/image';
import { useCart } from '@contexts/CartContext';

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: any;
  stock: number;
  quantity: number; // Add the quantity property
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { state, dispatch } = useCart();


  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"]{
        _id,
        name,
        price,
        description,
        image,
        stock
      }`;
      const fetchedProducts = await client.fetch(query);
      setProducts(fetchedProducts);
      setLoading(false);
    };

    fetchProducts();
  }, []);

    const handleAddToCart = (product: Product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };
    
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product._id} className="border p-4 rounded-lg shadow-md">
          {product.image && (
            <img src={urlFor(product.image).url()} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
          )}
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
          <p className={`mt-2 ${product.stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {product.stock > 0 ? 'In Stock' : 'Sold Out'}
          </p>
          {product.stock > 0 ? (
            <button onClick={() => handleAddToCart(product)} className="mt-4 w-full  bg-yellow-500 text-white py-2 rounded-md">
              Add to Cart
            </button>
          ) : (
            <button className="mt-4 w-full bg-gray-500 text-white py-2 rounded-md cursor-not-allowed" disabled>
              Sold Out
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
