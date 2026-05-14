import { Navbar } from '@/components/layout/Navbar';
import { ProductCard } from '@/components/shop/ProductCard';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CONTACT_LINKS, CATEGORIES } from '@/lib/constants';
import { AmazighZay } from '@/components/icons/AmazighZay';
import { Sparkles, ShieldCheck, Globe, ArrowLeft, MessageCircle, Instagram, Facebook, Phone } from 'lucide-react';
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
        <section className="relative h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-l from-primary/95 via-primary/50 to-transparent z-10" />
             <img 
               src="https://picsum.photos/seed/amazigh-hero/1920/1080" 
               alt="Hero Background" 
               className="w-full h-full object-cover scale-105"
               data-ai-hint="amazigh lifestyle"
             />
          </div>
          
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-4xl text-white text-right space-y-8">
              <div className="inline-flex items-center gap-3 bg-secondary/30 backdrop-blur-xl px-6 py-3 rounded-full border border-secondary/40 animate-in fade-in slide-in-from-top-4 duration-700">
                <Sparkles className="w-5 h-5 text-secondary animate-pulse" />
                <span className="text-sm font-bold tracking-widest uppercase">Tagezda n Tussna n Thileli</span>
              </div>
              <h1 className="font-headline text-7xl md:text-[10rem] font-bold leading-[0.9] animate-in fade-in slide-in-from-bottom-8 duration-1000">
                تراث ثيليلي <br/> <span className="text-secondary italic">المتجدد</span>
              </h1>
              <p className="text-xl md:text-3xl font-light opacity-90 leading-relaxed max-w-2xl ml-auto border-r-2 border-secondary pr-6">
                أرقى ما أبدعته الأنامل الجزائرية الأمازيغية، قطع فريدة تجمع بين أصالة الجبال وسحر الحداثة.
              </p>
              <div className="flex flex-wrap gap-6 justify-start pt-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-12 h-18 text-2xl rounded-full shadow-2xl shadow-secondary/30 btn-hover-effect border-none">
                  ابدأ الاستكشاف
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 px-12 h-18 text-2xl rounded-full backdrop-blur-md">
                  رؤيتنا
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-32 bg-stone-50 amazigh-pattern-bg">
          <div className="container mx-auto px-4">
            <div className="text-center mb-24 space-y-6">
               <h2 className="font-headline text-5xl md:text-7xl font-bold text-primary">عوالم ثيليلي</h2>
               <div className="w-32 h-1.5 bg-secondary mx-auto rounded-full" />
               <p className="text-muted-foreground text-xl max-w-2xl mx-auto">مجموعات مختارة بعناية تعكس عمق الهوية الجزائرية.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {CATEGORIES.map((cat) => (
                <Link key={cat.id} href={`/shop?category=${cat.id}`} className="relative h-[450px] rounded-[3.5rem] overflow-hidden group shadow-2xl transition-all duration-700 hover:-translate-y-4">
                   <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-700 z-10" />
                   <img 
                      src={cat.imageUrl} 
                      alt={cat.name} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      data-ai-hint={cat.id}
                   />
                   <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end items-center text-center">
                      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-[2.5rem] w-full translate-y-6 group-hover:translate-y-0 transition-transform duration-500 shadow-2xl">
                         <span className="text-white/70 text-[10px] font-black uppercase tracking-[0.4em] mb-3 block">Premium Selection</span>
                         <h3 className="text-white text-3xl font-headline font-bold mb-6">{cat.name}</h3>
                         <div className="overflow-hidden h-0 group-hover:h-14 transition-all duration-500">
                            <Button variant="secondary" className="rounded-full font-bold px-8 h-12 hover:scale-105 transition-transform">
                              عرض المجموعة <ArrowLeft className="w-4 h-4 mr-2" />
                            </Button>
                         </div>
                      </div>
                   </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Values */}
        <section className="py-32 bg-primary text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
             <AmazighZay className="w-[500px] h-[500px] absolute -top-20 -left-20 rotate-12" />
          </div>
          <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-20 text-center">
            <div className="space-y-8 group">
              <div className="w-24 h-24 bg-secondary/20 backdrop-blur-xl border border-secondary/30 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                <Globe className="w-12 h-12 text-secondary" />
              </div>
              <h3 className="font-headline text-4xl font-bold">توصيل لـ 58 ولاية</h3>
              <p className="text-white/60 text-xl leading-relaxed">شبكة توزيع احترافية تغطي كل شبر من الجزائر، بضمان وصول آمن وسريع.</p>
            </div>
            <div className="space-y-8 group">
              <div className="w-24 h-24 bg-secondary/20 backdrop-blur-xl border border-secondary/30 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                <Sparkles className="w-12 h-12 text-secondary" />
              </div>
              <h3 className="font-headline text-4xl font-bold">منتجات طبيعية</h3>
              <p className="text-white/60 text-xl leading-relaxed">كنوز الطبيعة الجزائرية، من زيوت أطلس النادرة إلى أسرار الجمال التقليدي.</p>
            </div>
            <div className="space-y-8 group">
              <div className="w-24 h-24 bg-secondary/20 backdrop-blur-xl border border-secondary/30 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                <ShieldCheck className="w-12 h-12 text-secondary" />
              </div>
              <h3 className="font-headline text-4xl font-bold">أصالة معتمدة</h3>
              <p className="text-white/60 text-xl leading-relaxed">كل قطعة هي شهادة فخر صاغها حرفيون جزائريون يحافظون على إرث الأجداد.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-stone-100 border-t border-stone-200 pt-32 pb-16 text-right">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
            <div className="md:col-span-2 space-y-10">
              <div className="flex items-center gap-4">
                 <div className="p-3 bg-primary rounded-[1.2rem] shadow-xl">
                   <AmazighZay className="w-8 h-8 text-secondary" />
                 </div>
                <span className="font-headline text-5xl font-bold text-primary tracking-tighter">THILELI</span>
              </div>
              <p className="text-muted-foreground text-xl max-w-lg leading-relaxed">
                رسالتنا هي إحياء التراث الأمازيغي الجزائري وتقديمه للعالم بلمسة فنية عصرية تليق بمقامكم.
              </p>
              <div className="flex gap-6 justify-start">
                {[
                  { icon: Facebook, link: CONTACT_LINKS.facebook },
                  { icon: Instagram, link: CONTACT_LINKS.instagram },
                  { icon: MessageCircle, link: CONTACT_LINKS.whatsapp },
                ].map((social, i) => (
                  <Link key={i} href={social.link} className="w-14 h-14 bg-white rounded-2xl text-primary flex items-center justify-center hover:bg-secondary hover:text-white transition-all shadow-lg hover:-translate-y-2">
                    <social.icon className="w-7 h-7" />
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-primary text-2xl mb-10">روابط سريعة</h4>
              <ul className="space-y-5 text-muted-foreground text-lg">
                <li><Link href="/shop" className="hover:text-secondary transition-colors">جميع المنتجات</Link></li>
                <li><Link href="/heritage" className="hover:text-secondary transition-colors">قصة ثيليلي</Link></li>
                <li><Link href="/track" className="hover:text-secondary transition-colors">تتبع الطلبية</Link></li>
                <li><Link href="/contact" className="hover:text-secondary transition-colors">تواصل معنا</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary text-2xl mb-10">تواصل مباشر</h4>
              <ul className="space-y-8 text-muted-foreground text-lg">
                <li><Link href="tel:+213000000000" className="flex items-center gap-4 justify-end group font-bold text-primary"><span className="group-hover:text-secondary transition-colors">+213 00 00 00 00</span> <Phone className="w-6 h-6 text-secondary" /></Link></li>
                <li><Link href="mailto:hello@thileli.dz" className="hover:text-secondary transition-colors border-b border-stone-200 pb-2">hello@thileli.dz</Link></li>
                <li className="text-sm opacity-70 leading-relaxed font-bold">تيزي وزو، الجزائر<br/>قلب منطقة القبائل النابض</li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-stone-400 font-bold uppercase tracking-widest">
            <p>© {new Date().getFullYear()} THILELI HERITAGE. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-10">
               <span className="hover:text-primary cursor-pointer transition-colors">Privacy</span>
               <span className="hover:text-primary cursor-pointer transition-colors">Terms</span>
            </div>
          </div>
        </div>
      </footer>

      <Link 
        href={CONTACT_LINKS.whatsapp}
        className="fixed bottom-12 left-12 z-50 p-6 bg-green-500 text-white rounded-[2.5rem] shadow-2xl hover:scale-110 transition-all duration-500 flex items-center gap-4 group border-4 border-white"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold text-lg">مساعدة فورية</span>
      </Link>
    </div>
  );
}
