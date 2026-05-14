import Image from 'next/image';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
}

export function ProductCard({ name, price, image, category, isNew }: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-primary/5 hover:shadow-xl transition-all duration-500">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image 
          src={image} 
          alt={name} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          data-ai-hint="product image"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors" />
        
        {isNew && (
          <Badge className="absolute top-4 right-4 bg-secondary text-white font-bold">NEW</Badge>
        )}
        
        <button className="absolute top-4 left-4 p-2 rounded-full bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white text-destructive">
          <Heart className="w-4 h-4" />
        </button>
      </div>

      <div className="p-5">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{category}</p>
        <h3 className="font-headline text-lg font-bold text-primary mb-2 line-clamp-1">{name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-secondary font-bold text-xl">{price.toLocaleString()} DA</span>
          <Button size="icon" className="rounded-full bg-primary hover:bg-secondary">
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}