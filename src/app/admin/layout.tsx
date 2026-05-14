"use client"
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { LayoutDashboard, ShoppingCart, Package, Users, Settings, LogOut, Lock, LayoutGrid, ShieldCheck, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useUser, useAuth } from '@/firebase';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';
import { AmazighZay } from '@/components/icons/AmazighZay';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useUser();
  const auth = useAuth();
  const { toast } = useToast();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth) return;
    
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
        toast({ title: "تم إنشاء حساب المسؤول", description: "أهلاً بك في نظام ثيليلي الإداري." });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        toast({ title: "تم الدخول بنجاح", description: "مرحباً بعودتك." });
      }
    } catch (e: any) {
      toast({ 
        title: "خطأ في التحقق", 
        description: "تأكد من البيانات المدخلة أو صلاحية الوصول.",
        variant: "destructive" 
      });
    }
  };

  if (loading) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50">
      <div className="animate-float">
        <AmazighZay className="w-20 h-20 text-primary opacity-20" />
      </div>
      <p className="mt-8 font-headline text-2xl text-primary animate-pulse tracking-widest uppercase">Thileli Security</p>
    </div>
  );

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-100 amazigh-pattern-bg px-4">
        <div className="max-w-md w-full glass-card p-12 rounded-[3.5rem] space-y-8 relative overflow-hidden border-none shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
          
          <div className="text-center space-y-4 relative z-10">
            <div className="w-20 h-20 bg-primary rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-2xl rotate-3">
              <Lock className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-headline font-bold text-primary">
              {isRegistering ? 'إعداد المسؤول' : 'بوابة الوصول'}
            </h1>
            <p className="text-muted-foreground text-sm font-medium tracking-wide">نظام إدارة متجر ثيليلي المحمي</p>
          </div>
          
          <form onSubmit={handleAuth} className="space-y-5 relative z-10">
            <div className="space-y-2">
              <Input 
                type="email" 
                placeholder="zekrikadir32@gmail.com" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="h-14 rounded-2xl border-stone-200 bg-white/50 focus:bg-white transition-all text-center" 
                required 
              />
            </div>
            <div className="space-y-2">
              <Input 
                type="password" 
                placeholder="كلمة المرور" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="h-14 rounded-2xl border-stone-200 bg-white/50 focus:bg-white transition-all text-center" 
                required 
              />
            </div>
            
            <Button type="submit" className="w-full h-14 font-bold rounded-2xl premium-gradient text-white shadow-xl btn-hover-effect text-lg">
              {isRegistering ? 'تفعيل الحساب الجديد' : 'دخول الآمن'}
            </Button>
            
            <button 
              type="button" 
              className="w-full text-xs text-stone-400 hover:text-primary transition-colors mt-4 font-bold uppercase tracking-tighter"
              onClick={() => setIsRegistering(!isRegistering)}
            >
              {isRegistering ? 'لديك حساب؟ سجل دخولك' : 'First time? Create Admin Account'}
            </button>
          </form>

          <div className="pt-8 border-t border-stone-100 flex items-center justify-center gap-2 text-[10px] text-stone-400 font-bold uppercase tracking-[0.2em]">
            <ShieldCheck className="w-3 h-3 text-secondary" />
            <span>End-to-End Encrypted Access</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-stone-50 w-full font-body" dir="ltr">
        <Sidebar className="border-r border-stone-200 bg-white shadow-2xl">
          <SidebarHeader className="p-8">
            <Link href="/" className="flex items-center gap-3 mb-10 group">
               <div className="p-2 bg-primary rounded-xl group-hover:rotate-12 transition-transform">
                 <AmazighZay className="w-6 h-6 text-secondary" />
               </div>
               <span className="font-headline text-2xl font-bold text-primary tracking-tighter">THILELI</span>
            </Link>
          </SidebarHeader>
          <SidebarContent className="px-4">
            <SidebarMenu className="gap-3">
              {[
                { href: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
                { href: '/admin/orders', icon: ShoppingCart, label: 'Orders' },
                { href: '/admin/products', icon: Package, label: 'Products' },
                { href: '/admin/categories', icon: LayoutGrid, label: 'Categories' },
                { href: '/admin/settings', icon: Settings, label: 'Settings' },
              ].map((item) => (
                <SidebarMenuItem key={item.href}>
                  <Link href={item.href}>
                    <SidebarMenuButton className="h-14 hover:bg-stone-50 rounded-2xl px-4 transition-all group border border-transparent hover:border-stone-100">
                      <item.icon className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors" />
                      <span className="font-bold text-stone-600 group-hover:text-primary">{item.label}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <div className="mt-auto p-6 border-t border-stone-100">
            <div className="bg-stone-50 rounded-2xl p-4 mb-4 flex items-center gap-3">
               <div className="w-10 h-10 rounded-full premium-gradient flex items-center justify-center text-white font-bold text-xs shadow-lg">AD</div>
               <div className="overflow-hidden">
                 <p className="text-xs font-bold text-primary truncate">{user.email}</p>
                 <p className="text-[10px] text-stone-400 font-bold uppercase">Administrator</p>
               </div>
            </div>
            <Button variant="ghost" className="w-full text-destructive hover:bg-destructive/5 rounded-2xl justify-start gap-3 h-12 font-bold transition-all" onClick={() => auth && signOut(auth)}>
              <LogOut className="w-5 h-5" />
              <span>Sign Out</span>
            </Button>
          </div>
        </Sidebar>
        <main className="flex-1 overflow-auto p-12 amazigh-pattern-bg">
          <div className="max-w-7xl mx-auto">
             {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
