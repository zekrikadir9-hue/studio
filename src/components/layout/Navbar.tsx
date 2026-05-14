"use client"
import Link from 'next/link';
import { ShoppingBag, User, Menu, Search, Languages, Zap, Heart } from 'lucide-react';
import { AmazighZay } from '@/components/icons/AmazighZay';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { translations, Language } from '@/lib/translations';

export function Navbar() {
  const [lang, setLang] = useState<Language>('ar');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') as Language;
    if (savedLang) setLang(savedLang);

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    const newLang = lang === 'ar' ? 'fr' : 'ar';
    setLang(newLang);
    localStorage.setItem('lang', newLang);
    window.location.reload(); 
  };

  const t = translations[lang];

  return (
    <div className={`flex flex-col w-full sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'translate-y-[-40px]' : ''}`}>
      {/* Dynamic Global Marquee */}
      <div className="bg-primary text-secondary py-2 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap font-black text-[10px] uppercase tracking-[0.4em]">
          {t.discount_bar} &nbsp;&nbsp;&nbsp;&nbsp; {t.discount_bar} &nbsp;&nbsp;&nbsp;&nbsp; {t.discount_bar}
        </div>
      </div>

      <nav className={`transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-2xl shadow-xl h-20' : 'bg-transparent h-24'}`}>
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="p-2 bg-primary rounded-2xl group-hover:rotate-12 transition-transform shadow-lg">
                <AmazighZay className="w-8 h-8 text-secondary" />
              </div>
              <span className={`font-headline text-3xl font-bold tracking-tighter ${scrolled ? 'text-primary' : 'text-primary md:text-white'}`}>THILELI</span>
            </Link>
            
            <div className={`hidden lg:flex items-center gap-10 font-bold text-sm uppercase tracking-widest ${scrolled ? 'text-stone-600' : 'text-stone-600 md:text-white/80'}`}>
              <Link href="/shop" className="hover:text-secondary transition-colors">Marketplace</Link>
              <Link href="/heritage" className="hover:text-secondary transition-colors">Heritage</Link>
              <Link href="/track" className="hover:text-secondary transition-colors">Track Order</Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className={`hidden md:flex items-center bg-stone-100 rounded-full px-4 h-12 border border-stone-200 focus-within:ring-2 ring-secondary transition-all ${scrolled ? 'w-64' : 'w-80'}`}>
               <Search className="w-4 h-4 text-stone-400" />
               <input type="text" placeholder="Search heritage..." className="bg-transparent border-none focus:ring-0 text-sm px-3 w-full font-medium" />
            </div>

            <Button variant="ghost" size="sm" onClick={toggleLang} className={`font-black tracking-widest hover:bg-secondary/10 ${scrolled ? 'text-primary' : 'text-primary md:text-white'}`}>
              {lang === 'ar' ? 'FR' : 'AR'}
            </Button>
            
            <div className="flex items-center gap-2">
               <Button variant="ghost" size="icon" className={`rounded-2xl hover:bg-secondary/10 ${scrolled ? 'text-primary' : 'text-primary md:text-white'}`}>
                  <Heart className="w-6 h-6" />
               </Button>
               
               <Button variant="ghost" size="icon" className="relative rounded-2xl bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-secondary/20">
                  <ShoppingBag className="w-6 h-6" />
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-black border-2 border-white">3</span>
               </Button>
               
               <Link href="/admin">
                  <Button variant="ghost" size="icon" className={`rounded-2xl hover:bg-secondary/10 ${scrolled ? 'text-primary' : 'text-primary md:text-white'}`}>
                     <User className="w-6 h-6" />
                  </Button>
               </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}