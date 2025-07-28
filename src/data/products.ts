
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
  },
  {
    id: '7',
    name: 'iPad Pro 12.9"',
    description: 'Most advanced iPad with M2 chip and stunning display',
    price: 1099,
    originalPrice: 1199,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop',
    category: 'tablet',
    brand: 'Apple',
    specifications: {
      'Display': '12.9-inch Liquid Retina XDR',
      'Chip': 'Apple M2',
      'Storage': '128GB',
      'Camera': '12MP Wide + 10MP Ultra Wide',
      'Battery': 'Up to 10 hours'
    },
    inStock: true,
    rating: 4.8,
    reviews: 1456
  },
  {
    id: '8',
    name: 'OnePlus 12',
    description: 'Premium flagship with Snapdragon 8 Gen 3 and fast charging',
    price: 799,
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500&h=500&fit=crop',
    category: 'phone',
    brand: 'OnePlus',
    specifications: {
      'Display': '6.82-inch LTPO AMOLED',
      'Processor': 'Snapdragon 8 Gen 3',
      'Storage': '256GB',
      'Camera': '50MP + 64MP + 48MP',
      'Battery': '5400mAh with 100W charging'
    },
    inStock: true,
    rating: 4.6,
    reviews: 743
  },
  {
    id: '9',
    name: 'ASUS ROG Zephyrus G14',
    description: 'Gaming laptop with AMD Ryzen 9 and RTX 4060',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&h=500&fit=crop',
    category: 'laptop',
    brand: 'ASUS',
    specifications: {
      'Display': '14-inch QHD+ 165Hz',
      'Processor': 'AMD Ryzen 9 7940HS',
      'Graphics': 'NVIDIA GeForce RTX 4060',
      'Memory': '16GB DDR5',
      'Storage': '1TB SSD'
    },
    inStock: true,
    rating: 4.7,
    reviews: 521
  },
  {
    id: '10',
    name: 'AirPods Pro (2nd Gen)',
    description: 'Active Noise Cancellation with Adaptive Transparency',
    price: 249,
    originalPrice: 279,
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500&h=500&fit=crop',
    category: 'audio',
    brand: 'Apple',
    specifications: {
      'Noise Cancellation': 'Up to 2x more Active Noise Cancellation',
      'Battery': 'Up to 6 hours (30 hours with case)',
      'Connectivity': 'Bluetooth 5.3',
      'Features': 'Spatial Audio, Adaptive Transparency',
      'Case': 'MagSafe Charging Case'
    },
    inStock: true,
    rating: 4.9,
    reviews: 2847
  },
  {
    id: '11',
    name: 'Sony WH-1000XM5',
    description: 'Industry-leading noise canceling headphones',
    price: 399,
    image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop',
    category: 'audio',
    brand: 'Sony',
    specifications: {
      'Noise Cancellation': 'Industry-leading noise canceling',
      'Battery': 'Up to 30 hours',
      'Audio': 'High-Resolution Audio support',
      'Controls': 'Touch controls',
      'Comfort': 'Lightweight design'
    },
    inStock: true,
    rating: 4.7,
    reviews: 1892
  }
];
