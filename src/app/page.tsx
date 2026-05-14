
import { Navbar } from '@/components/layout/Navbar';
import { ProductCard } from '@/components/shop/ProductCard';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CONTACT_LINKS, CATEGORIES } from '@/lib/constants';
import { Phone, Send, MessageCircle, Instagram, Facebook, Sparkles, ShieldCheck, Globe, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const featuredProducts = [
    { id: '1', name: 'خاتم الفضة المينا الأمازيغي', price: 8500, category: 'خواتم ومجوهرات', image: PlaceHolderImages[1].imageUrl, isNew: true },
    { id: '2', name: 'نظارات "أطلس" شمسية بإطار خشبي', price: 12000, category: 'نظارات عصرية', image: PlaceHolderImages[4].imageUrl },
    { id: '3', name: 'قبعة "تيفيناغ" عصرية مطرزة', price: 3500, category: 'قبعات وأغطية رأس', image: PlaceHolderImages[3].imageUrl },
    { id: '4', name: 'زيت الأرغان العضوي النقي', price: 4500, category: 'العناية بالبشرة الطبيعية', image: PlaceHolderImages[2].imageUrl },
    { id: '5', name: 'أحمر شفاه "العكر الفاسي" التقليدي', price: 2800, category: 'مكياج وجمال تقليدي', image: PlaceHolderImages[5].imageUrl },
    { id: '6', name: 'خاتم "توارق" فضة عتيق', price: 9200, category: 'خواتم ومجوهرات', image: PlaceHolderImages[0].imageUrl },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-l from-primary/90 via-primary/40 to-transparent z-10" />
             <img 
               src="https://picsum.photos/seed/amazigh-hero/1920/1080" 
               alt="Hero Background" 
               className="w-full h-full object-cover"
               data-ai-hint="amazigh lifestyle"
             />
          </div>
          
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-3xl text-white text-right">
              <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-md px-4 py-2 rounded-full border border-secondary/30 mb-6 animate-in fade-in slide-in-from-top-4 duration-700">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span className="text-sm font-bold tracking-wider uppercase">Tagezda n Tussna</span>
              </div>
              <h1 className="font-headline text-6xl md:text-9xl font-bold mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 leading-tight">
                تراث ثيليلي <br/> <span className="text-secondary italic">المعاصر</span>
              </h1>
              <p className="text-xl md:text-3xl font-light mb-12 opacity-95 leading-relaxed max-w-2xl ml-auto">
                اكتشف جمال الحرف الأمازيغية الجزائرية بلمسة فنية عصرية. مختاراتنا تجمع بين روح الجبال وأناقة المدينة.
              </p>
              <div className="flex flex-wrap gap-6 justify-start">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-10 h-16 text-xl rounded-full shadow-2xl shadow-secondary/20 btn-hover-effect">
                  تسوق الآن
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white/40 hover:bg-white hover:text-primary px-10 h-16 text-xl rounded-full backdrop-blur-sm">
                  قصتنا
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Grid - Visual Transformation */}
        <section className="py-24 bg-stone-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
               <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">تصفح العوالم</h2>
               <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
               <p className="text-muted-foreground max-w-lg mx-auto">اختر الفئة التي تعبر عن هويتك وأصالتك.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {CATEGORIES.map((cat) => (
                <Link key={cat.id} href={`/shop?category=${cat.id}`} className="relative h-[400px] rounded-[2.5rem] overflow-hidden group shadow-xl">
                   <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700 z-10" />
                   <img 
                      src={cat.imageUrl} 
                      alt={cat.name} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      data-ai-hint={cat.id}
                   />
                   <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end items-center text-center">
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                         <span className="text-white/60 text-xs uppercase tracking-[0.3em] mb-2 block">Discovery</span>
                         <h3 className="text-white text-2xl font-headline font-bold mb-4">{cat.name}</h3>
                         <div className="overflow-hidden h-0 group-hover:h-12 transition-all duration-500">
                            <Button variant="secondary" size="sm" className="rounded-full font-bold">
                              استكشف الآن <ArrowLeft className="w-4 h-4 mr-2" />
                            </Button>
                         </div>
                      </div>
                   </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-24 bg-background text-right">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-r-4 border-secondary pr-8">
              <div className="max-w-xl">
                <h2 className="font-headline text-5xl md:text-6xl font-bold text-primary mb-4">أرقى المختارات</h2>
                <p className="text-muted-foreground text-xl">مزيج بين الحداثة والأصالة في كل قطعة نختارها لك بعناية فائقة.</p>
              </div>
              <Button variant="ghost" className="text-secondary font-bold text-xl group hover:bg-secondary/10 px-8 py-4 rounded-full">
                جميع المنتجات <ArrowLeft className="inline-block transition-transform group-hover:-translate-x-2 mr-3" />
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Brand Values - Enhanced */}
        <section className="py-24 bg-primary text-white relative">
          <div className="absolute inset-0 amazigh-pattern opacity-10" />
          <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div className="space-y-6 group">
              <div className="w-20 h-20 bg-secondary rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:rotate-12 transition-transform">
                <Globe className="w-10 h-10" />
              </div>
              <h3 className="font-headline text-3xl font-bold">توصيل لـ 58 ولاية</h3>
              <p className="text-white/70 text-lg leading-relaxed">شحن سريع وآمن إلى جميع ربوع الجزائر، بضغطة زر واحدة تصلك الأصالة أينما كنت.</p>
            </div>
            <div className="space-y-6 group">
              <div className="w-20 h-20 bg-secondary rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:rotate-12 transition-transform">
                <Sparkles className="w-10 h-10" />
              </div>
              <h3 className="font-headline text-3xl font-bold">منتجات طبيعية 100%</h3>
              <p className="text-white/70 text-lg leading-relaxed">مكياج وعناية بالبشرة مستوحاة من أسرار الجمال الجزائري القديم والزيوت الجبلية النقية.</p>
            </div>
            <div className="space-y-6 group">
              <div className="w-20 h-20 bg-secondary rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:rotate-12 transition-transform">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h3 className="font-headline text-3xl font-bold">أصالة مضمونة</h3>
              <p className="text-white/70 text-lg leading-relaxed">كل قطعة مجوهرات أو إكسسوار تحمل بصمة صانع جزائري فخور بوراثة الحرفة أباً عن جد.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-stone-100 border-t border-stone-200 py-20 text-right">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="md:col-span-2 space-y-8">
              <div className="flex items-center gap-3">
                 <div className="p-2 bg-primary rounded-xl">
                   <span className="text-white font-bold text-3xl font-headline">T</span>
                 </div>
                <span className="font-headline text-4xl font-bold text-primary tracking-tighter">THILELI</span>
              </div>
              <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
                نحتفي بالتراث الأمازيغي الجزائري وننقله للعالمية عبر منتجات عصرية تناسب أسلوب حياتكم اليومي بكل رقي.
              </p>
              <div className="flex gap-4 justify-start">
                <Link href={CONTACT_LINKS.facebook} className="p-4 bg-white rounded-2xl text-primary hover:bg-secondary hover:text-white transition-all shadow-sm">
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link href={CONTACT_LINKS.instagram} className="p-4 bg-white rounded-2xl text-primary hover:bg-secondary hover:text-white transition-all shadow-sm">
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link href={CONTACT_LINKS.whatsapp} className="p-4 bg-white rounded-2xl text-primary hover:bg-secondary hover:text-white transition-all shadow-sm">
                  <MessageCircle className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-primary text-xl mb-8">روابط سريعة</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li><Link href="/shop" className="hover:text-secondary transition-colors">جميع المنتجات</Link></li>
                <li><Link href="/track" className="hover:text-secondary transition-colors">تتبع الطلب</Link></li>
                <li><Link href="/wilayas" className="hover:text-secondary transition-colors">مناطق الشحن</Link></li>
                <li><Link href="/returns" className="hover:text-secondary transition-colors">سياسة الإرجاع</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary text-xl mb-8">دعم العملاء</h4>
              <ul className="space-y-6 text-muted-foreground">
                <li><Link href="tel:+213000000000" className="flex items-center gap-3 justify-end group"><span className="group-hover:text-secondary transition-colors font-bold">+213 00 00 00 00</span> <Phone className="w-5 h-5 text-secondary" /></Link></li>
                <li><Link href="mailto:support@thileli.dz" className="hover:text-secondary transition-colors">support@thileli.dz</Link></li>
                <li className="text-sm opacity-80">تيزي وزو، قلب منطقة القبائل، الجزائر</li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} THILELI Heritage. جميع الحقوق محفوظة.</p>
            <div className="flex gap-6">
               <span className="hover:text-primary cursor-pointer">Privacy Policy</span>
               <span className="hover:text-primary cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Support Button */}
      <Link 
        href={CONTACT_LINKS.whatsapp}
        className="fixed bottom-10 left-10 z-50 p-5 bg-green-500 text-white rounded-[2rem] shadow-2xl hover:scale-110 transition-transform flex items-center gap-3 group"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold">مركز المساعدة</span>
      </Link>
    </div>
  );
}
