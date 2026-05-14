"use client"
import Image from 'next/image';
import { Heart, ShoppingCart, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  rating?: number;
}

export function ProductCard({ id, name, price, oldPrice, image, category, isNew, rating = 5 }: ProductCardProps) {
  const discount = oldPrice ? Math.round(((oldPrice - price) / oldPrice) * 100) : 0;

  return (
    <div className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-stone-100 hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all duration-700 hover:-translate-y-2">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image 
          src={image} 
          alt={name} 
          fill 
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
          data-ai-hint="luxury product"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {isNew && (
          <div className="absolute top-5 right-5 z-20">
             <Badge className="bg-secondary text-white font-black px-4 py-1.5 rounded-full text-[10px] tracking-widest shadow-lg animate-bounce">NEW ARRIVAL</Badge>
          </div>
        )}

        {discount > 0 && (
          <div className="absolute top-5 left-5 z-20">
             <Badge className="bg-red-500 text-white font-black px-4 py-1.5 rounded-full text-[10px] tracking-widest shadow-lg">-{discount}% OFF</Badge>
          </div>
        )}
        
        <div className="absolute bottom-5 left-0 right-0 px-5 translate-y-20 group-hover:translate-y-0 transition-transform duration-500 z-20">
           <Button className="w-full bg-primary/90 backdrop-blur-xl hover:bg-secondary text-white rounded-2xl h-14 font-bold shadow-2xl transition-all gap-2">
              <ShoppingCart className="w-5 h-5" /> إضافة للسلة
           </Button>
        </div>

        <button className="absolute top-5 right-5 p-3 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-destructive z-10">
          <Heart className="w-5 h-5" />
        </button>
      </div>

      <div className="p-8 text-right space-y-3">
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-1">
              <span className="text-xs font-bold text-stone-400">{rating}</span>
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
           </div>
           <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">{category}</p>
        </div>
        
        <h3 className="font-headline text-xl font-bold text-primary line-clamp-1 group-hover:text-secondary transition-colors">{name}</h3>
        
        <div className="flex items-center justify-end gap-3">
          {oldPrice && (
            <span className="text-sm line-through text-stone-400 font-medium">
               {oldPrice.toLocaleString()} DA
            </span>
          )}
          <span className="text-2xl font-black text-secondary">
            {price.toLocaleString()} DA
          </span>
        </div>

        <div className="pt-2 flex items-center justify-end gap-2 text-[10px] font-bold text-emerald-600">
           <Zap className="w-3 h-3 fill-emerald-600" /> Free Shipping to Alger
        </div>
      </div>
    </div>
  );
}