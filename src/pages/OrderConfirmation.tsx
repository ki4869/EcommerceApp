
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Package, Truck, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const OrderConfirmation = () => {
  const { orderId } = useParams();

  const mockOrder = {
    id: orderId,
    status: 'confirmed',
    total: 1299.99,
    estimatedDelivery: '2024-01-15',
    items: [
      {
        name: 'iPhone 15 Pro',
        price: 999,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=100&h=100&fit=crop'
      }
    ],
    shippingAddress: {
      name: 'John Doe',
      street: '123 Main St',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94105'
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-green-600 mb-2">Order Confirmed!</h1>
            <p className="text-gray-600">
              Thank you for your purchase. Your order has been successfully placed.
            </p>
          </div>

          {/* Order Details */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Order #{orderId}</span>
                <Badge variant="outline" className="text-green-600">
                  Confirmed
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Order Date:</p>
                  <p className="font-medium">{new Date().toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-gray-600">Total Amount:</p>
                  <p className="font-medium">₹{mockOrder.total}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                <Clock className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium text-blue-900">Estimated Delivery</p>
                  <p className="text-blue-700">
                    {new Date(mockOrder.estimatedDelivery).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Order Items */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="h-5 w-5 mr-2" />
                Order Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              {mockOrder.items.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">₹{item.price}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Shipping Address */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Shipping Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm space-y-1">
                <p className="font-medium">{mockOrder.shippingAddress.name}</p>
                <p>{mockOrder.shippingAddress.street}</p>
                <p>
                  {mockOrder.shippingAddress.city}, {mockOrder.shippingAddress.state}{' '}
                  {mockOrder.shippingAddress.zipCode}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>What's Next?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm font-bold">1</span>
                </div>
                <div>
                  <p className="font-medium">Order Processing</p>
                  <p className="text-gray-600 text-sm">
                    We're preparing your order for shipment. You'll receive an email confirmation shortly.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm font-bold">2</span>
                </div>
                <div>
                  <p className="font-medium">Shipping Notification</p>
                  <p className="text-gray-600 text-sm">
                    Once your order ships, you'll receive tracking information via email.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm font-bold">3</span>
                </div>
                <div>
                  <p className="font-medium">Delivery</p>
                  <p className="text-gray-600 text-sm">
                    Your order will be delivered to your specified address.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to={`/track-order/${orderId}`} className="flex-1">
              <Button variant="outline" className="w-full">
                <Truck className="h-4 w-4 mr-2" />
                Track Your Order
              </Button>
            </Link>
            <Link to="/products" className="flex-1">
              <Button className="w-full">Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
