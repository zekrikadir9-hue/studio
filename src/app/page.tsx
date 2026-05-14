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
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#0a261f]">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-l from-primary/95 via-primary/60 to-transparent z-10" />
             <img 
               src="https://picsum.photos/seed/amazigh-hero-v2/1920/1080" 
               alt="Hero Background" 
               className="w-full h-full object-cover opacity-60 scale-105 animate-pulse"
               style={{ animationDuration: '10s' }}
               data-ai-hint="luxury heritage"
             />
          </div>
          
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-4xl text-white text-right space-y-8">
              <div className="inline-flex items-center gap-3 bg-secondary/20 backdrop-blur-2xl px-6 py-2 rounded-full border border-secondary/30">
                <Zap className="w-4 h-4 text-secondary fill-secondary" />
                <span className="text-xs font-black tracking-widest uppercase">Best Sellers In Algeria</span>
              </div>
              <h1 className="font-headline text-6xl md:text-9xl font-bold leading-tight">
                أصالة تتحدث <br/> <span className="text-secondary">بلغة العصر</span>
              </h1>
              <p className="text-xl md:text-2xl font-light opacity-80 leading-relaxed max-w-2xl ml-auto border-r-4 border-secondary pr-8">
                نحن لا نبيع منتجات، نحن نبيع قصصاً من عمق الجبال الجزائرية مصاغة بأحدث أساليب الموضة العالمية.
              </p>
              <div className="flex flex-wrap gap-6 justify-start pt-6">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-14 h-20 text-2xl rounded-full shadow-2xl shadow-secondary/40 btn-hover-effect">
                  تسوق الآن
                </Button>
                <div className="flex items-center gap-4 bg-white/5 backdrop-blur-xl p-4 rounded-3xl border border-white/10">
                   <div className="flex -space-x-3">
                     {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-primary bg-stone-200" />)}
                   </div>
                   <div className="text-right">
                      <p className="text-sm font-bold">+15k Customer</p>
                      <p className="text-[10px] opacity-60 font-medium">Trusted across 58 Wilayas</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Trust Badges */}
        <section className="bg-white py-12 border-b border-stone-100">
           <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                 <div className="flex items-center justify-center gap-4 group">
                    <Truck className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                    <div className="text-right">
                       <p className="font-bold text-sm">توصيل سريع</p>
                       <p className="text-xs text-muted-foreground">لكل ولايات الجزائر</p>
                    </div>
                 </div>
                 <div className="flex items-center justify-center gap-4 group">
                    <BadgeCheck className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                    <div className="text-right">
                       <p className="font-bold text-sm">أصالة مضمونة</p>
                       <p className="text-xs text-muted-foreground">صناعة يدوية 100%</p>
                    </div>
                 </div>
                 <div className="flex items-center justify-center gap-4 group">
                    <ShieldCheck className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                    <div className="text-right">
                       <p className="font-bold text-sm">دفع آمن</p>
                       <p className="text-xs text-muted-foreground">عند الاستلام</p>
                    </div>
                 </div>
                 <div className="flex items-center justify-center gap-4 group">
                    <Star className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                    <div className="text-right">
                       <p className="font-bold text-sm">أعلى تقييم</p>
                       <p className="text-xs text-muted-foreground">رضا زبائننا هدفنا</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Flash Deals / Hot Products */}
        <section className="py-24 bg-stone-50 amazigh-pattern-bg">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
               <div className="text-right">
                  <div className="inline-flex items-center gap-2 text-secondary font-black text-xs uppercase tracking-[0.3em] mb-4">
                     <Zap className="w-4 h-4 fill-secondary" /> Hot Deals Right Now
                  </div>
                  <h2 className="font-headline text-5xl md:text-7xl font-bold text-primary">عروض ثيليلي الكبرى</h2>
               </div>
               <Link href="/shop">
                 <Button variant="outline" className="rounded-full px-8 h-14 font-bold border-primary text-primary hover:bg-primary hover:text-white transition-all">
                   عرض كل المنتجات <ArrowLeft className="w-4 h-4 mr-2" />
                 </Button>
               </Link>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {featuredProducts.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
          </div>
        </section>

        {/* Category Universe - Marketplace Style */}
        <section className="py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-24 space-y-4">
               <h2 className="font-headline text-5xl md:text-7xl font-bold text-primary">تسوق حسب الفئة</h2>
               <p className="text-muted-foreground text-xl font-medium">كل ما تحتاجه لإطلالة أمازيغية متكاملة</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {CATEGORIES.map((cat) => (
                <Link key={cat.id} href={`/shop?category=${cat.id}`} className="group text-center space-y-4">
                   <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-xl border-4 border-transparent group-hover:border-secondary transition-all duration-500">
                      <img src={cat.imageUrl} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-ai-hint={cat.id} />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
                   </div>
                   <h3 className="font-bold text-lg group-hover:text-secondary transition-colors">{cat.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Banner - Ultra Premium */}
        <section className="container mx-auto px-4 py-32">
           <div className="premium-gradient rounded-[4rem] p-12 md:p-24 relative overflow-hidden group shadow-[0_50px_100px_rgba(6,78,59,0.3)]">
              <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none shimmer" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                 <div className="text-white text-right space-y-8">
                    <h2 className="font-headline text-5xl md:text-8xl font-bold leading-tight">انضم إلى مجتمع <br/> <span className="text-secondary italic">ثيليلي</span></h2>
                    <p className="text-white/70 text-xl md:text-2xl font-light">اشترك في قائمتنا البريدية للحصول على عروض حصرية وتنبيهات بأحدث المجموعات التراثية.</p>
                    <div className="flex gap-4">
                       <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-12 h-18 text-xl font-bold btn-hover-effect">اشترك الآن</Button>
                    </div>
                 </div>
                 <div className="relative flex justify-center items-center">
                    <div className="w-64 h-64 md:w-[400px] md:h-[400px] bg-secondary/10 rounded-full flex items-center justify-center animate-float">
                       <AmazighZay className="w-32 h-32 md:w-64 md:h-64 text-secondary/40" />
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </main>

      {/* Global Style Footer */}
      <footer className="bg-stone-50 border-t border-stone-200 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
            <div className="md:col-span-2 space-y-10 text-right">
              <div className="flex items-center justify-end gap-4">
                 <span className="font-headline text-5xl font-bold text-primary tracking-tighter">THILELI</span>
                 <div className="p-3 bg-primary rounded-2xl shadow-xl">
                   <AmazighZay className="w-8 h-8 text-secondary" />
                 </div>
              </div>
              <p className="text-muted-foreground text-xl max-w-lg leading-relaxed mr-auto">
                وجهتكم الأولى لأرقى الحرف اليدوية والمنتجات التراثية الجزائرية المصاغة بلمسات عصرية عالمية.
              </p>
              <div className="flex gap-4 justify-end">
                {[1,2,3,4,5].map(i => <div key={i} className="w-12 h-12 bg-white rounded-xl border border-stone-200" />)}
              </div>
            </div>
            <div className="text-right">
              <h4 className="font-black uppercase tracking-widest text-stone-400 text-xs mb-10">Links</h4>
              <ul className="space-y-4 text-primary font-bold">
                <li><Link href="/shop" className="hover:text-secondary">Explore All</Link></li>
                <li><Link href="/heritage" className="hover:text-secondary">The Story</Link></li>
                <li><Link href="/shipping" className="hover:text-secondary">Shipping Info</Link></li>
                <li><Link href="/contact" className="hover:text-secondary">Support</Link></li>
              </ul>
            </div>
            <div className="text-right">
              <h4 className="font-black uppercase tracking-widest text-stone-400 text-xs mb-10">Contact</h4>
              <ul className="space-y-6">
                <li className="font-bold text-primary">+213 00 00 00 00</li>
                <li className="text-muted-foreground">Tizi Ouzou, Algeria</li>
                <li><Button className="rounded-full bg-green-500 hover:bg-green-600 text-white gap-2 font-bold"><MessageCircle className="w-4 h-4" /> WhatsApp</Button></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-stone-400 font-black uppercase tracking-[0.3em]">
            <p>© {new Date().getFullYear()} THILELI GLOBAL MARKETPLACE.</p>
            <div className="flex gap-10">
               <span>Privacy Policy</span>
               <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}