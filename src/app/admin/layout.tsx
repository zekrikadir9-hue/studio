
"use client"
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { LayoutDashboard, ShoppingCart, Package, Users, Settings, LogOut, Lock, LayoutGrid, ShieldCheck, Sparkles, Loader2, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { useUser, useAuth } from '@/firebase';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';
import { AmazighZay } from '@/components/icons/AmazighZay';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, loading: userLoading } = useUser();
  const auth = useAuth();
  const { toast } = useToast();
  
  const [email, setEmail] = useState('zekrikadir32@gmail.com');
  const [password, setPassword] = useState('Azekri88');
  const [isRegistering, setIsRegistering] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const autoLogin = async () => {
      if (auth && !user && !userLoading && !authLoading) {
        setAuthLoading(true);
        try {
          await signInWithEmailAndPassword(auth, 'zekrikadir32@gmail.com', 'Azekri88');
          toast({ title: "تم الدخول التلقائي", description: "مرحباً بك في نظام ثيليلي." });
        } catch (e: any) {
          console.log("Auto-login failed:", e.code);
          if (e.code === 'auth/operation-not-allowed') {
            setErrorMessage("يجب تفعيل 'Email/Password' في لوحة تحكم Firebase (قسم Authentication).");
          } else if (e.code === 'auth/invalid-api-key') {
            setErrorMessage("مفتاح API الخاص بـ Firebase غير صحيح. تأكد من إعدادات Vercel.");
          }
        } finally {
          setAuthLoading(false);
        }
      }
    };
    autoLogin();
  }, [auth, user, userLoading]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth) return;
    setAuthLoading(true);
    setErrorMessage(null);
    
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
        toast({ title: "تم تفعيل الحساب بنجاح", description: "أهلاً بك يا أدمن في نظام ثيليلي." });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        toast({ title: "دخول آمن", description: "مرحباً بعودتك إلى لوحة التحكم." });
      }
    } catch (e: any) {
      let msg = "يرجى التأكد من البيانات أو اضغط على تفعيل الحساب إذا كانت المرة الأولى.";
      if (e.code === 'auth/operation-not-allowed') msg = "يجب تفعيل 'Email/Password' في Firebase Console.";
      if (e.code === 'auth/user-not-found') msg = "الحساب غير موجود. جرب 'تفعيل الحساب' أولاً.";
      
      setErrorMessage(msg);
      toast({ 
        title: "خطأ في التحقق", 
        description: msg,
        variant: "destructive" 
      });
    } finally {
      setAuthLoading(false);
    }
  };

  if (userLoading || (authLoading && !user)) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50">
      <div className="animate-float">
        <AmazighZay className="w-20 h-20 text-primary opacity-20" />
      </div>
      <div className="mt-8 flex flex-col items-center gap-4">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
        <p className="font-headline text-2xl text-primary animate-pulse tracking-widest uppercase">Thileli Secure Access</p>
        <p className="text-xs text-stone-400 font-bold">جاري التحقق من الهوية...</p>
      </div>
    </div>
  );

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-100 amazigh-pattern-bg px-4 relative overflow-hidden">
        <div className="max-w-md w-full glass-card p-12 rounded-[3.5rem] space-y-8 relative overflow-hidden border-none shadow-2xl z-10">
          <div className="text-center space-y-4">
            <div className="w-24 h-24 bg-primary rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <Lock className="w-12 h-12 text-secondary" />
            </div>
            <h1 className="text-4xl font-headline font-bold text-primary">
              {isRegistering ? 'إعداد المسؤول' : 'بوابة ثيليلي'}
            </h1>
          </div>

          {errorMessage && (
            <Alert variant="destructive" className="rounded-2xl border-destructive/50">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle className="font-bold">خطأ تقني</AlertTitle>
              <AlertDescription className="text-xs">{errorMessage}</AlertDescription>
            </Alert>
          )}
          
          <form onSubmit={handleAuth} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Input 
                  type="email" 
                  placeholder="zekrikadir32@gmail.com" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  className="h-14 rounded-2xl text-center font-bold" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Input 
                  type="password" 
                  placeholder="••••••••" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  className="h-14 rounded-2xl text-center" 
                  required 
                />
              </div>
            </div>
            
            <Button 
              type="submit" 
              disabled={authLoading}
              className="w-full h-16 font-bold rounded-2xl premium-gradient text-white shadow-xl btn-hover-effect text-lg"
            >
              {authLoading ? 'جاري التحقق...' : (isRegistering ? 'تفعيل الحساب (لأول مرة)' : 'دخول آمن')}
            </Button>
            
            <button 
              type="button" 
              className="w-full text-xs text-stone-400 hover:text-primary transition-colors font-bold"
              onClick={() => setIsRegistering(!isRegistering)}
            >
              {isRegistering ? 'لديك حساب؟ سجل دخولك' : 'مستخدم جديد؟ اضغط هنا للتفعيل الأول'}
            </button>
          </form>
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
              ].map((item) => (
                <SidebarMenuItem key={item.href}>
                  <Link href={item.href}>
                    <SidebarMenuButton className="h-14 hover:bg-stone-50 rounded-2xl px-4 transition-all group">
                      <item.icon className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors" />
                      <span className="font-bold text-stone-600 group-hover:text-primary">{item.label}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <div className="mt-auto p-6 border-t border-stone-100">
            <Button variant="ghost" className="w-full text-destructive hover:bg-destructive/5 rounded-2xl justify-start gap-3 h-12 font-bold" onClick={() => auth && signOut(auth)}>
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
