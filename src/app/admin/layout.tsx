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
  const [authLoading, setAuthLoading] = useState(false);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth) return;
    setAuthLoading(true);
    
    try {
      if (isRegistering) {
        // إنشاء الحساب للمرة الأولى (سيقوم فيربيس بتشفير كلمة السر تلقائياً)
        await createUserWithEmailAndPassword(auth, email, password);
        toast({ title: "تم تفعيل الحساب بنجاح", description: "أهلاً بك يا أدمن في نظام ثيليلي." });
      } else {
        // تسجيل الدخول العادي
        await signInWithEmailAndPassword(auth, email, password);
        toast({ title: "دخول آمن", description: "مرحباً بعودتك إلى لوحة التحكم." });
      }
    } catch (e: any) {
      toast({ 
        title: "خطأ في التحقق", 
        description: "يرجى التأكد من البريد الإلكتروني وكلمة السر (Azekri88).",
        variant: "destructive" 
      });
    } finally {
      setAuthLoading(false);
    }
  };

  if (loading) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50">
      <div className="animate-float">
        <AmazighZay className="w-20 h-20 text-primary opacity-20" />
      </div>
      <p className="mt-8 font-headline text-2xl text-primary animate-pulse tracking-widest uppercase">Thileli Secure Access</p>
    </div>
  );

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-100 amazigh-pattern-bg px-4 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-3xl" />

        <div className="max-w-md w-full glass-card p-12 rounded-[3.5rem] space-y-8 relative overflow-hidden border-none shadow-2xl z-10">
          <div className="text-center space-y-4">
            <div className="w-24 h-24 bg-primary rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 shadow-2xl rotate-3 transition-transform hover:rotate-0 duration-500">
              <Lock className="w-12 h-12 text-secondary" />
            </div>
            <h1 className="text-4xl font-headline font-bold text-primary">
              {isRegistering ? 'إعداد المسؤول' : 'بوابة ثيليلي'}
            </h1>
            <p className="text-muted-foreground text-sm font-medium tracking-wide">نظام إدارة المحتوى المحمي بتشفير 256-bit</p>
          </div>
          
          <form onSubmit={handleAuth} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-stone-400 mr-4 tracking-widest">بريد المسؤول</label>
                <Input 
                  type="email" 
                  placeholder="zekrikadir32@gmail.com" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  className="h-14 rounded-2xl border-stone-200 bg-white/50 focus:bg-white transition-all text-center text-primary font-bold" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-stone-400 mr-4 tracking-widest">كلمة المرور المشفرة</label>
                <Input 
                  type="password" 
                  placeholder="••••••••" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  className="h-14 rounded-2xl border-stone-200 bg-white/50 focus:bg-white transition-all text-center" 
                  required 
                />
              </div>
            </div>
            
            <Button 
              type="submit" 
              disabled={authLoading}
              className="w-full h-16 font-bold rounded-2xl premium-gradient text-white shadow-xl btn-hover-effect text-lg"
            >
              {authLoading ? 'جاري التحقق...' : (isRegistering ? 'تفعيل الحساب' : 'دخول آمن')}
            </Button>
            
            <button 
              type="button" 
              className="w-full text-xs text-stone-400 hover:text-primary transition-colors mt-2 font-bold uppercase tracking-tighter"
              onClick={() => setIsRegistering(!isRegistering)}
            >
              {isRegistering ? 'لديك حساب؟ سجل دخولك' : 'مستخدم جديد؟ اضغط هنا للتفعيل الأول'}
            </button>
          </form>

          <div className="pt-8 border-t border-stone-100 flex items-center justify-center gap-2 text-[10px] text-stone-400 font-bold uppercase tracking-[0.2em]">
            <ShieldCheck className="w-3 h-3 text-secondary" />
            <span>End-to-End Encrypted Data</span>
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
               <div className="p-2 bg-primary rounded-xl group-hover:rotate-12 transition-transform shadow-lg">
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
            <div className="bg-stone-50 rounded-2xl p-4 mb-4 flex items-center gap-3 border border-stone-100">
               <div className="w-10 h-10 rounded-full premium-gradient flex items-center justify-center text-white font-bold text-xs shadow-lg">AD</div>
               <div className="overflow-hidden">
                 <p className="text-[10px] font-bold text-primary truncate">{user.email}</p>
                 <p className="text-[8px] text-stone-400 font-black uppercase tracking-widest">Secure Admin</p>
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
