import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { LayoutDashboard, ShoppingCart, Package, Users, Settings, LogOut, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-stone-50 w-full">
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
                  <SidebarMenuButton className="h-12 hover:bg-stone-100">
                    <LayoutDashboard className="w-5 h-5 text-primary" />
                    <span className="font-medium">Dashboard</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href="/admin/orders">
                  <SidebarMenuButton className="h-12 hover:bg-stone-100">
                    <ShoppingCart className="w-5 h-5 text-primary" />
                    <span className="font-medium">Orders</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href="/admin/products">
                  <SidebarMenuButton className="h-12 hover:bg-stone-100">
                    <Package className="w-5 h-5 text-primary" />
                    <span className="font-medium">Products</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href="/admin/customers">
                  <SidebarMenuButton className="h-12 hover:bg-stone-100">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-medium">Blacklist / Customers</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <div className="my-4 border-t border-stone-100" />
              <SidebarMenuItem>
                <Link href="/admin/settings">
                  <SidebarMenuButton className="h-12 hover:bg-stone-100">
                    <Settings className="w-5 h-5 text-primary" />
                    <span className="font-medium">Settings</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <div className="mt-auto p-4 border-t border-stone-100">
            <SidebarMenuButton className="w-full text-destructive hover:bg-destructive/10">
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </SidebarMenuButton>
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