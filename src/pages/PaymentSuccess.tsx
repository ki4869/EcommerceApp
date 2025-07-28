
import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-lg border bg-background shadow-sm">
        <div className="p-6 border-b text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-semibold text-green-600">Payment Successful!</h1>
        </div>
        <div className="p-6 text-center space-y-4">
          <p className="text-gray-600">
            Your payment has been processed successfully. Thank you for your purchase!
          </p>
          {sessionId && (
            <p className="text-sm text-gray-500">
              Session ID: {sessionId}
            </p>
          )}
          <div className="flex flex-col gap-3 pt-4">
            <Link to="/products">
              <Button className="w-full">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" className="w-full">
                <ArrowRight className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
