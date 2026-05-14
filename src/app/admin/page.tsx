import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingBag, TrendingUp, Users, AlertCircle, Sparkles, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function AdminPage() {
  const stats = [
    { title: 'Total Revenue', value: '450,000 DA', icon: TrendingUp, change: '+12% from last week', color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { title: 'Active Orders', value: '24', icon: ShoppingBag, change: '8 orders pending', color: 'text-amber-600', bg: 'bg-amber-50' },
    { title: 'Customers', value: '1,204', icon: Users, change: '+45 new this month', color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { title: 'Fraud Alerts', value: '3', icon: AlertCircle, change: 'Critical review needed', color: 'text-rose-600', bg: 'bg-rose-50' },
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="flex justify-between items-end">
        <div>
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
            <Sparkles className="w-3 h-3" /> System Operational
          </div>
          <h1 className="text-5xl font-headline font-bold text-primary">Welcome, Admin</h1>
          <p className="text-stone-400 mt-2 font-medium">Monitoring the Thileli Heritage platform real-time.</p>
        </div>
        <div className="flex gap-4">
           <div className="text-right">
              <p className="text-[10px] text-stone-400 font-bold uppercase">Server Status</p>
              <p className="text-sm font-bold text-emerald-500 flex items-center justify-end gap-1">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" /> Global Secure
              </p>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <Card key={i} className="border-none shadow-2xl shadow-stone-200/50 rounded-[2.5rem] overflow-hidden group hover:scale-[1.02] transition-transform">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 p-8">
              <CardTitle className="text-xs font-black uppercase tracking-widest text-stone-400">{stat.title}</CardTitle>
              <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color} group-hover:rotate-12 transition-transform`}>
                <stat.icon className="h-5 w-5" />
              </div>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="text-4xl font-headline font-bold text-primary">{stat.value}</div>
              <p className="text-xs font-medium text-stone-400 mt-2 flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3 text-emerald-500" /> {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         <Card className="lg:col-span-2 border-none glass-card rounded-[3rem] p-4">
            <CardHeader className="p-8">
              <CardTitle className="text-2xl font-headline font-bold text-primary flex items-center gap-3">
                 Recent Activity <span className="text-[10px] font-black bg-primary/5 text-primary px-3 py-1 rounded-full uppercase">Live</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8">
              <div className="space-y-8">
                {[1,2,3,4].map((_, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-stone-100 pb-6 last:border-0 last:pb-0 group">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-stone-100 flex items-center justify-center font-bold text-primary text-xl group-hover:bg-primary group-hover:text-white transition-all">JD</div>
                      <div>
                        <p className="font-bold text-lg text-primary">Amine Benkabyle</p>
                        <p className="text-xs text-stone-400">Order #ORD-2024-{100+i} • 2 mins ago</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-secondary text-xl">+12,500 DA</p>
                      <p className="text-[10px] text-stone-400 font-bold uppercase">Tizi Ouzou</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
         </Card>
         
         <Card className="border-none premium-gradient text-white rounded-[3rem] p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:rotate-45 transition-transform duration-1000">
               <ShieldCheck className="w-32 h-32" />
            </div>
            <div className="relative z-10 space-y-6">
               <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                 <AlertCircle className="w-6 h-6 text-secondary" />
               </div>
               <h3 className="text-3xl font-headline font-bold">AI Fraud Guard</h3>
               <p className="text-white/70 text-sm leading-relaxed font-medium">
                 Our AI has analyzed 45 orders today. 3 were flagged for manual review due to suspicious delivery patterns.
               </p>
               <div className="pt-6">
                 <button className="w-full bg-secondary text-white font-bold py-4 rounded-2xl shadow-xl shadow-black/20 hover:bg-secondary/90 transition-all text-sm uppercase tracking-widest">
                   Run Detailed Scan
                 </button>
               </div>
            </div>
         </Card>
      </div>
    </div>
  );
}
