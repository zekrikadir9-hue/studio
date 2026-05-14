
"use client"
import Link from 'next/link';
import { ShoppingBag, User, Menu, Search, Languages, Zap, Heart, X } from 'lucide-react';
import { AmazighZay } from '@/components/icons/AmazighZay';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { translations, Language } from '@/lib/translations';

export function Navbar() {
  const [lang, setLang] = useState<Language>('ar');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedLang = typeof window !== 'undefined' ? localStorage.getItem('lang') as Language : 'ar';
    if (savedLang) setLang(savedLang);

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    const newLang = lang === 'ar' ? 'fr' : 'ar';
    setLang(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', newLang);
      window.location.reload(); 
    }
  };

  const t = translations[lang];

  return (
    <div className={`flex flex-col w-full sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'translate-y-[-32px] md:translate-y-[-40px]' : ''}`}>
      {/* Dynamic Global Marquee */}
      <div className="bg-primary text-secondary py-1 md:py-2 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap font-black text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em]">
          {t.discount_bar} &nbsp;&nbsp;&nbsp;&nbsp; {t.discount_bar} &nbsp;&nbsp;&nbsp;&nbsp; {t.discount_bar}
        </div>
      </div>

      <nav className={`transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-2xl shadow-xl h-16 md:h-20' : 'bg-transparent h-20 md:h-24'}`}>
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          
          <div className="flex items-center gap-4 md:gap-12">
            <button className="lg:hidden p-2 text-primary" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
            <Link href="/" className="flex items-center gap-2 md:gap-3 group">
              <div className="p-1.5 md:p-2 bg-primary rounded-xl md:rounded-2xl group-hover:rotate-12 transition-transform shadow-lg">
                <AmazighZay className="w-6 h-6 md:w-8 md:h-8 text-secondary" />
              </div>
              <span className={`font-headline text-xl md:text-3xl font-bold tracking-tighter ${scrolled ? 'text-primary' : 'text-primary md:text-white'}`}>THILELI</span>
            </Link>
            
            <div className={`hidden lg:flex items-center gap-10 font-bold text-sm uppercase tracking-widest ${scrolled ? 'text-stone-600' : 'text-stone-600 md:text-white/80'}`}>
              <Link href="/shop" className="hover:text-secondary transition-colors">Marketplace</Link>
              <Link href="/heritage" className="hover:text-secondary transition-colors">Heritage</Link>
              <Link href="/track" className="hover:text-secondary transition-colors">Track Order</Link>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <div className={`hidden lg:flex items-center bg-stone-100 rounded-full px-4 h-12 border border-stone-200 focus-within:ring-2 ring-secondary transition-all ${scrolled ? 'w-64' : 'w-80'}`}>
               <Search className="w-4 h-4 text-stone-400" />
               <input type="text" placeholder="Search heritage..." className="bg-transparent border-none focus:ring-0 text-sm px-3 w-full font-medium" />
            </div>

            <Button variant="ghost" size="sm" onClick={toggleLang} className={`font-black tracking-widest hover:bg-secondary/10 text-xs md:text-sm ${scrolled ? 'text-primary' : 'text-primary md:text-white'}`}>
              {lang === 'ar' ? 'FR' : 'AR'}
            </Button>
            
            <div className="flex items-center gap-1 md:gap-2">
               <Button variant="ghost" size="icon" className={`hidden md:flex rounded-2xl hover:bg-secondary/10 ${scrolled ? 'text-primary' : 'text-primary md:text-white'}`}>
                  <Heart className="w-6 h-6" />
               </Button>
               
               <Button variant="ghost" size="icon" className="relative rounded-xl md:rounded-2xl bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-secondary/20">
                  <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-[8px] md:text-[10px] w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center font-black border-2 border-white">3</span>
               </Button>
               
               <Link href="/admin">
                  <Button variant="ghost" size="icon" className={`rounded-xl md:rounded-2xl hover:bg-secondary/10 ${scrolled ? 'text-primary' : 'text-primary md:text-white'}`}>
                     <User className="w-5 h-5 md:w-6 md:h-6" />
                  </Button>
               </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm lg:hidden animate-in fade-in duration-300">
          <div className="absolute top-0 right-0 h-full w-[80%] bg-white shadow-2xl p-8 flex flex-col animate-in slide-in-from-right duration-500">
            <div className="flex justify-between items-center mb-12">
               <span className="font-headline text-2xl font-bold text-primary">THILELI</span>
               <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-stone-100 rounded-full">
                 <X className="w-6 h-6 text-primary" />
               </button>
            </div>

            <div className="space-y-8 text-right" dir="rtl">
              <Link href="/shop" className="block text-2xl font-bold text-primary hover:text-secondary" onClick={() => setMobileMenuOpen(false)}>المتجر العالمي</Link>
              <Link href="/heritage" className="block text-2xl font-bold text-primary hover:text-secondary" onClick={() => setMobileMenuOpen(false)}>قصة التراث</Link>
              <Link href="/track" className="block text-2xl font-bold text-primary hover:text-secondary" onClick={() => setMobileMenuOpen(false)}>تتبع طلبك</Link>
              <Link href="/about" className="block text-2xl font-bold text-primary hover:text-secondary" onClick={() => setMobileMenuOpen(false)}>من نحن</Link>
            </div>

            <div className="mt-auto pt-8 border-t border-stone-100">
               <div className="bg-stone-50 p-6 rounded-2xl flex items-center justify-between">
                  <div className="flex gap-4">
                    <Heart className="w-6 h-6 text-stone-400" />
                    <ShoppingBag className="w-6 h-6 text-stone-400" />
                  </div>
                  <Button variant="outline" className="rounded-full font-bold" onClick={toggleLang}>
                    {lang === 'ar' ? 'English' : 'العربية'}
                  </Button>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
