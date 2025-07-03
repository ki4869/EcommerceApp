
import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro',
    description: 'The most advanced iPhone yet with A17 Pro chip and titanium design',
    price: 999,
    originalPrice: 1099,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop',
    category: 'phone',
    brand: 'Apple',
    specifications: {
      'Display': '6.1-inch Super Retina XDR',
      'Chip': 'A17 Pro',
      'Storage': '128GB',
      'Camera': '48MP Main + 12MP Ultra Wide',
      'Battery': 'Up to 23 hours video playback'
    },
    inStock: true,
    rating: 4.8,
    reviews: 2341
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Premium Android flagship with S Pen and advanced AI features',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&h=500&fit=crop',
    category: 'phone',
    brand: 'Samsung',
    specifications: {
      'Display': '6.8-inch Dynamic AMOLED 2X',
      'Processor': 'Snapdragon 8 Gen 3',
      'Storage': '256GB',
      'Camera': '200MP Main + 50MP Telephoto',
      'Battery': '5000mAh'
    },
    inStock: true,
    rating: 4.7,
    reviews: 1876
  },
  {
    id: '3',
    name: 'MacBook Pro 14"',
    description: 'Supercharged by M3 chip for incredible performance and battery life',
    price: 1999,
    originalPrice: 2199,
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=500&fit=crop',
    category: 'laptop',
    brand: 'Apple',
    specifications: {
      'Display': '14.2-inch Liquid Retina XDR',
      'Chip': 'Apple M3',
      'Memory': '8GB Unified Memory',
      'Storage': '512GB SSD',
      'Battery': 'Up to 22 hours'
    },
    inStock: true,
    rating: 4.9,
    reviews: 892
  },
  {
    id: '4',
    name: 'Dell XPS 13',
    description: 'Ultra-portable laptop with stunning InfinityEdge display',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&h=500&fit=crop',
    category: 'laptop',
    brand: 'Dell',
    specifications: {
      'Display': '13.4-inch FHD+ InfinityEdge',
      'Processor': 'Intel Core i7-1355U',
      'Memory': '16GB LPDDR5',
      'Storage': '512GB SSD',
      'Weight': '2.59 lbs'
    },
    inStock: true,
    rating: 4.6,
    reviews: 1234
  },
  {
    id: '5',
    name: 'Google Pixel 8 Pro',
    description: 'The most helpful Pixel phone with advanced AI and camera features',
    price: 899,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop',
    category: 'phone',
    brand: 'Google',
    specifications: {
      'Display': '6.7-inch LTPO OLED',
      'Chip': 'Google Tensor G3',
      'Storage': '128GB',
      'Camera': '50MP Octa PD + 48MP Telephoto',
      'Battery': '5050mAh'
    },
    inStock: false,
    rating: 4.5,
    reviews: 567
  },
  {
    id: '6',
    name: 'Microsoft Surface Laptop 5',
    description: 'Sleek laptop with premium design and all-day battery',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=500&fit=crop',
    category: 'laptop',
    brand: 'Microsoft',
    specifications: {
      'Display': '13.5-inch PixelSense',
      'Processor': 'Intel Core i7-1255U',
      'Memory': '16GB LPDDR5x',
      'Storage': '512GB SSD',
      'Battery': 'Up to 18 hours'
    },
    inStock: true,
    rating: 4.4,
    reviews: 432
  }
];
