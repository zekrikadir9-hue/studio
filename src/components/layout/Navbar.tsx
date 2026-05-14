"use client"
import Link from 'next/link';
import { ShoppingBag, User, Menu, Search } from 'lucide-react';
import { AmazighZay } from '@/components/icons/AmazighZay';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <AmazighZay className="w-8 h-8 text-secondary" />
            <span className="font-headline text-2xl font-bold tracking-tight text-primary">THILELI</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link href="/shop" className="text-sm font-medium hover:text-secondary transition-colors">Products</Link>
            <Link href="/categories" className="text-sm font-medium hover:text-secondary transition-colors">Heritage</Link>
            <Link href="/about" className="text-sm font-medium hover:text-secondary transition-colors">Our Story</Link>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </Button>
          <Link href="/admin">
             <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
             </Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}