
-- Create products table
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  original_price DECIMAL(10,2),
  image TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('phone', 'laptop')),
  brand TEXT NOT NULL,
  specifications JSONB DEFAULT '{}',
  in_stock BOOLEAN NOT NULL DEFAULT true,
  rating DECIMAL(2,1) DEFAULT 0 CHECK (rating >= 0 AND rating <= 5),
  reviews INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index for better query performance
CREATE INDEX idx_products_category ON public.products(category);
CREATE INDEX idx_products_brand ON public.products(brand);
CREATE INDEX idx_products_price ON public.products(price);

-- Enable Row Level Security (making it public readable for now)
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access to products
CREATE POLICY "Products are publicly readable" 
  ON public.products 
  FOR SELECT 
  USING (true);

-- Insert sample products
INSERT INTO public.products (name, description, price, original_price, image, category, brand, specifications, in_stock, rating, reviews) VALUES
('iPhone 15 Pro', 'The latest iPhone with advanced camera system and A17 Pro chip', 999.00, 1099.00, 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500', 'phone', 'Apple', '{"display": "6.1-inch Super Retina XDR", "chip": "A17 Pro", "camera": "48MP Main", "storage": "128GB"}', true, 4.8, 234),
('Samsung Galaxy S24 Ultra', 'Premium Android phone with S Pen and advanced AI features', 1199.00, null, 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500', 'phone', 'Samsung', '{"display": "6.8-inch Dynamic AMOLED 2X", "processor": "Snapdragon 8 Gen 3", "camera": "200MP Wide", "storage": "256GB"}', true, 4.7, 189),
('MacBook Pro 14"', 'Powerful laptop with M3 chip for professional workflows', 1999.00, 2199.00, 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500', 'laptop', 'Apple', '{"display": "14.2-inch Liquid Retina XDR", "chip": "M3", "memory": "16GB", "storage": "512GB SSD"}', true, 4.9, 156),
('Dell XPS 13', 'Ultra-portable laptop with stunning InfinityEdge display', 1199.00, null, 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500', 'laptop', 'Dell', '{"display": "13.4-inch FHD+", "processor": "Intel Core i7", "memory": "16GB", "storage": "512GB SSD"}', true, 4.6, 98),
('Google Pixel 8', 'AI-powered photography and pure Android experience', 699.00, 799.00, 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500', 'phone', 'Google', '{"display": "6.2-inch Actua", "chip": "Google Tensor G3", "camera": "50MP Octa PD", "storage": "128GB"}', true, 4.5, 267),
('Surface Laptop 5', 'Elegant design meets powerful performance', 1299.00, null, 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500', 'laptop', 'Microsoft', '{"display": "13.5-inch PixelSense", "processor": "Intel Core i5", "memory": "8GB", "storage": "256GB SSD"}', false, 4.4, 73);
