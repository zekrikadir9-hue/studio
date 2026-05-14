import { Navbar } from '@/components/layout/Navbar';
import { ProductCard } from '@/components/shop/ProductCard';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CONTACT_LINKS, CATEGORIES } from '@/lib/constants';
import { AmazighZay } from '@/components/icons/AmazighZay';
import { Sparkles, ShieldCheck, Globe, ArrowLeft, MessageCircle, Truck, Star, BadgeCheck, Zap, TrendingUp, Award, Clock } from 'lucide-react';
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
        {/* Hero Section - Ultra Luxury Global Style */}
        <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-[#061a15]">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-l from-primary/95 via-primary/30 to-transparent z-10" />
             <div className="absolute inset-0 bg-black/40 z-5" />
             <img 
               src="https://picsum.photos/seed/amazigh-hero-world/1920/1080" 
               alt="Hero Background" 
               className="w-full h-full object-cover scale-105 animate-slow-zoom"
               data-ai-hint="luxury heritage"
             />
          </div>
          
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-5xl text-white text-right space-y-8 animate-in fade-in slide-in-from-right duration-1000">
              <div className="inline-flex items-center gap-3 bg-secondary/20 backdrop-blur-3xl px-8 py-3 rounded-full border border-secondary/40 shadow-2xl">
                <Sparkles className="w-5 h-5 text-secondary animate-pulse" />
                <span className="text-xs font-black tracking-[0.3em] uppercase">Thileli Global Luxury Marketplace</span>
              </div>
              
              <h1 className="font-headline text-7xl md:text-[11rem] font-bold leading-[0.9] tracking-tighter">
                تراثُنا <br/> <span className="text-secondary drop-shadow-[0_10px_30px_rgba(148,114,49,0.5)]">يغزو العالم</span>
              </h1>
              
              <p className="text-2xl md:text-3xl font-light opacity-90 leading-relaxed max-w-3xl ml-auto border-r-[12px] border-secondary pr-12">
                نحن لا نبيع مجرد منتجات، نحن نصدر قصة حضارة أمازيغية جزائرية ضاربة في العمق، مصاغة بأعلى معايير الجودة العالمية.
              </p>
              
              <div className="flex flex-wrap gap-8 justify-start pt-12">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-20 h-24 text-3xl rounded-full shadow-[0_30px_70px_rgba(148,114,49,0.4)] btn-hover-effect">
                  اكتشف الفخامة الآن
                </Button>
                
                <div className="flex items-center gap-8 bg-white/5 backdrop-blur-3xl p-6 rounded-[3rem] border border-white/10 shadow-2xl">
                   <div className="flex -space-x-5">
                     {[1,2,3,4,5].map(i => (
                       <div key={i} className="w-14 h-14 rounded-full border-2 border-secondary bg-stone-300 shadow-xl overflow-hidden">
                          <img src={`https://picsum.photos/seed/vip-user-${i}/120/120`} alt="vip customer" />
                       </div>
                     ))}
                   </div>
                   <div className="text-right">
                      <p className="text-lg font-bold text-white">+50,000 عميل دولي</p>
                      <p className="text-[10px] text-secondary font-black uppercase tracking-[0.3em]">Verified Global Trust</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce">
            <div className="w-10 h-16 rounded-full border-2 border-white/20 flex justify-center p-3">
              <div className="w-1.5 h-3 bg-secondary rounded-full" />
            </div>
          </div>
        </section>

        {/* Global Trust Bar - AliExpress Style */}
        <div className="bg-white py-20 border-b border-stone-100 relative overflow-hidden">
           <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
                 {[
                   { icon: Truck, title: "شحن لـ 58 ولاية", sub: "Fast & Secure Logistics", color: "text-blue-600" },
                   { icon: Award, title: "جودة أصلية 100%", sub: "Authentic Masterpieces", color: "text-amber-600" },
                   { icon: ShieldCheck, title: "دفع آمن عند الاستلام", sub: "Buyer Protection Guard", color: "text-emerald-600" },
                   { icon: Clock, title: "دعم على مدار الساعة", sub: "24/7 Concierge Service", color: "text-purple-600" }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-6 group hover:translate-y-[-5px] transition-transform duration-500">
                      <div className={`w-20 h-20 bg-stone-50 rounded-[2rem] flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-xl ${item.color}`}>
                        <item.icon className="w-10 h-10" />
                      </div>
                      <div className="text-right">
                         <p className="font-black text-sm uppercase tracking-widest text-primary">{item.title}</p>
                         <p className="text-[10px] text-muted-foreground font-bold">{item.sub}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Flash Deals - AliExpress/Temu Excitement */}
        <section className="py-32 bg-stone-50 amazigh-pattern-bg">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
               <div className="text-right space-y-4">
                  <div className="inline-flex items-center gap-3 text-secondary font-black text-sm uppercase tracking-[0.5em]">
                     <TrendingUp className="w-6 h-6 animate-pulse" /> Trending Now
                  </div>
                  <h2 className="font-headline text-6xl md:text-9xl font-bold text-primary">المختارات الأكثر طلباً</h2>
                  <p className="text-muted-foreground text-2xl max-w-2xl font-light">استكشف القطع التي لاقت استحساناً عالمياً في أرقى المعارض.</p>
               </div>
               <Link href="/shop">
                 <Button variant="outline" className="rounded-full px-16 h-20 text-xl font-bold border-4 border-primary text-primary hover:bg-primary hover:text-white transition-all shadow-2xl group">
                   تصفح المتجر العالمي <ArrowLeft className="w-6 h-6 mr-4 group-hover:translate-x-[-10px] transition-transform" />
                 </Button>
               </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
              {featuredProducts.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
          </div>
        </section>

        {/* Global Category Universe */}
        <section className="py-48 bg-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-secondary/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[150px]" />
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="max-w-3xl mx-auto space-y-8 mb-32">
               <h2 className="font-headline text-7xl md:text-9xl font-bold text-primary">عوالم ثيليلي</h2>
               <div className="w-48 h-3 bg-secondary mx-auto rounded-full shadow-lg" />
               <p className="text-muted-foreground text-3xl font-light leading-relaxed">اكتشف التنوع المذهل في مجموعاتنا، من المجوهرات العتيقة إلى العناية بالبشرة الطبيعية.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
              {CATEGORIES.map((cat) => (
                <Link key={cat.id} href={`/shop?category=${cat.id}`} className="group text-center space-y-8 block">
                   <div className="relative aspect-[3/4] rounded-[5rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.1)] border-8 border-transparent group-hover:border-secondary transition-all duration-700 hover:scale-[1.05]">
                      <img src={cat.imageUrl} alt={cat.name} className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:opacity-40 transition-opacity" />
                      <div className="absolute bottom-8 left-0 right-0 text-white font-headline text-2xl font-bold px-6">{cat.name}</div>
                   </div>
                   <h3 className="font-black text-xs uppercase tracking-[0.4em] text-primary/40 group-hover:text-secondary transition-colors">{cat.id.replace('-', ' ')}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Invitation Banner */}
        <section className="container mx-auto px-4 py-48">
           <div className="premium-gradient rounded-[6rem] p-20 md:p-36 relative overflow-hidden group shadow-[0_100px_180px_rgba(6,78,59,0.35)]">
              <div className="absolute inset-0 opacity-10 pointer-events-none amazigh-pattern-bg" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
                 <div className="text-white text-right space-y-12">
                    <h2 className="font-headline text-7xl md:text-[10rem] font-bold leading-[0.85]">انضمي <br/> <span className="text-secondary italic">للنخبة</span></h2>
                    <p className="text-white/80 text-3xl md:text-4xl font-light leading-relaxed">كوني أول من يمتلك القطع الفريدة والمحدودة الإصدار قبل طرحها للعامة.</p>
                    <div className="flex flex-col sm:flex-row gap-8 pt-8">
                       <input 
                         type="email" 
                         placeholder="Enter your VIP email" 
                         className="flex-1 bg-white/10 backdrop-blur-3xl border-2 border-white/20 rounded-full px-12 h-24 text-white text-xl placeholder:text-white/40 focus:outline-none focus:ring-4 ring-secondary transition-all" 
                       />
                       <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-20 h-24 text-2xl font-bold shadow-3xl btn-hover-effect">اشتركِ الآن</Button>
                    </div>
                 </div>
                 <div className="relative flex justify-center items-center">
                    <div className="w-[30rem] h-[30rem] md:w-[45rem] md:h-[45rem] bg-white/5 rounded-full flex items-center justify-center animate-float border border-white/10 backdrop-blur-3xl relative">
                       <AmazighZay className="w-48 h-48 md:w-[25rem] md:h-[25rem] text-secondary shadow-2xl" />
                       <div className="absolute top-10 right-10 w-32 h-32 bg-secondary/20 rounded-full animate-pulse blur-2xl" />
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </main>

      {/* Global Footer */}
      <footer className="bg-stone-950 text-white pt-48 pb-20 border-t-[15px] border-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-32 mb-40">
            <div className="lg:col-span-2 space-y-16 text-right">
              <div className="flex items-center justify-end gap-6">
                 <span className="font-headline text-7xl font-bold text-white tracking-tighter">THILELI</span>
                 <div className="p-6 bg-secondary rounded-[2.5rem] shadow-[0_0_70px_rgba(148,114,49,0.4)]">
                   <AmazighZay className="w-14 h-14 text-primary" />
                 </div>
              </div>
              <p className="text-stone-400 text-3xl max-w-2xl leading-relaxed mr-auto font-light">
                متجر "ثيليلي" هو سفير التراث الجزائري الأمازيغي في العالم الرقمي، نجمع بين عراقة الماضي وأدوات المستقبل.
              </p>
              <div className="flex gap-8 justify-end">
                {['facebook', 'instagram', 'whatsapp', 'tiktok'].map(social => (
                  <Link key={social} href="#" className="w-16 h-16 bg-white/5 rounded-[1.5rem] border border-white/10 flex items-center justify-center hover:bg-secondary hover:scale-110 transition-all duration-500 shadow-2xl">
                    <Globe className="w-8 h-8" />
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="text-right space-y-12">
              <h4 className="font-black uppercase tracking-[0.5em] text-secondary text-sm">Explore Universe</h4>
              <ul className="space-y-8 text-2xl font-medium text-stone-300">
                <li><Link href="/shop" className="hover:text-secondary transition-colors block">The Collection</Link></li>
                <li><Link href="/heritage" className="hover:text-secondary transition-colors block">Our Craft Story</Link></li>
                <li><Link href="/shipping" className="hover:text-secondary transition-colors block">Global Logistics</Link></li>
                <li><Link href="/contact" className="hover:text-secondary transition-colors block">VIP Support</Link></li>
              </ul>
            </div>
            
            <div className="text-right space-y-12">
              <h4 className="font-black uppercase tracking-[0.5em] text-secondary text-sm">Concierge & Trust</h4>
              <ul className="space-y-10">
                <li className="font-bold text-4xl text-white">+213 00 00 00 00</li>
                <li className="text-stone-500 flex items-center justify-end gap-3 text-lg">
                   Tizi Ouzou Headquarters, Algeria <ShieldCheck className="w-5 h-5 text-secondary" />
                </li>
                <li>
                   <Button className="w-full rounded-full bg-secondary hover:bg-secondary/90 text-white gap-4 font-bold h-20 text-xl shadow-2xl">
                     <MessageCircle className="w-8 h-8" /> Direct WhatsApp
                   </Button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 text-xs text-stone-600 font-black uppercase tracking-[0.5em]">
            <p>© {new Date().getFullYear()} THILELI GLOBAL LUXURY MARKETPLACE. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-16">
               <span className="hover:text-white cursor-pointer transition-colors">Global Security Policy</span>
               <span className="hover:text-white cursor-pointer transition-colors">Terms of Heritage</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
