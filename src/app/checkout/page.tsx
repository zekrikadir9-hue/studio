"use client"
import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { WILAYAS } from '@/lib/constants';
import { ShoppingBag, Truck, ShieldCheck } from 'lucide-react';

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
       alert("Order submitted! We will contact you soon.");
       setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-headline font-bold text-primary mb-2">Finalize Your Order</h1>
              <p className="text-muted-foreground">Please provide your delivery details across Algeria.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name (الإسم الكامل)</Label>
                  <Input id="name" placeholder="Amine Benali" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (رقم الهاتف)</Label>
                  <Input id="phone" type="tel" placeholder="0555 00 00 00" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="wilaya">Wilaya (الولاية)</Label>
                <Select required>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your wilaya" />
                  </SelectTrigger>
                  <SelectContent>
                    {WILAYAS.map((w, i) => (
                      <SelectItem key={i} value={w}>{i + 1}. {w}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Detailed Address (العنوان بالتفصيل)</Label>
                <Input id="address" placeholder="Rue, Building, Apartment..." required />
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full h-14 bg-primary hover:bg-secondary text-lg font-bold rounded-xl transition-all" disabled={loading}>
                  {loading ? "Processing Order..." : "Confirm Purchase (إتمام الطلب)"}
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-4 flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-secondary" />
                  Your connection is secure and private.
                </p>
              </div>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-primary text-white p-8 rounded-2xl shadow-xl">
               <h2 className="text-2xl font-headline font-bold mb-6 flex items-center gap-2">
                 <ShoppingBag className="w-6 h-6" /> Order Summary
               </h2>
               <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center opacity-90 border-b border-white/10 pb-4">
                     <span>Kabyle Enamel Necklace x1</span>
                     <span className="font-bold">18,500 DA</span>
                  </div>
                  <div className="flex justify-between items-center opacity-90 border-b border-white/10 pb-4">
                     <span>Shipping (Alger)</span>
                     <span className="font-bold">600 DA</span>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                     <span className="text-xl font-headline">Total Amount</span>
                     <span className="text-3xl font-bold text-secondary">19,100 DA</span>
                  </div>
               </div>
               
               <div className="bg-white/10 rounded-xl p-4 flex gap-4">
                 <Truck className="w-10 h-10 text-secondary shrink-0" />
                 <div>
                   <p className="font-bold">Fast Delivery</p>
                   <p className="text-sm opacity-80">Estimated delivery: 2-5 business days across the 58 Wilayas.</p>
                 </div>
               </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white p-6 rounded-xl border border-stone-200 text-center">
                  <p className="text-sm font-bold text-primary mb-1">Authentic</p>
                  <p className="text-xs text-muted-foreground">Certified Crafts</p>
               </div>
               <div className="bg-white p-6 rounded-xl border border-stone-200 text-center">
                  <p className="text-sm font-bold text-primary mb-1">Support</p>
                  <p className="text-xs text-muted-foreground">24/7 Assistance</p>
               </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}