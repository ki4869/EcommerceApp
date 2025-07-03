
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse request body
    const { items } = await req.json();

    // For testing, we'll use dummy Stripe credentials
    // In production, you'd use: Deno.env.get("STRIPE_SECRET_KEY")
    const stripeKey = "sk_test_dummy_key_for_testing";
    
    // Create Supabase client
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    // Get user from auth header
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      throw new Error("No authorization header");
    }

    const token = authHeader.replace("Bearer ", "");
    const { data } = await supabaseClient.auth.getUser(token);
    const user = data.user;

    if (!user?.email) {
      throw new Error("User not authenticated");
    }

    // For testing purposes, simulate Stripe session creation
    const mockSession = {
      id: `cs_test_${Math.random().toString(36).substr(2, 9)}`,
      url: `${req.headers.get("origin")}/payment-success?session_id=cs_test_${Math.random().toString(36).substr(2, 9)}`,
      payment_status: "paid",
      amount_total: items.reduce((total: number, item: any) => total + (item.price * item.quantity * 100), 0)
    };

    console.log("Mock payment session created:", mockSession);

    return new Response(JSON.stringify({ url: mockSession.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Payment error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
