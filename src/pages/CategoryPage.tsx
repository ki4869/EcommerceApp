
import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const CategoryPage = () => {
  const { category } = useParams();
  
  const filteredProducts = products.filter(product => 
    category === 'phones' ? product.category === 'phone' : product.category === 'laptop'
  );

  const title = category === 'phones' ? 'Smartphones' : 'Laptops';
  const description = category === 'phones' 
    ? 'Discover the latest smartphones from top brands like Apple, Samsung, and Google'
    : 'Explore premium laptops and ultrabooks from Apple, Dell, Microsoft, and more';

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="text-gray-600">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
