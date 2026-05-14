import { Navbar } from '@/components/layout/Navbar';
import { ProductCard } from '@/components/shop/ProductCard';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CONTACT_LINKS } from '@/lib/constants';
import { Phone, Send, MessageCircle, Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const featuredProducts = [
    { id: '1', name: 'Kabyle Enamel Necklace', price: 18500, category: 'Jewelry', image: PlaceHolderImages[1].imageUrl, isNew: true },
    { id: '2', name: 'Pure Wool Burnous (White)', price: 32000, category: 'Clothing', image: PlaceHolderImages[3].imageUrl },
    { id: '3', name: 'Hand-woven Atlas Rug', price: 55000, category: 'Home', image: PlaceHolderImages[0].imageUrl },
    { id: '4', name: 'Kabyle Enameled Pottery', price: 4500, category: 'Pottery', image: PlaceHolderImages[2].imageUrl },
    { id: '5', name: 'Berber Silver Earrings', price: 8200, category: 'Jewelry', image: PlaceHolderImages[5].imageUrl },
    { id: '6', name: 'Traditional Kabyle Dress', price: 14500, category: 'Clothing', image: PlaceHolderImages[4].imageUrl },
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
               data-ai-hint="amazigh craft"
             />
          </div>
          
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-2xl text-white">
              <h1 className="font-headline text-6xl md:text-8xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                THILELI Heritage
              </h1>
              <p className="text-xl md:text-2xl font-light mb-10 opacity-90 leading-relaxed">
                Discover the timeless beauty of Algerian Amazigh craftsmanship. Handpicked, authentic, and delivered to your doorstep.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 h-14 text-lg rounded-full">
                  Shop Collection
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary px-8 h-14 text-lg rounded-full">
                  Our Story
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-xl">
                <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">The Prestige Edit</h2>
                <p className="text-muted-foreground text-lg">Curated selections of the finest Berber craftsmanship from across Algeria.</p>
              </div>
              <Button variant="link" className="text-secondary font-bold text-lg group">
                View All Collection <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
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
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="font-headline text-2xl font-bold">58 Wilayas Delivery</h3>
              <p className="opacity-80">Fast and secure shipping across all regions of Algeria, from Algiers to Tamanrasset.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="font-headline text-2xl font-bold">Artisan Direct</h3>
              <p className="opacity-80">We work directly with local craftsmen to ensure authenticity and fair trade practices.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8" />
              </div>
              <h3 className="font-headline text-2xl font-bold">Secure Payment</h3>
              <p className="opacity-80">Pay on delivery or through secure banking options for a worry-free shopping experience.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-stone-100 border-t border-stone-200 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <span className="font-headline text-3xl font-bold text-primary">THILELI</span>
              </div>
              <p className="text-muted-foreground max-w-sm">
                Celebrating and preserving the rich Amazigh heritage of Algeria through sustainable craft and artisanal excellence.
              </p>
              <div className="flex gap-4">
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
              <h4 className="font-bold text-primary mb-6">Quick Links</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li><Link href="/shop" className="hover:text-secondary">All Products</Link></li>
                <li><Link href="/track" className="hover:text-secondary">Track Order</Link></li>
                <li><Link href="/wilayas" className="hover:text-secondary">Shipping Areas</Link></li>
                <li><Link href="/returns" className="hover:text-secondary">Returns Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-6">Customer Support</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li><Link href="tel:+213000000000" className="flex items-center gap-2"><Phone className="w-4 h-4" /> +213 00 00 00 00</Link></li>
                <li><Link href="mailto:support@thileli.dz" className="hover:text-secondary">support@thileli.dz</Link></li>
                <li>Tizi Ouzou, Algeria</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-stone-200 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} THILELI Heritage. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating Support Button */}
      <Link 
        href={CONTACT_LINKS.whatsapp}
        className="fixed bottom-8 right-8 z-50 p-4 bg-green-500 text-white rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-medium">Chat with us</span>
      </Link>
    </div>
  );
}