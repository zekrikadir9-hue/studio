
"use client"
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { LayoutDashboard, ShoppingCart, Package, Users, Settings, LogOut, Lock, LayoutGrid, UserPlus } from 'lucide-react';
import Link from 'next/link';
import { useUser, useAuth } from '@/firebase';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';

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
        toast({ title: "Admin Created", description: "Your admin account has been created successfully." });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        toast({ title: "Welcome back", description: "Successfully authorized." });
      }
    } catch (e: any) {
      toast({ 
        title: "Auth Error", 
        description: e.message || "Invalid credentials or connection error.",
        variant: "destructive" 
      });
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center font-headline text-3xl animate-pulse text-primary">THILELI...</div>;

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50 px-4">
        <div className="max-w-md w-full glass-card p-10 rounded-[2rem] space-y-8">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-headline font-bold text-primary">
              {isRegistering ? 'Setup Admin' : 'Admin Access'}
            </h1>
            <p className="text-muted-foreground text-sm">Protected by THILELI Security</p>
          </div>
          
          <form onSubmit={handleAuth} className="space-y-4">
            <div className="space-y-2">
              <Input 
                type="email" 
                placeholder="Admin Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="h-12 rounded-xl" 
                required 
              />
            </div>
            <div className="space-y-2">
              <Input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="h-12 rounded-xl" 
                required 
              />
            </div>
            
            <Button type="submit" className="w-full h-12 font-bold rounded-xl btn-hover-effect">
              {isRegistering ? 'Create Account' : 'Authorize Access'}
            </Button>
            
            <Button 
              type="button" 
              variant="ghost" 
              className="w-full text-xs text-muted-foreground hover:bg-transparent"
              onClick={() => setIsRegistering(!isRegistering)}
            >
              {isRegistering ? 'Already have an account? Login' : 'First time? Create Admin Account'}
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-stone-50 w-full" dir="ltr">
        <Sidebar className="border-r border-stone-200 bg-white">
          <SidebarHeader className="p-6">
            <Link href="/" className="flex items-center gap-2 mb-8">
               <span className="font-headline text-2xl font-bold text-primary">THILELI Panel</span>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu className="px-3 gap-2">
              <SidebarMenuItem>
                <Link href="/admin">
                  <SidebarMenuButton className="h-12 hover:bg-stone-100 rounded-xl">
                    <LayoutDashboard className="w-5 h-5 text-primary" />
                    <span className="font-medium">Dashboard</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href="/admin/orders">
                  <SidebarMenuButton className="h-12 hover:bg-stone-100 rounded-xl">
                    <ShoppingCart className="w-5 h-5 text-primary" />
                    <span className="font-medium">Orders</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href="/admin/products">
                  <SidebarMenuButton className="h-12 hover:bg-stone-100 rounded-xl">
                    <Package className="w-5 h-5 text-primary" />
                    <span className="font-medium">Products</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href="/admin/categories">
                  <SidebarMenuButton className="h-12 hover:bg-stone-100 rounded-xl">
                    <LayoutGrid className="w-5 h-5 text-primary" />
                    <span className="font-medium">Categories</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <div className="my-4 border-t border-stone-100" />
              <SidebarMenuItem>
                <Link href="/admin/settings">
                  <SidebarMenuButton className="h-12 hover:bg-stone-100 rounded-xl">
                    <Settings className="w-5 h-5 text-primary" />
                    <span className="font-medium">Settings</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <div className="mt-auto p-4 border-t border-stone-100">
            <Button variant="ghost" className="w-full text-destructive hover:bg-destructive/10 rounded-xl justify-start gap-3" onClick={() => auth && signOut(auth)}>
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </Button>
          </div>
        </Sidebar>
        <main className="flex-1 overflow-auto p-8">
          <div className="max-w-7xl mx-auto">
             {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
