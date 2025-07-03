
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Product } from '@/types';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching products:', error);
        setError('Failed to fetch products');
        return;
      }

      // Transform Supabase data to match our Product interface
      const transformedProducts: Product[] = data.map((item) => ({
        id: item.id,
        name: item.name,
        description: item.description || '',
        price: Number(item.price),
        originalPrice: item.original_price ? Number(item.original_price) : undefined,
        image: item.image,
        category: item.category as 'phone' | 'laptop',
        brand: item.brand,
        specifications: item.specifications as Record<string, string>,
        inStock: item.in_stock,
        rating: Number(item.rating || 0),
        reviews: item.reviews || 0,
      }));

      setProducts(transformedProducts);
    } catch (err) {
      console.error('Error:', err);
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { products, loading, error, refetch: fetchProducts };
};
