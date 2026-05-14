import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingBag, TrendingUp, Users, AlertCircle } from 'lucide-react';

export default function AdminPage() {
  const stats = [
    { title: 'Total Revenue', value: '450,000 DA', icon: TrendingUp, change: '+12%', color: 'text-green-600' },
    { title: 'Active Orders', value: '24', icon: ShoppingBag, change: '8 pending', color: 'text-blue-600' },
    { title: 'Customers', value: '1,204', icon: Users, change: '+45 new', color: 'text-purple-600' },
    { title: 'Fraud Alerts', value: '3', icon: AlertCircle, change: 'Requires review', color: 'text-red-600' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline font-bold text-primary">Ahlan, Administrator</h1>
        <p className="text-muted-foreground">Overview of THILELI Store performance today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="border-stone-200 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <Card className="border-stone-200">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[1,2,3].map((_, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-stone-100 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center font-bold text-primary">JD</div>
                      <div>
                        <p className="font-medium">Jan Doe</p>
                        <p className="text-sm text-muted-foreground">jan@example.com</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">+12,500 DA</p>
                      <p className="text-xs text-muted-foreground">Tizi Ouzou</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
         </Card>
         
         <Card className="border-stone-200">
            <CardHeader>
              <CardTitle>Fraud Activity Monitor</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-destructive/5 border border-destructive/10 rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-3 text-destructive">
                  <AlertCircle className="w-5 h-5" />
                  <span className="font-bold">3 High Risk Orders Detected</span>
                </div>
                <p className="text-sm text-muted-foreground">AI has identified patterns associated with suspicious activity. Please review the orders in the management tab.</p>
                <div className="flex gap-2">
                  <button className="text-sm font-bold bg-destructive text-white px-4 py-2 rounded-md">Review Now</button>
                </div>
              </div>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}