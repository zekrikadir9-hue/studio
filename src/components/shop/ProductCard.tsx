"use client"
import Image from 'next/image';
import { Heart, ShoppingCart, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState, useEffect } from 'react';

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
  const [mounted, setMounted] = useState(false);
  const discount = oldPrice ? Math.round(((oldPrice - price) / oldPrice) * 100) : 0;

  useEffect(() => {
    setMounted(true);
  }, []);

  const formatNumber = (num: number) => {
    if (!mounted) return num.toString();
    return num.toLocaleString();
  };

  return (
    <div className="group relative bg-white rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-stone-100 hover:shadow-xl transition-all duration-700 md:hover:-translate-y-2">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image 
          src={image} 
          alt={name} 
          fill 
          className="object-cover transition-transform duration-1000 md:group-hover:scale-110"
          data-ai-hint="luxury product"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity" />
        
        {isNew && (
          <div className="absolute top-2 md:top-5 right-2 md:right-5 z-20">
             <Badge className="bg-secondary text-white font-black px-2 md:px-4 py-0.5 md:py-1.5 rounded-full text-[8px] md:text-[10px] tracking-widest shadow-lg">NEW</Badge>
          </div>
        )}

        {discount > 0 && (
          <div className="absolute top-2 md:top-5 left-2 md:left-5 z-20">
             <Badge className="bg-red-500 text-white font-black px-2 md:px-4 py-0.5 md:py-1.5 rounded-full text-[8px] md:text-[10px] tracking-widest shadow-lg">-{discount}%</Badge>
          </div>
        )}
        
        <div className="absolute bottom-2 md:bottom-5 left-0 right-0 px-2 md:px-5 translate-y-20 group-hover:translate-y-0 md:group-hover:translate-y-0 transition-transform duration-500 z-20 hidden md:block">
           <Button className="w-full bg-primary/90 backdrop-blur-xl hover:bg-secondary text-white rounded-xl md:rounded-2xl h-10 md:h-14 font-bold shadow-2xl transition-all gap-2 text-xs md:text-base">
              <ShoppingCart className="w-4 h-4 md:w-5 md:h-5" /> إضافة للسلة
           </Button>
        </div>

        <button className="md:hidden absolute bottom-2 right-2 p-2 bg-primary/90 text-white rounded-lg shadow-lg z-20 active:scale-90 transition-transform">
           <ShoppingCart className="w-4 h-4" />
        </button>

        <button className="absolute top-2 md:top-5 right-2 md:right-5 p-2 md:p-3 rounded-xl md:rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 text-white opacity-0 md:group-hover:opacity-100 transition-all hover:bg-white hover:text-destructive z-10">
          <Heart className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>

      <div className="p-4 md:p-8 text-right space-y-2 md:space-y-3">
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-1">
              <span className="text-[10px] md:text-xs font-bold text-stone-400">{rating}</span>
              <Star className="w-2.5 h-2.5 md:w-3 md:h-3 text-amber-400 fill-amber-400" />
           </div>
           <p className="text-[6px] md:text-[10px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-muted-foreground">{category}</p>
        </div>
        
        <h3 className="font-headline text-sm md:text-xl font-bold text-primary line-clamp-1 group-hover:text-secondary transition-colors">{name}</h3>
        
        <div className="flex items-center justify-end gap-2 md:gap-3">
          {oldPrice && (
            <span className="text-[10px] md:text-sm line-through text-stone-400 font-medium">
               {formatNumber(oldPrice)}
            </span>
          )}
          <span className="text-base md:text-2xl font-black text-secondary">
            {formatNumber(price)} DA
          </span>
        </div>

        <div className="pt-1 md:pt-2 flex items-center justify-end gap-1 md:gap-2 text-[8px] md:text-[10px] font-bold text-emerald-600">
           <Zap className="w-2 h-2 md:w-3 md:h-3 fill-emerald-600" /> Free Shipping
        </div>
      </div>
    </div>
  );
}
