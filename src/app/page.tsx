import { Navbar } from '@/components/layout/Navbar';
import { ProductCard } from '@/components/shop/ProductCard';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CONTACT_LINKS, CATEGORIES } from '@/lib/constants';
import { AmazighZay } from '@/components/icons/AmazighZay';
import { Sparkles, ShieldCheck, Globe, ArrowLeft, MessageCircle, Truck, Star, BadgeCheck, Zap } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const featuredProducts = [
    { id: '1', name: 'خاتم الفضة المينا الأمازيغي الملكي', price: 18500, oldPrice: 24000, category: 'خواتم ومجوهرات', image: PlaceHolderImages[0].imageUrl, isNew: true, rating: 5 },
    { id: '2', name: 'نظارات "أطلس" الخشبية - إصدار محدود', price: 12000, oldPrice: 15500, category: 'نظارات عصرية', image: PlaceHolderImages[4].imageUrl, rating: 4.8 },
    { id: '3', name: 'قبعة "تيفيناغ" المطرزة يدوياً', price: 3500, category: 'قبعات وأغطية رأس', image: PlaceHolderImages[3].imageUrl, rating: 4.5 },
    { id: '4', name: 'زيت الأرغان العضوي - ذهب الجبال', price: 4500, oldPrice: 6000, category: 'العناية بالبشرة', image: PlaceHolderImages[2].imageUrl, isNew: true, rating: 4.9 },
    { id: '5', name: 'أحمر شفاه العكر الفاسي الأصيل', price: 2800, category: 'مكياج تقليدي', image: PlaceHolderImages[5].imageUrl, rating: 4.7 },
    { id: '6', name: 'عقد "توارق" العتيق المرصع', price: 32000, oldPrice: 40000, category: 'مجوهرات تراثية', image: PlaceHolderImages[1].imageUrl, rating: 5 },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-secondary selection:text-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section - Global Style */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a261f]">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-l from-primary/95 via-primary/40 to-transparent z-10" />
             <img 
               src="https://picsum.photos/seed/amazigh-hero-v3/1920/1080" 
               alt="Hero Background" 
               className="w-full h-full object-cover opacity-60 scale-105 transition-transform duration-[20s] hover:scale-100"
               data-ai-hint="luxury heritage"
             />
          </div>
          
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-4xl text-white text-right space-y-8 animate-in fade-in slide-in-from-right duration-1000">
              <div className="inline-flex items-center gap-3 bg-secondary/30 backdrop-blur-3xl px-6 py-2 rounded-full border border-secondary/40 shadow-2xl">
                <Zap className="w-4 h-4 text-secondary fill-secondary animate-pulse" />
                <span className="text-xs font-black tracking-widest uppercase">Thileli Global Marketplace</span>
              </div>
              <h1 className="font-headline text-6xl md:text-9xl font-bold leading-[1.1] tracking-tight">
                أصالة تتحدث <br/> <span className="text-secondary drop-shadow-2xl">بلغة الفخامة</span>
              </h1>
              <p className="text-xl md:text-2xl font-light opacity-90 leading-relaxed max-w-2xl ml-auto border-r-8 border-secondary pr-10 shadow-secondary">
                نحن نعيد صياغة التراث الجزائري الأمازيغي بمقاييس الجودة العالمية. اكتشف مجموعتنا الحصرية المصممة لتعكس شخصيتك الفريدة.
              </p>
              <div className="flex flex-wrap gap-6 justify-start pt-10">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-16 h-20 text-2xl rounded-full shadow-[0_20px_50px_rgba(148,114,49,0.4)] btn-hover-effect">
                  تسوق التشكيلة الآن
                </Button>
                <div className="flex items-center gap-6 bg-white/10 backdrop-blur-2xl p-5 rounded-[2.5rem] border border-white/20 shadow-2xl">
                   <div className="flex -space-x-4">
                     {[1,2,3,4].map(i => (
                       <div key={i} className="w-12 h-12 rounded-full border-2 border-primary bg-stone-300 shadow-lg ring-2 ring-secondary/20 overflow-hidden">
                          <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="user" />
                       </div>
                     ))}
                   </div>
                   <div className="text-right">
                      <p className="text-sm font-bold text-white">+25k Happy Customers</p>
                      <p className="text-[10px] text-secondary font-black uppercase tracking-widest">Across 58 Wilayas</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Animated Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
            <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center p-2">
              <div className="w-1 h-2 bg-secondary rounded-full" />
            </div>
          </div>
        </section>

        {/* Dynamic Global Trust Marquee */}
        <div className="bg-white py-14 border-b border-stone-100 overflow-hidden">
           <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                 <div className="flex flex-col items-center text-center gap-4 group">
                    <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl">
                      <Truck className="w-8 h-8" />
                    </div>
                    <div>
                       <p className="font-black text-xs uppercase tracking-widest text-primary">توصيل لكل الولايات</p>
                       <p className="text-[10px] text-muted-foreground font-bold">Safe & Fast Delivery</p>
                    </div>
                 </div>
                 <div className="flex flex-col items-center text-center gap-4 group">
                    <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl">
                      <BadgeCheck className="w-8 h-8" />
                    </div>
                    <div>
                       <p className="font-black text-xs uppercase tracking-widest text-primary">جودة أصلية</p>
                       <p className="text-[10px] text-muted-foreground font-bold">100% Authentic Handcraft</p>
                    </div>
                 </div>
                 <div className="flex flex-col items-center text-center gap-4 group">
                    <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    <div>
                       <p className="font-black text-xs uppercase tracking-widest text-primary">دفع عند الاستلام</p>
                       <p className="text-[10px] text-muted-foreground font-bold">Secure Cash on Delivery</p>
                    </div>
                 </div>
                 <div className="flex flex-col items-center text-center gap-4 group">
                    <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl">
                      <Star className="w-8 h-8" />
                    </div>
                    <div>
                       <p className="font-black text-xs uppercase tracking-widest text-primary">تقييم 5 نجوم</p>
                       <p className="text-[10px] text-muted-foreground font-bold">Top Rated Experience</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Flash Deals / Hot Products - AliExpress Style */}
        <section className="py-32 bg-stone-50 amazigh-pattern-bg">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
               <div className="text-right space-y-4">
                  <div className="inline-flex items-center gap-2 text-secondary font-black text-xs uppercase tracking-[0.4em]">
                     <Sparkles className="w-5 h-5 animate-pulse" /> Curated Exclusives
                  </div>
                  <h2 className="font-headline text-6xl md:text-8xl font-bold text-primary">مختاراتنا لك</h2>
                  <p className="text-muted-foreground text-xl max-w-xl">أرقى المنتجات التي تجمع بين الحداثة والعراقة الأمازيغية.</p>
               </div>
               <Link href="/shop">
                 <Button variant="outline" className="rounded-full px-12 h-16 text-lg font-bold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all shadow-xl">
                   استكشف المتجر بالكامل <ArrowLeft className="w-5 h-5 mr-3" />
                 </Button>
               </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
              {featuredProducts.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
          </div>
        </section>

        {/* Global Category Universe */}
        <section className="py-40 bg-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-32 space-y-6">
               <h2 className="font-headline text-6xl md:text-8xl font-bold text-primary">تسوق حسب الفئة</h2>
               <div className="w-32 h-2 bg-secondary mx-auto rounded-full" />
               <p className="text-muted-foreground text-2xl font-light">استكشف عوالم ثيليلي الساحرة</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
              {CATEGORIES.map((cat) => (
                <Link key={cat.id} href={`/shop?category=${cat.id}`} className="group text-center space-y-6">
                   <div className="relative aspect-[3/4] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-transparent group-hover:border-secondary transition-all duration-700">
                      <img src={cat.imageUrl} alt={cat.name} className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:opacity-0 transition-opacity" />
                      <div className="absolute bottom-6 left-0 right-0 text-white font-headline text-xl font-bold px-4">{cat.name}</div>
                   </div>
                   <h3 className="font-black text-sm uppercase tracking-widest text-primary/40 group-hover:text-secondary transition-colors">{cat.id.replace('-', ' ')}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Global Premium Banner */}
        <section className="container mx-auto px-4 py-40">
           <div className="premium-gradient rounded-[5rem] p-16 md:p-32 relative overflow-hidden group shadow-[0_80px_150px_rgba(6,78,59,0.3)]">
              <div className="absolute inset-0 opacity-10 pointer-events-none amazigh-pattern-bg" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                 <div className="text-white text-right space-y-12 animate-in fade-in duration-1000">
                    <h2 className="font-headline text-6xl md:text-9xl font-bold leading-tight">كوني جزءاً من <br/> <span className="text-secondary italic">أسطورة ثيليلي</span></h2>
                    <p className="text-white/80 text-2xl md:text-3xl font-light leading-relaxed">انضمي إلى قائمة النخبة للحصول على دعوات حصرية لعروضنا التراثية الجديدة بخصومات تصل لـ 50%.</p>
                    <div className="flex gap-6">
                       <input 
                         type="email" 
                         placeholder="Your Email" 
                         className="flex-1 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-10 h-20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 ring-secondary" 
                       />
                       <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-16 h-20 text-xl font-bold shadow-2xl btn-hover-effect">اشتركِ الآن</Button>
                    </div>
                 </div>
                 <div className="relative flex justify-center items-center">
                    <div className="w-80 h-80 md:w-[500px] md:h-[500px] bg-white/5 rounded-full flex items-center justify-center animate-float border border-white/10 backdrop-blur-3xl">
                       <AmazighZay className="w-40 h-40 md:w-80 md:h-80 text-secondary" />
                    </div>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-secondary rounded-full animate-pulse blur-3xl" />
                 </div>
              </div>
           </div>
        </section>
      </main>

      <footer className="bg-stone-900 text-white pt-40 pb-20 border-t-8 border-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32">
            <div className="lg:col-span-2 space-y-12 text-right">
              <div className="flex items-center justify-end gap-5">
                 <span className="font-headline text-6xl font-bold text-white tracking-tighter">THILELI</span>
                 <div className="p-4 bg-secondary rounded-3xl shadow-[0_0_50px_rgba(148,114,49,0.3)]">
                   <AmazighZay className="w-10 h-10 text-primary" />
                 </div>
              </div>
              <p className="text-stone-400 text-2xl max-w-xl leading-relaxed mr-auto font-light">
                من قلب الجزائر، نأخذكم في رحلة عبر الزمن لنقدم لكم أرقى ما جادت به الأنامل الأمازيغية بلمسات عصرية عالمية.
              </p>
              <div className="flex gap-6 justify-end">
                {['facebook', 'instagram', 'whatsapp', 'tiktok'].map(social => (
                  <Link key={social} href="#" className="w-14 h-14 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-500 shadow-xl">
                    <Globe className="w-6 h-6" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="text-right space-y-10">
              <h4 className="font-black uppercase tracking-[0.3em] text-secondary text-xs">Explore Shop</h4>
              <ul className="space-y-6 text-xl font-medium text-stone-300">
                <li><Link href="/shop" className="hover:text-secondary transition-colors">Premium Collection</Link></li>
                <li><Link href="/heritage" className="hover:text-secondary transition-colors">Our Craft Story</Link></li>
                <li><Link href="/shipping" className="hover:text-secondary transition-colors">Global Delivery</Link></li>
                <li><Link href="/contact" className="hover:text-secondary transition-colors">Direct Support</Link></li>
              </ul>
            </div>
            <div className="text-right space-y-10">
              <h4 className="font-black uppercase tracking-[0.3em] text-secondary text-xs">Help & Trust</h4>
              <ul className="space-y-8">
                <li className="font-bold text-3xl">+213 00 00 00 00</li>
                <li className="text-stone-500 flex items-center justify-end gap-2">
                   Tizi Ouzou HQ, Algeria <ShieldCheck className="w-4 h-4 text-secondary" />
                </li>
                <li>
                   <Button className="w-full rounded-full bg-secondary hover:bg-secondary/90 text-white gap-3 font-bold h-16 text-lg shadow-xl">
                     <MessageCircle className="w-6 h-6" /> WhatsApp Concierge
                   </Button>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-stone-500 font-black uppercase tracking-[0.4em]">
            <p>© {new Date().getFullYear()} THILELI GLOBAL LUXURY MARKETPLACE. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-12">
               <span className="hover:text-white cursor-pointer">Security Policy</span>
               <span className="hover:text-white cursor-pointer">Terms of Heritage</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
