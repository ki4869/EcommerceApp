
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { useProducts } from '@/hooks/useProducts';

const CategoryPage = () => {
  const { category } = useParams();
  const { products, loading, error } = useProducts();
  
  const filteredProducts = products.filter(product => 
    category === 'phones' ? product.category === 'phone' : product.category === 'laptop'
  );

  const title = category === 'phones' ? 'Smartphones' : 'Laptops';
  const description = category === 'phones' 
    ? 'Discover the latest smartphones from top brands like Apple, Samsung, and Google'
    : 'Explore premium laptops and ultrabooks from Apple, Dell, Microsoft, and more';

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Products</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="text-gray-600">{description}</p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg p-4 animate-pulse">
                <div className="h-64 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {!loading && filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
