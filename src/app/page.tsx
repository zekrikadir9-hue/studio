import { Navbar } from '@/components/layout/Navbar';
import { ProductCard } from '@/components/shop/ProductCard';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CONTACT_LINKS, CATEGORIES } from '@/lib/constants';
import { Phone, Send, MessageCircle, Instagram, Facebook, Sparkles, ShieldCheck, Globe } from 'lucide-react';
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
        <section className="relative h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-l from-primary/80 to-transparent z-10" />
             <img 
               src="https://picsum.photos/seed/amazigh-hero/1920/1080" 
               alt="Hero Background" 
               className="w-full h-full object-cover"
               data-ai-hint="amazigh lifestyle"
             />
          </div>
          
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-2xl text-white text-right">
              <h1 className="font-headline text-6xl md:text-8xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                تراث ثيليلي المعاصر
              </h1>
              <p className="text-xl md:text-2xl font-light mb-10 opacity-90 leading-relaxed">
                اكتشف جمال الحرف الأمازيغية الجزائرية بلمسة عصرية. مختارات من النظارات، القبعات، والمجوهرات الفاخرة.
              </p>
              <div className="flex flex-wrap gap-4 justify-start">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 h-14 text-lg rounded-full">
                  تسوق التشكيلة
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary px-8 h-14 text-lg rounded-full">
                  قصتنا
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16 bg-stone-50">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-3xl font-bold text-center mb-12 text-primary">تصفح حسب الفئة</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {CATEGORIES.map((cat) => (
                <Link key={cat.id} href={`/shop?category=${cat.id}`} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 text-center hover:border-secondary transition-all group">
                   <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/10 transition-colors">
                      <Sparkles className="w-6 h-6 text-primary group-hover:text-secondary" />
                   </div>
                   <span className="font-bold text-sm text-primary">{cat.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-24 bg-background text-right">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-xl">
                <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">أرقى المختارات</h2>
                <p className="text-muted-foreground text-lg">مزيج بين الحداثة والأصالة في كل قطعة نختارها لك.</p>
              </div>
              <Button variant="link" className="text-secondary font-bold text-lg group">
                عرض جميع المنتجات <span className="inline-block transition-transform group-hover:-translate-x-1 mr-2">←</span>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Brand Values */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="font-headline text-2xl font-bold">توصيل لـ 58 ولاية</h3>
              <p className="opacity-80">شحن سريع وآمن إلى جميع ربوع الجزائر، من العاصمة إلى تمنراست.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="font-headline text-2xl font-bold">منتجات طبيعية 100%</h3>
              <p className="opacity-80">مكياج وعناية بالبشرة مستوحاة من أسرار الجمال الجزائري القديم.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-headline text-2xl font-bold">أصالة مضمونة</h3>
              <p className="opacity-80">كل قطعة مجوهرات أو إكسسوار تحمل بصمة صانع جزائري فخور بعمله.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-stone-100 border-t border-stone-200 py-16 text-right">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <span className="font-headline text-3xl font-bold text-primary">THILELI</span>
              </div>
              <p className="text-muted-foreground max-w-sm">
                نحتفي بالتراث الأمازيغي الجزائري وننقله للعالمية عبر منتجات عصرية تناسب أسلوب حياتكم اليومي.
              </p>
              <div className="flex gap-4 justify-start">
                <Link href={CONTACT_LINKS.facebook} className="p-3 bg-white rounded-full text-primary hover:bg-secondary hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href={CONTACT_LINKS.instagram} className="p-3 bg-white rounded-full text-primary hover:bg-secondary hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href={CONTACT_LINKS.whatsapp} className="p-3 bg-white rounded-full text-primary hover:bg-secondary hover:text-white transition-all">
                  <MessageCircle className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-6">روابط سريعة</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li><Link href="/shop" className="hover:text-secondary">جميع المنتجات</Link></li>
                <li><Link href="/track" className="hover:text-secondary">تتبع الطلب</Link></li>
                <li><Link href="/wilayas" className="hover:text-secondary">مناطق الشحن</Link></li>
                <li><Link href="/returns" className="hover:text-secondary">سياسة الإرجاع</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-6">دعم العملاء</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li><Link href="tel:+213000000000" className="flex items-center gap-2 justify-end"><Phone className="w-4 h-4 ml-2" /> +213 00 00 00 00</Link></li>
                <li><Link href="mailto:support@thileli.dz" className="hover:text-secondary">support@thileli.dz</Link></li>
                <li>تيزي وزو، الجزائر</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-stone-200 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} THILELI Heritage. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>

      {/* Floating Support Button */}
      <Link 
        href={CONTACT_LINKS.whatsapp}
        className="fixed bottom-8 left-8 z-50 p-4 bg-green-500 text-white rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-medium">تحدث معنا</span>
      </Link>
    </div>
  );
}
