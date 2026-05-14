
"use client"
import Link from 'next/link';
import { ShoppingBag, User, Menu, Search, Languages } from 'lucide-react';
import { AmazighZay } from '@/components/icons/AmazighZay';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { translations, Language } from '@/lib/translations';

export function Navbar() {
  const [lang, setLang] = useState<Language>('ar');

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') as Language;
    if (savedLang) setLang(savedLang);
  }, []);

  const toggleLang = () => {
    const newLang = lang === 'ar' ? 'fr' : 'ar';
    setLang(newLang);
    localStorage.setItem('lang', newLang);
    window.location.reload(); // Simple reload to update context
  };

  const t = translations[lang];

  return (
    <div className="flex flex-col w-full sticky top-0 z-50">
      {/* Marquee Discount Bar */}
      <div className="bg-secondary text-secondary-foreground py-2 overflow-hidden border-b border-secondary/20">
        <div className="animate-marquee whitespace-nowrap font-bold text-sm">
          {t.discount_bar} &nbsp;&nbsp;&nbsp;&nbsp; {t.discount_bar} &nbsp;&nbsp;&nbsp;&nbsp; {t.discount_bar}
        </div>
      </div>

      <nav className="bg-background/80 backdrop-blur-xl border-b border-primary/5 h-20 shadow-sm">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-1.5 bg-primary/5 rounded-xl group-hover:bg-primary/10 transition-colors">
                <AmazighZay className="w-8 h-8 text-secondary" />
              </div>
              <span className="font-headline text-2xl font-bold tracking-tight text-primary">{t.store_name}</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="/shop" className="text-sm font-semibold hover:text-secondary transition-colors opacity-80 hover:opacity-100">Products</Link>
              <Link href="/heritage" className="text-sm font-semibold hover:text-secondary transition-colors opacity-80 hover:opacity-100">Heritage</Link>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={toggleLang} className="gap-2 font-bold hover:bg-secondary/10">
              <Languages className="w-4 h-4" />
              {lang === 'ar' ? 'FR' : 'AR'}
            </Button>
            
            <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-primary/5">
              <Search className="w-5 h-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="relative hover:bg-primary/5">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
            </Button>
            
            <Link href="/admin">
               <Button variant="ghost" size="icon" className="hover:bg-primary/5">
                  <User className="w-5 h-5" />
               </Button>
            </Link>
            
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
