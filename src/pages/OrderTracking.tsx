
import React from 'react';
import { useParams } from 'react-router-dom';
import { Package, Truck, CheckCircle, Clock, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const OrderTracking = () => {
  const { orderId } = useParams();

  const mockOrder = {
    id: orderId,
    status: 'shipped',
    trackingNumber: 'TRK123456789',
    estimatedDelivery: '2024-01-15',
    currentLocation: 'Distribution Center - San Francisco, CA',
    timeline: [
      {
        status: 'Order Placed',
        date: '2024-01-10',
        time: '10:30 AM',
        completed: true,
        description: 'Your order has been confirmed and is being processed.'
      },
      {
        status: 'Processing',
        date: '2024-01-11',
        time: '2:15 PM',
        completed: true,
        description: 'Your order is being prepared for shipment.'
      },
      {
        status: 'Shipped',
        date: '2024-01-12',
        time: '9:00 AM',
        completed: true,
        description: 'Your order has been shipped and is on its way to you.'
      },
      {
        status: 'Out for Delivery',
        date: '2024-01-15',
        time: 'Pending',
        completed: false,
        description: 'Your order is out for delivery and will arrive today.'
      },
      {
        status: 'Delivered',
        date: '2024-01-15',
        time: 'Pending',
        completed: false,
        description: 'Your order has been delivered.'
      }
    ],
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

  const getStatusIcon = (status: string, completed: boolean) => {
    if (completed) {
      return <CheckCircle className="h-6 w-6 text-green-500" />;
    }
    
    switch (status) {
      case 'Out for Delivery':
        return <Truck className="h-6 w-6 text-blue-500" />;
      case 'Delivered':
        return <Package className="h-6 w-6 text-gray-400" />;
      default:
        return <Clock className="h-6 w-6 text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Track Your Order</h1>
            <p className="text-gray-600">Order #{orderId}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Timeline */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Order Status</span>
                    <Badge variant="outline" className="text-blue-600">
                      {mockOrder.status}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {mockOrder.timeline.map((step, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          {getStatusIcon(step.status, step.completed)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className={`font-medium ${step.completed ? 'text-green-700' : 'text-gray-700'}`}>
                              {step.status}
                            </h3>
                            <div className="text-sm text-gray-500">
                              {step.date} {step.time !== 'Pending' && `at ${step.time}`}
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Details Sidebar */}
            <div className="space-y-6">
              {/* Tracking Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Truck className="h-5 w-5 mr-2" />
                    Tracking Info
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Tracking Number:</p>
                    <p className="font-mono text-sm font-medium">{mockOrder.trackingNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Current Location:</p>
                    <p className="font-medium text-sm">{mockOrder.currentLocation}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Estimated Delivery:</p>
                    <p className="font-medium text-sm">
                      {new Date(mockOrder.estimatedDelivery).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Order Items */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Package className="h-5 w-5 mr-2" />
                    Order Items
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockOrder.items.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-sm">{item.name}</p>
                          <p className="text-gray-600 text-xs">Qty: {item.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Address */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Delivery Address
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
